'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { AlertCircle, AlertTriangle, CheckCircle, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { mockAlerts } from '@/lib/mockData';

export default function AlertsPage() {
    const alerts = mockAlerts;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-navy">การแจ้งเตือนและการเฝ้าระวัง</h1>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" icon={<Filter className="w-4 h-4" />}>
                            ตัวกรอง
                        </Button>
                    </div>
                </div>

                <div className="space-y-4">
                    {alerts.map((alert) => (
                        <Card
                            key={alert.alertId}
                            hover={true}
                            className={`border-l-4 ${alert.alertLevel === 'critical' ? 'border-l-red-500' :
                                    alert.alertLevel === 'high' ? 'border-l-orange-500' :
                                        'border-l-gold'
                                } animate-fade-in`}
                        >
                            <CardBody>
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Alert Icon & Status */}
                                    <div className="flex-shrink-0">
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${alert.alertLevel === 'critical' ? 'bg-red-100 text-red-600' :
                                                alert.alertLevel === 'high' ? 'bg-orange-100 text-orange-600' :
                                                    'bg-gold-100 text-gold-600'
                                            }`}>
                                            {alert.alertLevel === 'critical' ? <AlertCircle className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-bold text-navy">{alert.description}</h3>
                                                <Badge variant={alert.status === 'new' ? 'critical' : 'success'}>
                                                    {alert.status === 'new' ? 'ใหม่' : 'รับทราบแล้ว'}
                                                </Badge>
                                            </div>
                                            <span className="text-sm text-text-light">
                                                {new Date(alert.timestamp).toLocaleDateString('th-TH', {
                                                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                                })}
                                            </span>
                                        </div>

                                        <p className="text-text mb-4">
                                            ตรวจพบโดยระบบ: {alert.detectionMethod.replace(/_/g, ' ')}
                                            <br />
                                            พื้นที่ที่ได้รับผลกระทบ: {alert.location?.section}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-2">
                                            <Button variant="danger" size="sm">
                                                ดูภาพเปรียบเทียบ
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                ยืนยันว่าปลอดภัย
                                            </Button>
                                            <Link href={`/legal-network`}>
                                                <Button variant="ghost" size="sm">
                                                    ปรึกษาทนาย
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}

                    {alerts.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-medium text-navy">เหตุการณ์ปกติ</h3>
                            <p className="text-text-light">ไม่มีการแจ้งเตือนความเสี่ยงในขณะนี้</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
