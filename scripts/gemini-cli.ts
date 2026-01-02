#!/usr/bin/env node
import { GoogleGenerativeAI } from "@google/generative-ai";

// รับ API key จาก environment variable
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ กรุณาตั้งค่า GEMINI_API_KEY environment variable");
  console.log("\nวิธีตั้งค่า:");
  console.log('Windows (PowerShell): $env:GEMINI_API_KEY="your-api-key"');
  console.log("Windows (CMD): set GEMINI_API_KEY=your-api-key");
  console.log("Linux/Mac: export GEMINI_API_KEY=your-api-key");
  process.exit(1);
}

// สร้าง instance ของ Gemini AI
const genAI = new GoogleGenerativeAI(API_KEY);

async function chat(prompt: string) {
  try {
    console.log("🤖 กำลังประมวลผล...\n");

    // ใช้ gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // ส่งคำถาม
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("📝 คำตอบจาก Gemini:\n");
    console.log(text);
    console.log("\n✅ เสร็จสิ้น!");
  } catch (error: any) {
    console.error("❌ เกิดข้อผิดพลาด:", error.message);
    process.exit(1);
  }
}

async function chatStream(prompt: string) {
  try {
    console.log("🤖 กำลังประมวลผล...\n");
    console.log("📝 คำตอบจาก Gemini:\n");

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContentStream(prompt);

    // แสดงผลแบบ stream
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      process.stdout.write(chunkText);
    }

    console.log("\n\n✅ เสร็จสิ้น!");
  } catch (error: any) {
    console.error("❌ เกิดข้อผิดพลาด:", error.message);
    process.exit(1);
  }
}

// รับ arguments จาก command line
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("📚 วิธีใช้งาน Gemini CLI:");
  console.log("\nคำสั่งพื้นฐาน:");
  console.log('  npm run gemini "คำถามของคุณ"');
  console.log('  npm run gemini-stream "คำถามของคุณ" (แสดงผลแบบ real-time)');
  console.log("\nตัวอย่าง:");
  console.log('  npm run gemini "อธิบายเรื่อง Next.js ให้หน่อย"');
  console.log('  npm run gemini-stream "เขียนโค้ด React component ให้หน่อย"');
  process.exit(0);
}

// ตรวจสอบโหมด
const isStream = process.env.STREAM_MODE === "true";
const prompt = args.join(" ");

// เรียกใช้งาน
if (isStream) {
  chatStream(prompt);
} else {
  chat(prompt);
}
