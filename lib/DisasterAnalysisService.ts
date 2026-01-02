export interface RiskFactor {
    type: 'flood' | 'landslide' | 'drought' | 'earthquake' | 'fire' | 'adverse-possession' | 'encroachment';
    severity: 'low' | 'medium' | 'high' | 'critical';
    probability: number; // 0-100
    description: string;
}

export interface AIAnalysisResult {
    coordinates: { lat: number, lng: number };
    overallRiskScore: number;
    timestamp: string;
    riskFactors: RiskFactor[];
    terrainAnalysis: {
        elevation: string;
        slope: string;
        soilType: string;
        nearestWaterBody: string;
    };
    recommendations: string[];
}

export const DisasterAnalysisService = {
    analyze: async (lat: number, lng: number): Promise<AIAnalysisResult> => {
        // Simulate AI Processing Delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock Logic: Generate random but semi-realistic data
        // In a real app, this would call Google Earth Engine API
        const randomScore = Math.floor(Math.random() * 40) + 40; // 40-80 risk score

        return {
            coordinates: { lat, lng },
            overallRiskScore: randomScore,
            timestamp: new Date().toISOString(),
            riskFactors: [
                {
                    type: 'flood',
                    severity: randomScore > 70 ? 'high' : 'medium',
                    probability: randomScore + 10,
                    description: 'พื้นที่ลุ่มต่ำ ใกล้แหล่งน้ำ มีความเสี่ยงน้ำท่วมขังสูงในช่วงฤดูฝน'
                },
                {
                    type: 'landslide',
                    severity: 'low',
                    probability: 15,
                    description: 'ความลาดชันต่ำ ดินมีความคงตัวดี ความเสี่ยงดินถล่มต่ำ'
                },
                {
                    type: 'adverse-possession',
                    severity: randomScore > 60 ? 'high' : 'low',
                    probability: randomScore + 5,
                    description: 'พื้นที่รกร้างไม่ได้ทำประโยชน์ นานเกิน 5 ปี มีความเสี่ยงถูกครอบครองปรปักษ์'
                },
                {
                    type: 'encroachment',
                    severity: 'medium',
                    probability: 45,
                    description: 'แนวเขตที่ดินไม่ชัดเจน มีสิ่งปลูกสร้างรุกล้ำจากแปลงข้างเคียง'
                }
            ],
            terrainAnalysis: {
                elevation: '15 เมตรจากระดับน้ำทะเล',
                slope: '2-5 องศา (ค่อนข้างราบเรียบ)',
                soilType: 'ดินเหนียวปนทราย',
                nearestWaterBody: 'คลองสาธารณะ (500 ม.)'
            },
            recommendations: [
                'ควรถมที่ดินสูงกว่าระดับถนนอย่างน้อย 50 ซม. เพื่อป้องกันน้ำท่วม',
                'ตรวจสอบแนวเขตริมน้ำและการกัดเซาะของตลิ่งทุกปี',
                'ควรทำประกันภัยพิบัติที่ครอบคลุมอุทกภัย'
            ]
        };
    }
};
