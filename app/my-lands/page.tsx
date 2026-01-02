'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Alert from '@/components/ui/Alert';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { MapPin, Search, Filter, Plus, ArrowRight, Eye, ShieldAlert } from 'lucide-react';
import { mockLands } from '@/lib/mockData';
import { useState } from 'react';
import DynamicMap from '@/components/ui/DynamicMap';

export default function MyLandsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLands = mockLands.filter(land =>
        land.deedNumber.includes(searchTerm) ||
        land.province.includes(searchTerm) ||
        land.district.includes(searchTerm)
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-navy">ที่ดินของฉัน</h1>
                        <p className="text-text-light mt-1">จัดการและติดตามสถานะที่ดินทั้งหมดของคุณ ({filteredLands.length} แปลง)</p>
                    </div>
                    <Link href="/my-lands/add">
                        <Button variant="primary" icon={<Plus className="w-5 h-5" />}>
                            เพิ่มที่ดินใหม่
                        </Button>
                    </Link>
                </div>

                {/* Filters */}
                <Card className="mb-8">
                    <CardBody>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    placeholder="ค้นหาตามเลขโฉนด หรือ ที่ตั้ง..."
                                    className="pl-10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Button variant="outline" icon={<Filter className="w-5 h-5" />}>
                                ตัวกรอง
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                {/* Lands Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLands.map((land) => (
                        <Card key={land.id} hover={true} className="flex flex-col h-full animate-fade-in">
                            {/* Map Preview */}
                            <div className="h-48 bg-gray-200 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                <DynamicMap
                                    center={[land.coordinates.lat, land.coordinates.lng]}
                                    zoom={14}
                                    minimal={true}
                                    className="w-full h-full pointer-events-none" // Disable interaction for thumbnail feel
                                    markers={[
                                        {
                                            position: [land.coordinates.lat, land.coordinates.lng],
                                            title: land.deedNumber
                                        }
                                    ]}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Risk Level Badge */}
                                <div className="absolute top-4 right-4">
                                    <Badge
                                        variant={
                                            land.riskLevel === 'high'
                                                ? 'critical'
                                                : land.riskLevel === 'medium'
                                                    ? 'medium'
                                                    : 'low'
                                        }
                                        className="shadow-md backdrop-blur-md bg-white/90"
                                    >
                                        ความเสี่ยง{land.riskLevel === 'high' ? 'สูง' : land.riskLevel === 'medium' ? 'ปานกลาง' : 'ต่ำ'}
                                    </Badge>
                                </div>
                            </div>

                            <CardBody className="flex-1 flex flex-col">
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg font-bold text-navy">
                                            {land.deedType} {land.deedNumber}
                                        </h3>
                                    </div>
                                    <p className="text-text-light text-sm flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {land.subdistrict}, {land.district}, {land.province}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                                    <div>
                                        <p className="text-text-light text-xs">ขนาดพื้นที่</p>
                                        <p className="font-semibold text-navy">
                                            {land.landSizeRai}-{land.landSizeNgan}-{land.landSizeWa} ไร่
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-text-light text-xs">ราคาประเมิน</p>
                                        <p className="font-semibold text-navy">
                                            {land.estimatedValue.toLocaleString()} บ.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-text-light text-xs">การใช้ประโยชน์</p>
                                        <p className="font-semibold text-navy">{land.currentUse}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-light text-xs">ตรวจสอบล่าสุด</p>
                                        <p className="font-semibold text-navy">
                                            {new Date(land.lastInspection).toLocaleDateString('th-TH')}
                                        </p>
                                    </div>
                                </div>

                                {land.hasAlert && (
                                    <div className="mb-4">
                                        <Alert type="warning" className="text-sm py-2">
                                            พบความผิดปกติ - โปรดตรวจสอบ
                                        </Alert>
                                    </div>
                                )}

                                <div className="mt-auto pt-4 border-t border-gray-100 flex gap-3">
                                    <Link href={`/risk-assessment`} className="flex-1">
                                        <Button variant="outline" size="sm" className="w-full">
                                            <ShieldAlert className="w-4 h-4" />
                                            ประเมิน
                                        </Button>
                                    </Link>
                                    <Link href={`/my-lands/${land.id}`} className="flex-1">
                                        <Button variant="primary" size="sm" className="w-full">
                                            รายละเอียด
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
