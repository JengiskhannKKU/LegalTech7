'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import { Search, MapPin, Star, Filter, MessageSquare, Calendar, UserCheck } from 'lucide-react';
import { mockLawyers } from '@/lib/mockData';
import { useState } from 'react';
import Link from 'next/link';

export default function LegalNetworkPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [specialization, setSpecialization] = useState('all');

    const filteredLawyers = mockLawyers.filter(lawyer => {
        const matchesSearch = lawyer.name.includes(searchTerm) || lawyer.location.primaryOffice.includes(searchTerm);
        const matchesSpec = specialization === 'all' || lawyer.specialization.includes(specialization);
        return matchesSearch && matchesSpec;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-10 animate-fade-in">
                    <h1 className="text-3xl font-bold text-navy mb-4">เครือข่ายทนายความผู้เชี่ยวชาญ</h1>
                    <p className="text-text-light max-w-2xl mx-auto">
                        ค้นหาและปรึกษาทนายความที่มีความเชี่ยวชาญด้านกฎหมายที่ดิน การไกล่เกลี่ย และข้อพิพาท
                        <br />คัดกรองคุณภาพโดย LandGuard
                    </p>
                </div>

                {/* Search & Filter */}
                <Card className="mb-8 sticky top-4 z-10 shadow-lg border-t-4 border-t-gold">
                    <CardBody>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    placeholder="ค้นหาชื่อทนาย, จังหวัด, หรือความเชี่ยวชาญ..."
                                    className="pl-10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="w-full md:w-64">
                                <select
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none"
                                    value={specialization}
                                    onChange={(e) => setSpecialization(e.target.value)}
                                >
                                    <option value="all">ความเชี่ยวชาญทั้งหมด</option>
                                    <option value="LAND_LAW">กฎหมายที่ดิน</option>
                                    <option value="INHERITANCE_LAW">มรดกและพินัยกรรม</option>
                                    <option value="CIVIL_LITIGATION">คดีแพ่ง</option>
                                    <option value="MEDIATION">การไกล่เกลี่ย</option>
                                </select>
                            </div>
                            <Button variant="outline" icon={<Filter className="w-5 h-5" />}>
                                ตัวกรองเพิ่มเติม
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                {/* Lawyers Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLawyers.map((lawyer, index) => (
                        <Card key={lawyer.lawyerId} hover={true} className="flex flex-col animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <CardBody>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                                        {/* Placeholder Avatar */}
                                        <UserCheck className="w-8 h-8 text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy text-lg leading-tight mb-1">{lawyer.name}</h3>
                                        <div className="flex items-center gap-1 text-gold mb-1">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span className="font-bold">{lawyer.rating}</span>
                                            <span className="text-text-light text-xs">({lawyer.reviewsCount} รีวิว)</span>
                                        </div>
                                        <p className="text-xs text-text-light">ใบอนุญาต: {lawyer.licenseNumber}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                        <span className="text-text-light">{lawyer.location.primaryOffice}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {lawyer.specialization.map(spec => (
                                            <Badge key={spec} variant="info" className="text-xs">
                                                {spec.replace('_', ' ')}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-sm bg-gray-50 p-3 rounded-lg">
                                        <div>
                                            <p className="text-xs text-text-light">ประสบการณ์</p>
                                            <p className="font-semibold text-navy">{lawyer.yearsOfExperience} ปี</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-text-light">อัตราสำเร็จ</p>
                                            <p className="font-semibold text-green-600">{lawyer.successRate}%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-auto pt-4 border-t border-gray-50">
                                    <Link href={`/lawyers/${lawyer.lawyerId}`} className="w-full">
                                        <Button variant="outline" size="sm" className="w-full justify-center">
                                            ดูประวัติ
                                        </Button>
                                    </Link>
                                    <Link href={`/messages/${lawyer.lawyerId}`} className="w-full">
                                        <Button variant="primary" size="sm" className="w-full justify-center" icon={<MessageSquare className="w-4 h-4" />}>
                                            แชท
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
