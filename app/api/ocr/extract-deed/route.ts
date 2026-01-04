import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('image') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No image file provided' },
                { status: 400 }
            );
        }

        // Check if API key exists
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: 'Gemini API key not configured' },
                { status: 500 }
            );
        }

        // Convert file to base64
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64Image = buffer.toString('base64');

        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Create prompt for extracting Thai land deed information
        const prompt = `คุณเป็นผู้เชี่ยวชาญในการอ่านโฉนดที่ดินไทย กรุณาวิเคราะห์รูปภาพโฉนดที่ดินนี้และสกัดข้อมูลต่อไปนี้ออกมา:

1. ประเภทโฉนด (เช่น โฉนดที่ดิน, น.ส.3, น.ส.3ก, ส.ค.1)
2. เลขที่โฉนด
3. ขนาดที่ดิน (ไร่-งาน-ตารางวา)
4. จังหวัด
5. อำเภอ
6. ตำบล
7. หมู่ที่ (ถ้ามี)
8. วันที่ออกโฉนด (ถ้ามี)

กรุณาตอบกลับในรูปแบบ JSON เท่านั้น โดยใช้ format นี้:
{
  "deedType": "ประเภทโฉนด",
  "deedNumber": "เลขที่โฉนด",
  "landSizeRai": "จำนวนไร่",
  "landSizeNgan": "จำนวนงาน",
  "landSizeWa": "จำนวนตารางวา",
  "province": "ชื่อจังหวัด",
  "district": "ชื่ออำเภอ",
  "subdistrict": "ชื่อตำบล",
  "villageNo": "หมู่ที่",
  "issueDate": "วันที่ออกโฉนด (YYYY-MM-DD)"
}

หากไม่พบข้อมูลใด ให้ใส่ค่าว่าง "" แทน
ตอบเป็น JSON object เท่านั้น ไม่ต้องมีคำอธิบายเพิ่มเติม`;

        // Generate content with image
        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    mimeType: file.type,
                    data: base64Image,
                },
            },
        ]);

        const response = await result.response;
        const text = response.text();

        // Try to parse JSON from response
        let extractedData;
        try {
            // Remove markdown code blocks if present
            const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            extractedData = JSON.parse(cleanedText);
        } catch (parseError) {
            console.error('Failed to parse Gemini response:', text);
            return NextResponse.json(
                { error: 'Failed to parse OCR results', rawResponse: text },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: extractedData,
        });

    } catch (error) {
        console.error('OCR extraction error:', error);
        return NextResponse.json(
            { error: 'Failed to process image', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
