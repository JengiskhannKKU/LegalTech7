'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { AlertCircle, AlertTriangle, CheckCircle, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { mockAlerts } from '@/lib/mockData';
import { useState } from 'react';

const ALERT_STATUSES = {
    new: { label: 'รอตรวจสอบ', color: 'bg-red-100 text-red-700' },
    in_progress: { label: 'กำลังดำเนินการ', color: 'bg-blue-100 text-blue-700' },
    legal_action: { label: 'ประสานงานทนาย', color: 'bg-orange-100 text-orange-700' },
    resolved: { label: 'แก้ไขแล้ว', color: 'bg-green-100 text-green-700' },
    false_alarm: { label: 'แจ้งเตือนเท็จ', color: 'bg-gray-100 text-gray-700' },
} as const;

type AlertStatusKey = keyof typeof ALERT_STATUSES;

export default function AlertsPage() {
    const [alerts, setAlerts] = useState(mockAlerts);

    const handleStatusChange = (alertId: string, newStatus: string) => {
        setAlerts(prev => prev.map(a =>
            a.alertId === alertId ? { ...a, status: newStatus as any } : a
        ));
    };

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
                                                <select
                                                    value={alert.status}
                                                    onChange={(e) => handleStatusChange(alert.alertId, e.target.value)}
                                                    className={`text-xs font-bold px-2 py-1 rounded-full border-none focus:ring-2 focus:ring-navy/20 cursor-pointer ${ALERT_STATUSES[alert.status as AlertStatusKey]?.color || 'bg-gray-100'
                                                        }`}
                                                >
                                                    {Object.entries(ALERT_STATUSES).map(([key, config]) => (
                                                        <option key={key} value={key}>
                                                            {config.label}
                                                        </option>
                                                    ))}
                                                </select>
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
