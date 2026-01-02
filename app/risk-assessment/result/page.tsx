'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Download, Share2, ArrowRight, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DisasterAnalysisService, AIAnalysisResult } from '@/lib/DisasterAnalysisService';
import DynamicMap from '@/components/ui/DynamicMap';
import Link from 'next/link';

export default function RiskAssessmentResultPage() {
    const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null);
    const [scanning, setScanning] = useState(true);

    useEffect(() => {
        const runAnalysis = async () => {
            // Default center for demo: Central Thailand or user location
            const result = await DisasterAnalysisService.analyze(13.7563, 100.5018);
            setAnalysisResult(result);
            setScanning(false);
        };
        runAnalysis();
    }, []);

    // Fallback if still scanning, or use the result once available.
    // We can keep 'result' as a derived variable for backward compatibility with existing JSX if needed,
    // OR rewrite the JSX to use analysisResult.
    // For now, let's map the AI result to the view, or show a loading state.

    if (scanning || !analysisResult) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-navy border-t-gold rounded-full animate-spin mb-4"></div>
                <h2 className="text-xl font-bold text-navy animate-pulse">AI กำลังวิเคราะห์ข้อมูลดาวเทียม...</h2>
                <p className="text-gray-500 text-sm mt-2">กำลังประมวลผลความเสี่ยงน้ำท่วมและดินถล่ม</p>
            </div>
        );
    }

    // Quick adapter to match existing 'result' structure where possible, or use analysisResult directly
    const riskScore = analysisResult.overallRiskScore;

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-red-600';
        if (score >= 50) return 'text-orange-500';
        return 'text-green-600';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-10 animate-fade-in">
                    <Badge variant="success" className="mb-4 text-sm px-4 py-1">AI Analysis Complete</Badge>
                    <h1 className="text-3xl font-bold text-navy mb-2">ผลการวิเคราะห์ความเสี่ยง (AI)</h1>
                    <p className="text-text-light">
                        พิกัด: {analysisResult.coordinates.lat.toFixed(4)}, {analysisResult.coordinates.lng.toFixed(4)} • วันที่: {new Date(analysisResult.timestamp).toLocaleDateString('th-TH')}
                    </p>
                </div>

                {/* AI Map Visualization */}
                <Card className="mb-8 overflow-hidden animate-slide-up">
                    <div className="h-[400px] w-full relative">
                        <DynamicMap
                            center={[analysisResult.coordinates.lat, analysisResult.coordinates.lng]}
                            zoom={15}
                            riskZones={analysisResult.riskFactors.map(f => ({
                                center: [analysisResult.coordinates.lat, analysisResult.coordinates.lng],
                                radius: 500, // Visual radius
                                level: f.severity === 'critical' ? 'high' : f.severity as any,
                                type: f.type
                            }))}
                            markers={[{
                                position: [analysisResult.coordinates.lat, analysisResult.coordinates.lng],
                                title: "Verified Location"
                            }]}
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded shadow-lg z-[400] max-w-xs">
                            <h4 className="font-bold text-navy mb-1 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Live Terrain Analysis
                            </h4>
                            <div className="text-xs space-y-1 text-gray-600">
                                <p>Elevation: {analysisResult.terrainAnalysis.elevation}</p>
                                <p>Slope: {analysisResult.terrainAnalysis.slope}</p>
                                <p>Soil: {analysisResult.terrainAnalysis.soilType}</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Overall Score */}
                    <Card className="md:col-span-3 bg-navy text-white animate-slide-up">
                        <CardBody className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">
                            <div className="text-center md:text-left flex-1">
                                <h2 className="text-2xl font-bold mb-2">ความเสี่ยงโดยรวม</h2>
                                <p className="text-blue-200">
                                    จากการวิเคราะห์ปัจจัยรอบด้าน พบว่าที่ดินของคุณมีความเสี่ยงในระดับ
                                    <span className="font-bold text-red-400 ml-1">สูง (High)</span>
                                    <br />ควรดำเนินการป้องกันโดยเร่งด่วน
                                </p>
                            </div>
                            <div className="relative w-48 h-48 flex-shrink-0">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff20" strokeWidth="10" />
                                    <circle
                                        cx="50" cy="50" r="45" fill="none" stroke="#C5A059" strokeWidth="10"
                                        strokeDasharray="283" strokeDashoffset={283 - (283 * riskScore / 100)}
                                        strokeLinecap="round"
                                        transform="rotate(-90 50 50)"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-bold text-gold">{riskScore}</span>
                                    <span className="text-xs uppercase text-blue-200">Risk Score</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Detailed Breakdown */}
                    <div className="md:col-span-2 space-y-6 animate-slide-up animation-delay-100">
                        <Card>
                            <CardHeader><h3 className="font-semibold text-lg">รายละเอียดความเสี่ยงแต่ละด้าน</h3></CardHeader>
                            <CardBody className="space-y-6">
                                {analysisResult.riskFactors.map((factor, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-end mb-2">
                                            <div>
                                                <h4 className="font-medium text-navy capitalize">{factor.type} Risk</h4>
                                                <span className="text-xs text-text-light">Severity: {factor.severity}</span>
                                            </div>
                                            <span className={`text-xl font-bold ${getScoreColor(factor.probability)}`}>{factor.probability}%</span>
                                        </div>
                                        <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-1000 ${factor.severity === 'high' || factor.severity === 'critical' ? 'bg-red-500' :
                                                    factor.severity === 'medium' ? 'bg-orange-400' :
                                                        'bg-green-500'
                                                    }`}
                                                style={{ width: `${factor.probability}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">{factor.description}</p>
                                    </div>
                                ))}
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader><h3 className="font-semibold text-lg">ปัจจัยเสี่ยงที่ตรวจพบ</h3></CardHeader>
                            <CardBody>
                                <ul className="space-y-3">
                                    {analysisResult.riskFactors.filter(f => f.probability > 50).map((factor, i) => (
                                        <li key={i} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg text-red-800 text-sm">
                                            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            {factor.description}
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-6 animate-slide-up animation-delay-200">
                        <Card className="h-full border-t-4 border-t-gold">
                            <CardHeader><h3 className="font-semibold text-lg">คำแนะนำสำหรับคุณ</h3></CardHeader>
                            <CardBody className="space-y-4">
                                {analysisResult.recommendations.map((rec, i) => (
                                    <div key={i} className="relative pl-6 pb-6 border-l-2 border-gray-200 last:pb-0">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-white shadow-sm"></div>
                                        <h4 className="font-bold text-navy text-sm mb-1">คำแนะนำที่ {i + 1}</h4>
                                        <p className="text-xs text-text-light mb-2">{rec}</p>
                                        <Badge variant="medium">
                                            ควรดำเนินการ
                                        </Badge>
                                    </div>
                                ))}
                            </CardBody>
                        </Card>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
                    <Button variant="outline" icon={<Download className="w-4 h-4" />}>
                        ดาวน์โหลด PDF
                    </Button>
                    <Button variant="outline" icon={<Share2 className="w-4 h-4" />}>
                        แชร์ผลลัพธ์
                    </Button>
                    <Link href="/insurance">
                        <Button variant="primary">
                            ดูแผนประกันคุ้มครอง
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
