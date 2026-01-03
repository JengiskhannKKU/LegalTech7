'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useEffect, useState } from 'react';
import { DisasterAnalysisService, AIAnalysisResult } from '@/lib/DisasterAnalysisService';
import { LandMonitoringService, ConstructionChange } from '@/lib/LandMonitoringService';
import DynamicMap from '@/components/ui/DynamicMap';
import { AlertTriangle, Info, MapPin, Eye, EyeOff, CheckCircle, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { mockLands } from '@/lib/mockData';

export default function RiskAssessmentPage() {
    const [selectedLandId, setSelectedLandId] = useState<string>(mockLands[0].id);
    const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null);
    const [scanning, setScanning] = useState(true);
    const [isMonitoring, setIsMonitoring] = useState(false);
    const [constructionChanges, setConstructionChanges] = useState<ConstructionChange[]>([]);

    // Toggle Monitoring Logic
    const toggleMonitoring = async () => {
        if (isMonitoring) {
            setIsMonitoring(false);
            setConstructionChanges([]);
            return;
        }

        setIsMonitoring(true);
        if (analysisResult) {
            // Simulate detecting change after a delay
            const changes = await LandMonitoringService.checkForChanges(
                analysisResult.coordinates.lat,
                analysisResult.coordinates.lng
            );
            setConstructionChanges(changes);
        }
    };

    const selectedLand = mockLands.find(l => l.id === selectedLandId) || mockLands[0];

    useEffect(() => {
        const runAnalysis = async () => {
            setScanning(true);
            // Simulate scanning selected land
            const result = await DisasterAnalysisService.analyze(selectedLand.coordinates.lat, selectedLand.coordinates.lng);
            setAnalysisResult(result);
            setScanning(false);
        };
        runAnalysis();
    }, [selectedLandId]);

    const getRiskColor = (severity: string) => {
        switch (severity) {
            case 'critical': return 'bg-red-500';
            case 'high': return 'bg-orange-500';
            case 'medium': return 'bg-yellow-500';
            default: return 'bg-green-500';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-grow relative">
                {/* Map Background */}
                <div className="absolute inset-0 z-0">
                    {scanning ? (
                        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 border-4 border-navy border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
                                <h2 className="text-xl font-bold text-navy">กำลังวิเคราะห์ความเสี่ยงทางกฎหมาย...</h2>
                                <p className="text-gray-500 mt-2">ตรวจสอบการบุกรุก • การครอบครองปรปักษ์ • ภัยพิบัติ</p>
                            </div>
                        </div>
                    ) : analysisResult && (
                        <DynamicMap
                            center={[analysisResult.coordinates.lat, analysisResult.coordinates.lng]}
                            zoom={15}
                            riskZones={analysisResult.riskFactors.map(f => ({
                                center: [analysisResult.coordinates.lat + (Math.random() * 0.002 - 0.001), analysisResult.coordinates.lng + (Math.random() * 0.002 - 0.001)], // Jitter for visual demo
                                radius: 400,
                                level: f.severity === 'critical' ? 'high' : f.severity as any,
                                type: f.type === 'adverse-possession' ? 'ครอบครองปรปักษ์' : f.type === 'encroachment' ? 'การบุกรุก' : f.type
                            }))}
                            constructionChanges={constructionChanges.map(c => ({
                                location: c.location,
                                type: c.type
                            }))}
                            markers={[{
                                position: [analysisResult.coordinates.lat, analysisResult.coordinates.lng],
                                title: "ที่ดินของคุณ"
                            }]}
                            className="h-full w-full"
                        />
                    )}
                </div>

                {/* Overlays */}
                {!scanning && analysisResult && (
                    <div className="relative z-10 pointer-events-none p-4 h-full flex flex-col justify-end sm:justify-start">
                        {/* Header Overlay */}
                        <div className="bg-white/90 backdrop-blur pointer-events-auto p-4 rounded-xl shadow-lg max-w-md mx-auto sm:mx-0 sm:ml-4 sm:mt-4 border border-white/50">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-xl font-bold text-navy flex items-center gap-2 mb-2">
                                        <MapPin className="w-5 h-5 text-gold" />
                                        ผลการวิเคราะห์ที่ดิน
                                    </h1>

                                    <div className="relative">
                                        <select
                                            value={selectedLandId}
                                            onChange={(e) => setSelectedLandId(e.target.value)}
                                            className="appearance-none w-full bg-gray-50 border border-navy text-navy py-2 pl-3 pr-8 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer hover:bg-gray-100 transition-colors"
                                        >
                                            {mockLands.map(land => (
                                                <option key={land.id} value={land.id}>
                                                    {land.deedType} {land.deedNumber} - {land.province}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                    </div>

                                    <p className="text-xs text-text-light mt-2 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        พิกัด: {analysisResult.coordinates.lat.toFixed(4)}, {analysisResult.coordinates.lng.toFixed(4)}
                                    </p>
                                </div>

                                <button
                                    onClick={toggleMonitoring}
                                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold shadow-sm transition-all ${isMonitoring
                                        ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {isMonitoring ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                                    {isMonitoring ? 'Monitoring Active' : 'Start Monitoring'}
                                </button>
                            </div>

                            {constructionChanges.length > 0 && (
                                <div className="mb-3 bg-red-50 border border-red-200 rounded-lg p-3 animate-fade-in">
                                    <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                                        <AlertTriangle className="w-4 h-4" /> ตรวจพบความเปลี่ยนแปลง!
                                    </div>
                                    <p className="text-xs text-red-600">
                                        พบสิ่งปลูกสร้างใหม่ในพื้นที่เสี่ยง กรุณาตรวจสอบทันที
                                    </p>
                                    <img
                                        src={constructionChanges[0].imageUrl}
                                        alt="Detected Change"
                                        className="mt-2 rounded border border-red-100 h-24 w-full object-cover"
                                    />
                                    <div className="mt-2 flex gap-2">
                                        <Button size="sm" variant="outline" className="text-xs w-full">แจ้งเตือนผู้บุกรุก</Button>
                                        <Button size="sm" variant="danger" className="text-xs w-full">ติดต่อทนาย</Button>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start justify-between mb-4 mt-2">
                                {/* Removed old Badge logic from here, moving to large box below */}
                            </div>

                            {/* Status Box */}
                            <div className={`mb-4 p-4 rounded-xl border-l-4 shadow-sm ${analysisResult.overallRiskScore > 60
                                ? 'bg-red-50 border-red-500'
                                : 'bg-green-50 border-green-500'
                                }`}>
                                <div className="flex items-center gap-3 mb-2">
                                    {analysisResult.overallRiskScore > 60 ? (
                                        <AlertTriangle className="w-8 h-8 text-red-500" />
                                    ) : (
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    )}
                                    <div>
                                        <h2 className={`text-lg font-bold ${analysisResult.overallRiskScore > 60 ? 'text-red-700' : 'text-green-700'
                                            }`}>
                                            {analysisResult.overallRiskScore > 60 ? 'มีการลุกล้ำเกิดขึ้น' : 'ที่ดินปลอดภัย'}
                                        </h2>
                                        <p className={`text-sm ${analysisResult.overallRiskScore > 60 ? 'text-red-600' : 'text-green-600'
                                            }`}>
                                            {analysisResult.overallRiskScore > 60
                                                ? 'ตรวจพบความเสี่ยงสูงจากการบุกรุกและปัจจัยแวดล้อม'
                                                : 'ไม่พบความเสี่ยงสำคัญในขณะนี้ สภาพที่ดินปกติ'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                <h3 className="text-sm font-semibold text-gray-700">ความเสี่ยงที่ตรวจพบเพิ่มเติม</h3>
                                {analysisResult.riskFactors.map((factor, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${getRiskColor(factor.severity)}`}></span>
                                                <span className="font-semibold text-sm capitalize text-navy">
                                                    {factor.type === 'adverse-possession' ? 'ครอบครองปรปักษ์' :
                                                        factor.type === 'encroachment' ? 'การบุกรุก' : factor.type}
                                                </span>
                                            </div>
                                            <span className="text-xs font-bold text-gray-500">{factor.probability}%</span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {factor.description}
                                        </p>
                                    </div>
                                ))}

                                <div className="pt-2 border-t border-gray-100">
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2">คำแนะนำ AI</h3>
                                    <ul className="space-y-2">
                                        {analysisResult.recommendations.slice(0, 2).map((rec, i) => (
                                            <li key={i} className="flex gap-2 text-xs text-navy bg-blue-50 p-2 rounded">
                                                <Info className="w-4 h-4 flex-shrink-0 text-blue-500" />
                                                {rec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Standard footer might obscure the map view on mobile, maybe hide it? Keeping for now but styled properly above */}
        </div>
    );
}
