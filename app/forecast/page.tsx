'use client';

import Navbar from '@/components/layout/Navbar';
import DynamicMap from '@/components/ui/DynamicMap';
import Card, { CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useEffect, useState } from 'react';
import { LandForecastService, LandForecastResult } from '@/lib/LandForecastService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, MapPin, Loader2 } from 'lucide-react';

export default function ForecastPage() {
    const [data, setData] = useState<LandForecastResult | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await LandForecastService.predict(13.7563, 100.5018); // Default mock location
            setData(result);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-navy flex items-center gap-2">
                            <TrendingUp className="text-gold" /> AI Land Forecast
                        </h1>
                        <p className="text-gray-500 text-sm">ทำนายแนวโน้มราคาและการเติบโตของพื้นที่ด้วย AI Satellite</p>
                    </div>
                    {data && (
                        <div className="flex gap-4">
                            <div className="text-right">
                                <p className="text-xs text-gray-400">ราคาปัจจุบัน (ต่อ ตร.ว.)</p>
                                <p className="text-xl font-bold text-navy">฿{data.currentPrice.toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-400">คาดการณ์ 5 ปี</p>
                                <p className="text-xl font-bold text-green-600">฿{data.predictedPrice5Years.toLocaleString()}</p>
                            </div>
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="h-64 flex items-center justify-center bg-white rounded-xl shadow-sm">
                        <Loader2 className="w-8 h-8 animate-spin text-navy" />
                        <span className="ml-2 text-gray-500">AI Forecasting...</span>
                    </div>
                ) : data && (
                    <div className="flex flex-col gap-6">
                        {/* Map & Projects */}
                        <Card className="overflow-hidden relative min-h-[400px]">
                            <div className="absolute inset-0 z-0">
                                <DynamicMap
                                    center={[13.7563, 100.5018]}
                                    zoom={14}
                                    markers={data.futureProjects.map(p => ({
                                        position: [p.location!.lat, p.location!.lng],
                                        title: `${p.name} (${p.completionYear})`
                                    }))}
                                    circles={data.futureProjects.map(p => ({
                                        center: [p.location!.lat, p.location!.lng],
                                        radius: 300,
                                        color: '#3b82f6',
                                        fillColor: '#3b82f6'
                                    }))}
                                />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <div className="bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100">
                                    <h4 className="font-bold text-navy text-sm mb-2">โครงการในอนาคต (AI Detected)</h4>
                                    <div className="space-y-2">
                                        {data.futureProjects.map((p, i) => (
                                            <div key={i} className="flex justify-between items-center text-xs">
                                                <span className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                    {p.name}
                                                </span>
                                                <Badge variant="medium">{p.completionYear}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* AI Summary */}
                        <Card className="bg-navy text-white">
                            <CardBody className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">บทวิเคราะห์ AI</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        {data.summary}
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}
