'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { CreditCard, CheckCircle, Package, History, ArrowUpCircle } from 'lucide-react';
import { mockUser } from '@/lib/mockData';

export default function SubscriptionPage() {
    const currentPlan = {
        name: 'Standard Plan',
        price: 12000,
        renewalDate: '2025-12-31',
        status: 'active',
    };

    const history = [
        { id: 'INV-001', date: '2024-01-01', amount: 12000, status: 'paid', description: 'รายปี - Standard Plan' },
        { id: 'INV-002', date: '2023-01-01', amount: 5000, status: 'paid', description: 'รายปี - Basic Plan' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-navy mb-2">จัดการการสมัครสมาชิก</h1>
                <p className="text-text-light mb-8">ดูรายละเอียดแพ็กเกจปัจจุบัน ประวัติการชำระเงิน และอัปเกรดแผน</p>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Current Plan Card */}
                    <Card className="lg:col-span-2 border-t-4 border-t-navy h-fit">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <Package className="w-5 h-5 text-navy" />
                                    แพ็กเกจปัจจุบัน
                                </h2>
                                <Badge variant="success">Active</Badge>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-navy-50 rounded-xl mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-navy mb-1">{currentPlan.name}</h3>
                                    <p className="text-text-light">
                                        ต่ออายุอัตโนมัติ: {new Date(currentPlan.renewalDate).toLocaleDateString('th-TH')}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl font-bold text-navy">฿{currentPlan.price.toLocaleString()}</p>
                                    <p className="text-sm text-text-light">ต่อปี</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 border border-gray-100 rounded-lg">
                                    <h4 className="font-semibold mb-2">สิทธิ์ของคุณ</h4>
                                    <ul className="space-y-2 text-sm text-text-light">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> ที่ดิน 3 แปลง</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Case Manager ส่วนตัว</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> แจ้งเตือน Real-time</li>
                                    </ul>
                                </div>
                                <div className="p-4 border border-gray-100 rounded-lg flex flex-col justify-center items-center text-center">
                                    <p className="text-sm text-text-light mb-2">ต้องการความคุ้มครองที่มากขึ้น?</p>
                                    <Link href="/insurance">
                                        <Button variant="secondary" className="w-full">
                                            <ArrowUpCircle className="w-4 h-4 mr-2" />
                                            อัปเกรดเป็น Premium
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300">
                                    ยกเลิกการต่ออายุ
                                </Button>
                                <Button variant="outline">
                                    เปลี่ยนวิธีการชำระเงิน
                                </Button>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Payment Methods */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <CreditCard className="w-5 h-5" />
                                    วิธีการชำระเงิน
                                </h2>
                            </CardHeader>
                            <CardBody>
                                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg mb-4">
                                    <div className="w-10 h-6 bg-blue-900 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                                    <div className="flex-1">
                                        <p className="font-medium text-navy">•••• 4242</p>
                                        <p className="text-xs text-text-light">หมดอายุ 12/28</p>
                                    </div>
                                    <Badge variant="info">หลัก</Badge>
                                </div>
                                <Button variant="outline" size="sm" className="w-full">
                                    เพิ่มบัตรเครดิต
                                </Button>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <History className="w-5 h-5" />
                                    ประวัติการชำระเงิน
                                </h2>
                            </CardHeader>
                            <CardBody className="p-0">
                                <div className="divide-y divide-gray-100">
                                    {history.map((item) => (
                                        <div key={item.id} className="p-4 hover:bg-gray-50 flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-navy text-sm">{item.description}</p>
                                                <p className="text-xs text-text-light">{new Date(item.date).toLocaleDateString('th-TH')}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-medium">฿{item.amount.toLocaleString()}</p>
                                                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">ชำระแล้ว</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 border-t border-gray-100">
                                    <Button variant="ghost" size="sm" className="w-full">ดูทั้งหมด</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
import Link from 'next/link';
