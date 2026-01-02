export interface TrendPoint {
    year: string;
    priceIndex: number; // Base 100
    avgPrice: number;
}

export interface FutureProject {
    name: string;
    type: 'transport' | 'commercial' | 'infrastructure';
    completionYear: string;
    impact: 'high' | 'medium' | 'low';
    location?: { lat: number, lng: number };
}

export interface LandForecastResult {
    currentPrice: number;
    predictedPrice5Years: number;
    growthRate: number;
    confidence: number;
    trends: TrendPoint[];
    futureProjects: FutureProject[];
    summary: string;
}

export const LandForecastService = {
    predict: async (lat: number, lng: number): Promise<LandForecastResult> => {
        // Simulate AI Processing
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock Data Generation
        const currentYear = new Date().getFullYear();
        const basePrice = 25000 + Math.random() * 50000; // Random price per Wah

        const trends: TrendPoint[] = [];
        for (let i = -3; i <= 7; i++) {
            const year = currentYear + i;
            const growthFactor = 1 + (i * (0.05 + Math.random() * 0.02)); // ~5-7% growth
            trends.push({
                year: year.toString(),
                priceIndex: Math.round(100 * growthFactor),
                avgPrice: Math.round(basePrice * growthFactor)
            });
        }

        return {
            currentPrice: Math.round(basePrice),
            predictedPrice5Years: Math.round(basePrice * 1.35), // ~35% growth
            growthRate: 7.5,
            confidence: 88,
            trends,
            futureProjects: [
                {
                    name: "ส่วนต่อขยายรถไฟฟ้าสายสีชมพู",
                    type: 'transport',
                    completionYear: '2027',
                    impact: 'high',
                    location: { lat: lat + 0.002, lng: lng + 0.002 }
                },
                {
                    name: "ศูนย์การค้า Community Mall แห่งใหม่",
                    type: 'commercial',
                    completionYear: '2026',
                    impact: 'medium',
                    location: { lat: lat - 0.002, lng: lng - 0.001 }
                }
            ],
            summary: "พื้นที่นี้มีศักยภาพสูงเนื่องจากการขยายตัวของระบบขนส่งมวลชน คาดว่าราคาที่ดินจะปรับตัวสูงขึ้นเฉลี่ย 7.5% ต่อปี"
        };
    }
};
