'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Alert from '@/components/ui/Alert';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, FileText, Share2, Printer, AlertTriangle, CheckCircle, Clock, ShieldAlert, Plus } from 'lucide-react';
import { mockLands, mockRiskAssessments, mockAlerts } from '@/lib/mockData';
import DynamicMap from '@/components/ui/DynamicMap';
import { useParams } from 'next/navigation';

export default function LandDetailsPage() {
    // In a real app, use params to fetch data. Here we mock it interactively.
    const params = useParams(); // Should handle if used in real component, but for mock we just pick first
    const land = mockLands[0];
    const riskAssessment = mockRiskAssessments[0];
    const landAlerts = mockAlerts.filter(a => a.landId === land.id);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb & Header */}
                <div className="mb-8">
                    <Link href="/my-lands" className="inline-flex items-center text-text-light hover:text-navy mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        กลับไปหน้ารายการ
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-navy">
                                    {land.deedType} {land.deedNumber}
                                </h1>
                                <Badge variant={land.riskLevel === 'high' ? 'critical' : 'medium'}>
                                    ความเสี่ยง{land.riskLevel === 'high' ? 'สูง' : 'ปานกลาง'}
                                </Badge>
                            </div>
                            <p className="text-text-light flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {land.subdistrict}, {land.district}, {land.province}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Button variant="outline" icon={<Share2 className="w-4 h-4" />}>
                                แชร์
                            </Button>
                            <Button variant="outline" icon={<Printer className="w-4 h-4" />}>
                                พิมพ์
                            </Button>
                            <Link href="/risk-assessment">
                                <Button variant="primary">
                                    ประเมินความเสี่ยงใหม่
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map Section */}
                        <Card className="overflow-hidden h-[450px]">
                            <DynamicMap
                                center={[land.coordinates.lat, land.coordinates.lng]}
                                zoom={15}
                                markers={[
                                    {
                                        position: [land.coordinates.lat, land.coordinates.lng],
                                        title: `ที่ดิน: ${land.deedType} ${land.deedNumber}`,
                                        content: (
                                            <div>
                                                <p className="font-bold text-navy">{land.deedType} {land.deedNumber}</p>
                                                <p className="text-xs">ขนาด: {land.landSizeRai}-{land.landSizeNgan}-{land.landSizeWa} ไร่</p>
                                            </div>
                                        )
                                    }
                                ]}
                                circles={[
                                    {
                                        center: [land.coordinates.lat, land.coordinates.lng],
                                        radius: 200, // Mock radius for risk zone
                                        color: '#ef4444',
                                        fillColor: '#ef4444'
                                    }
                                ]}
                                className="h-full w-full"
                            />
                        </Card>

                        {/* Risk Assessment Summary */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold flex items-center gap-2">
                                        <ShieldAlert className="w-5 h-5 text-navy" />
                                        ผลการประเมินความเสี่ยง
                                    </h2>
                                    <span className="text-sm text-text-light">
                                        ประเมินล่าสุด: {new Date(riskAssessment.assessmentDate).toLocaleDateString('th-TH')}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-6 flex items-center gap-8">
                                    {/* Gauge visual placeholder */}
                                    <div className="w-32 h-32 rounded-full border-8 border-gold flex items-center justify-center relative">
                                        <div className="text-center">
                                            <span className="text-3xl font-bold text-navy">{riskAssessment.overallRiskScore}</span>
                                            <span className="block text-xs uppercase text-text-light">คะแนนเสี่ยง</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        {Object.entries(riskAssessment.riskBreakdown).map(([key, data]) => (
                                            <div key={key}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="capitalize text-text">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                    <span className={`font-medium ${data.level === 'high' ? 'text-red-500' : 'text-gold'}`}>{data.score}%</span>
                                                </div>
                                                <div className="w-full bg-gray-100 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${data.level === 'high' ? 'bg-red-500' : data.level === 'medium' ? 'bg-gold' : 'bg-green-500'}`}
                                                        style={{ width: `${data.score}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6">
                                    <h3 className="font-semibold mb-4">คำแนะนำที่ต้องดำเนินการ</h3>
                                    <div className="space-y-3">
                                        {riskAssessment.recommendations.map((rec, i) => (
                                            <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                                                <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${rec.urgency === 'urgent' ? 'bg-red-500' : 'bg-gold'}`} />
                                                <div>
                                                    <p className="font-medium text-navy">{rec.action}</p>
                                                    <p className="text-sm text-text-light">{rec.reason}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Alert History */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-navy" />
                                    ประวัติการแจ้งเตือน
                                </h2>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-4">
                                    {landAlerts.map((alert) => (
                                        <div key={alert.alertId} className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className={`p-2 rounded-lg h-fit ${alert.alertLevel === 'critical' ? 'bg-red-100 text-red-600' : 'bg-gold-100 text-gold-600'}`}>
                                                <AlertTriangle className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4 className="font-semibold text-navy">{alert.description}</h4>
                                                    <span className="text-xs text-text-light">
                                                        {new Date(alert.timestamp).toLocaleDateString('th-TH')}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-text-light mb-2">ประเภท: {alert.alertType}</p>
                                                <Badge variant={alert.status === 'new' ? 'critical' : 'success'}>
                                                    {alert.status === 'new' ? 'ใหม่' : 'รับทราบแล้ว'}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                    {landAlerts.length === 0 && (
                                        <div className="text-center py-8 text-text-light">
                                            <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-500 opacity-50" />
                                            <p>ไม่มีการแจ้งเตือนในช่วงนี้</p>
                                        </div>
                                    )}
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h3 className="font-semibold">ข้อมูลที่ดิน</h3>
                            </CardHeader>
                            <CardBody className="space-y-4 text-sm">
                                <div>
                                    <label className="text-text-light block text-xs mb-1">ขนาดพื้นที่</label>
                                    <p className="font-semibold text-lg">{land.landSizeRai}-{land.landSizeNgan}-{land.landSizeWa} ไร่</p>
                                </div>
                                <div>
                                    <label className="text-text-light block text-xs mb-1">ราคาประเมิน</label>
                                    <p className="font-semibold">{land.estimatedValue.toLocaleString()} บาท</p>
                                </div>
                                <div>
                                    <label className="text-text-light block text-xs mb-1">วันที่ได้มา</label>
                                    <p className="font-medium">{new Date(land.acquisitionDate).toLocaleDateString('th-TH')}</p>
                                </div>
                                <div>
                                    <label className="text-text-light block text-xs mb-1">วิธีการได้มา</label>
                                    <Badge variant="info">{land.acquisitionMethod}</Badge>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="font-semibold">เอกสารที่เกี่ยวข้อง</h3>
                            </CardHeader>
                            <CardBody>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer group">
                                        <FileText className="w-8 h-8 text-red-500" />
                                        <div className="flex-1 overflow-hidden">
                                            <p className="font-medium truncate group-hover:text-navy transition-colors">โฉนดที่ดิน.pdf</p>
                                            <p className="text-xs text-text-light">2.5 MB • 15/01/2024</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer group">
                                        <FileText className="w-8 h-8 text-blue-500" />
                                        <div className="flex-1 overflow-hidden">
                                            <p className="font-medium truncate group-hover:text-navy transition-colors">สัญญาซื้อขาย.pdf</p>
                                            <p className="text-xs text-text-light">1.8 MB • 10/05/2020</p>
                                        </div>
                                    </li>
                                </ul>
                                <Button variant="outline" size="sm" className="w-full mt-4">
                                    <Plus className="w-4 h-4" />
                                    เพิ่มเอกสาร
                                </Button>
                            </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-navy to-navy-700 text-white">
                            <CardBody>
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldAlert className="w-8 h-8 text-gold" />
                                    <h3 className="font-semibold text-lg">ประกันข้อพิพาท</h3>
                                </div>
                                <p className="text-sm text-gray-200 mb-4">
                                    ที่ดินแปลงนี้ยังไม่มีความคุ้มครองข้อพิพาท
                                </p>
                                <Link href="/insurance">
                                    <Button variant="secondary" className="w-full">
                                        ดูแผนความคุ้มครอง
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
