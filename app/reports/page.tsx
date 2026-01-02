'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import { BarChart, Activity, PieChart, Download, Calendar } from 'lucide-react';

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-navy">รายงานและสถิติ</h1>
                        <p className="text-text-light">วิเคราะห์ความเสี่ยงและภาพรวมการจัดการที่ดินของคุณ</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" icon={<Calendar className="w-4 h-4" />}>
                            เลือกช่วงเวลา
                        </Button>
                        <Button variant="primary" icon={<Download className="w-4 h-4" />}>
                            ดาวน์โหลดรายงาน (PDF)
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'คะแนนเสี่ยงเฉลี่ย', value: '75/100', trend: '+5%', color: 'text-orange-500' },
                        { label: 'การแจ้งเตือนเดือนนี้', value: '12', trend: '-20%', color: 'text-green-500' },
                        { label: 'ค่าใช้จ่ายคดีความ', value: '฿0', trend: '0%', color: 'text-navy' },
                        { label: 'มูลค่าที่ดินรวม', value: '฿15M', trend: '+3%', color: 'text-gold' }
                    ].map((stat, i) => (
                        <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                            <CardBody>
                                <p className="text-sm text-text-light mb-1">{stat.label}</p>
                                <div className="flex items-end justify-between">
                                    <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{stat.trend}</span>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <Activity className="w-5 h-5" />
                                    แนวโน้มความเสี่ยงราายเดือน
                                </h2>
                                <div className="w-32">
                                    <Select>
                                        <option>6 เดือนล่าสุด</option>
                                        <option>1 ปีล่าสุด</option>
                                    </Select>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                <p className="text-text-light flex items-center gap-2">
                                    <BarChart className="w-5 h-5" />
                                    [พื้นที่สำหรับกราฟ Chart.js / Recharts]
                                </p>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <PieChart className="w-5 h-5" />
                                สัดส่วนประเภทที่ดิน
                            </h2>
                        </CardHeader>
                        <CardBody>
                            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                <p className="text-text-light">
                                    [Donut Chart Placeholder]
                                </p>
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-navy"></span> ว่างเปล่า</span>
                                    <span>40%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gold"></span> เกษตรกรรม</span>
                                    <span>35%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> ที่อยู่อาศัย</span>
                                    <span>25%</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <Card>
                    <CardHeader><h2 className="text-lg font-semibold">สรุปกิจกรรมล่าสุด</h2></CardHeader>
                    <CardBody>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-text-light uppercase bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3">วันที่</th>
                                        <th className="px-6 py-3">กิจกรรม</th>
                                        <th className="px-6 py-3">เกี่ยวข้องกับ</th>
                                        <th className="px-6 py-3 text-right">สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="bg-white hover:bg-gray-50">
                                        <td className="px-6 py-4">31 ธ.ค. 2025</td>
                                        <td className="px-6 py-4 font-medium text-navy">เข้าสู่ระบบสำเร็จ</td>
                                        <td className="px-6 py-4">ระบบความปลอดภัย</td>
                                        <td className="px-6 py-4 text-right text-green-600">สำเร็จ</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-50">
                                        <td className="px-6 py-4">25 ธ.ค. 2025</td>
                                        <td className="px-6 py-4 font-medium text-navy">สร้างเอกสารแจ้งเตือน</td>
                                        <td className="px-6 py-4">LND-2025-001234</td>
                                        <td className="px-6 py-4 text-right text-green-600">สำเร็จ</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-gray-50">
                                        <td className="px-6 py-4">20 ธ.ค. 2025</td>
                                        <td className="px-6 py-4 font-medium text-navy">ชำระค่าบริการรายปี</td>
                                        <td className="px-6 py-4">Billing</td>
                                        <td className="px-6 py-4 text-right text-green-600">สำเร็จ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Footer />
        </div>
    );
}
