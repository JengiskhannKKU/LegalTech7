'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { User, Bell, Shield, Key, CreditCard, LogOut } from 'lucide-react';
import { useState } from 'react';
import { mockUser } from '@/lib/mockData';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const user = mockUser;

    const tabs = [
        { id: 'profile', label: 'โปรไฟล์ส่วนตัว', icon: <User className="w-5 h-5" /> },
        { id: 'notifications', label: 'การแจ้งเตือน', icon: <Bell className="w-5 h-5" /> },
        { id: 'security', label: 'ความปลอดภัย', icon: <Shield className="w-5 h-5" /> },
        { id: 'billing', label: 'การชำระเงิน', icon: <CreditCard className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-navy mb-8">ตั้งค่าบัญชีผู้ใช้</h1>

                <div className="grid md:grid-cols-4 gap-6">
                    {/* Sidebar Tabs */}
                    <Card className="h-fit">
                        <CardBody className="p-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors mb-1 ${activeTab === tab.id
                                            ? 'bg-navy text-white font-medium'
                                            : 'text-text-light hover:bg-gray-100'
                                        }`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                            <div className="border-t border-gray-100 my-2 pt-2">
                                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
                                    <LogOut className="w-5 h-5" />
                                    ออกจากระบบ
                                </button>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Content Area */}
                    <div className="md:col-span-3">
                        <Card className="animate-fade-in">
                            {activeTab === 'profile' && (
                                <>
                                    <CardHeader>
                                        <h2 className="text-xl font-semibold text-navy">ข้อมูลส่วนตัว</h2>
                                        <p className="text-text-light text-sm">จัดการข้อมูลบัญชีและรายละเอียดการติดต่อของคุณ</p>
                                    </CardHeader>
                                    <CardBody className="space-y-6">
                                        <div className="flex items-center gap-6 mb-6">
                                            <div className="w-24 h-24 rounded-full bg-navy-100 flex items-center justify-center text-navy text-3xl font-bold">
                                                {user.fullName.charAt(0)}
                                            </div>
                                            <div>
                                                <Button variant="outline" size="sm" className="mb-2">เปลี่ยนรูปโปรไฟล์</Button>
                                                <p className="text-xs text-text-light">รองรับไฟล์ JPG, PNG หรือ GIF ขนาดไม่เกิน 5MB</p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Input label="ชื่อ-นามสกุล" defaultValue={user.fullName} />
                                            <Input label="เลขบัตรประชาชน" defaultValue={user.idCard} disabled />
                                            <Input label="อีเมล" type="email" defaultValue={user.email} />
                                            <Input label="เบอร์โทรศัพท์" type="tel" defaultValue={user.phone} />
                                            <div className="md:col-span-2">
                                                <Input label="ที่อยู่" defaultValue={user.address} />
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-4 border-t border-gray-100">
                                            <Button variant="primary">บันทึกการเปลี่ยนแปลง</Button>
                                        </div>
                                    </CardBody>
                                </>
                            )}

                            {activeTab === 'notifications' && (
                                <>
                                    <CardHeader>
                                        <h2 className="text-xl font-semibold text-navy">ตั้งค่าการแจ้งเตือน</h2>
                                        <p className="text-text-light text-sm">เลือกช่องทางและประเภทเรื่องที่คุณต้องการรับข่าวสาร</p>
                                    </CardHeader>
                                    <CardBody className="divide-y divide-gray-100">
                                        {[
                                            { title: 'การบุกรุกและการเปลี่ยนแปลงที่ดิน', desc: 'แจ้งเตือนทันทีเมื่อระบบตรวจพบความผิดปกติผ่านภาพถ่ายดาวเทียม' },
                                            { title: 'ความคืบหน้าคดี', desc: 'สถานะคดีและการนัดหมายจากทนายความ' },
                                            { title: 'ข่าวสารและกฎหมายใหม่', desc: 'อัปเดตเกี่ยวกับกฎหมายที่ดินและภาษีที่เกี่ยวข้อง' },
                                            { title: 'โปรโมชั่นและสิทธิพิเศษ', desc: 'ข้อเสนอพิเศษสำหรับสมาชิก LandGuard' }
                                        ].map((setting, i) => (
                                            <div key={i} className="py-4 flex items-center justify-between">
                                                <div className="pr-4">
                                                    <h3 className="font-medium text-navy">{setting.title}</h3>
                                                    <p className="text-sm text-text-light">{setting.desc}</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                                                </label>
                                            </div>
                                        ))}
                                        <div className="pt-6">
                                            <Button variant="primary">บันทึกการตั้งค่า</Button>
                                        </div>
                                    </CardBody>
                                </>
                            )}

                            {activeTab === 'security' && (
                                <>
                                    <CardHeader>
                                        <h2 className="text-xl font-semibold text-navy">ความปลอดภัย</h2>
                                    </CardHeader>
                                    <CardBody className="space-y-6">
                                        <div className="space-y-4">
                                            <h3 className="font-medium">เปลี่ยนรหัสผ่าน</h3>
                                            <Input label="รหัสผ่านปัจจุบัน" type="password" />
                                            <Input label="รหัสผ่านใหม่" type="password" />
                                            <Input label="ยืนยันรหัสผ่านใหม่" type="password" />
                                            <Button variant="outline">อัปเดตรหัสผ่าน</Button>
                                        </div>
                                        <div className="border-t border-gray-100 pt-6">
                                            <h3 className="font-medium mb-2">การยืนยันตัวตนสองชั้น (2FA)</h3>
                                            <p className="text-sm text-text-light mb-4">เพิ่มความปลอดภัยด้วยการยืนยันผ่าน SMS หรือ Authenticator App</p>
                                            <Button variant="secondary" icon={<Key className="w-4 h-4" />}>เปิดใช้งาน 2FA</Button>
                                        </div>
                                    </CardBody>
                                </>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
