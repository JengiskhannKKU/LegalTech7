import { RiskFactor } from './DisasterAnalysisService';

export interface ConstructionChange {
    id: string;
    type: 'new-structure' | 'vegetation-cleared' | 'fence-detected';
    location: { lat: number, lng: number };
    confidence: number;
    detectedAt: string;
    imageUrl: string;
}

export const LandMonitoringService = {
    // Simulate checking for changes between two timestamps/image IDs
    checkForChanges: async (centerLat: number, centerLng: number): Promise<ConstructionChange[]> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Randomly decide if we find something (for demo purposes, we usually will)
        const hasChange = Math.random() > 0.3;

        if (!hasChange) return [];

        return [
            {
                id: `chg-${Date.now()}`,
                type: 'new-structure',
                location: {
                    lat: centerLat + 0.0005,
                    lng: centerLng + 0.0005
                },
                confidence: 0.95,
                detectedAt: new Date().toISOString(),
                imageUrl: '/images/construction_site.png' // Construction site placeholder
            }
        ];
    }
};
