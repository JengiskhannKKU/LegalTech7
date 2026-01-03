'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { mockLawyers } from '@/lib/mockData';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';
import {
    CheckCircle,
    MapPin,
    Briefcase,
    Clock,
    Star,
    Shield,
    Award,
    BookOpen,
    MessageCircle,
    Globe,
    Calendar,
    Phone,
    Mail,
    Share2,
    Heart
} from 'lucide-react';
import { notFound } from 'next/navigation';

import { use } from 'react';

export default function LawyerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const lawyer = mockLawyers.find(l => l.lawyerId === id);

    if (!lawyer) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pb-12">
                {/* Hero Section */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Profile Image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-navy flex items-center justify-center text-white text-4xl md:text-6xl font-bold flex-shrink-0 shadow-lg relative overflow-hidden">
                                {lawyer.image ? (
                                    <div className="absolute inset-0 bg-navy flex items-center justify-center">
                                        {lawyer.name.charAt(0)}
                                    </div>
                                    // In a real app, use next/image here
                                    // <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span>{lawyer.name.charAt(0)}</span>
                                )}
                                {lawyer.verified && (
                                    <div className="absolute bottom-2 right-2 bg-green-500 text-white p-1.5 rounded-full border-2 border-white" title="Verified Lawyer">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                )}
                            </div>

                            {/* Main Info */}
                            <div className="flex-grow space-y-4 w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h1 className="text-2xl md:text-3xl font-bold text-navy">{lawyer.name}</h1>
                                            {lawyer.verified && (
                                                <Badge variant="success" className="flex items-center gap-1">
                                                    <Shield className="w-3 h-3" />
                                                    Verified
                                                </Badge>
                                            )}
                                        </div>
                                        <p className="text-gray-600 font-medium mb-1">{lawyer.firm || 'ทนายความอิสระ'}</p>
                                        <div className="flex items-center gap-2 text-sm text-text-light">
                                            <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                                                ใบอนุญาต: {lawyer.licenseNumber}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button variant="outline" icon={<Heart className="w-4 h-4" />}>ถูกใจ</Button>
                                    </div>
                                </div>

                                {/* Stats Bar */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-gold-100 rounded-lg text-gold-700">
                                            <Star className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy text-lg">{lawyer.rating}</p>
                                            <p className="text-xs text-text-light">{lawyer.reviewsCount} รีวิว</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy text-lg">{lawyer.yearsOfExperience} ปี</p>
                                            <p className="text-xs text-text-light">ประสบการณ์</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-700">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy text-lg">{lawyer.successRate}%</p>
                                            <p className="text-xs text-text-light">อัตราความสำเร็จ</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy text-lg">{lawyer.responseTime}</p>
                                            <p className="text-xs text-text-light">ตอบกลับเฉลี่ย</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Specialization Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {lawyer.specialization.map((spec, i) => (
                                        <span key={i} className="px-3 py-1 bg-navy/5 text-navy text-sm font-medium rounded-full border border-navy/10">
                                            {spec.replace(/_/g, ' ')}
                                        </span>
                                    ))}
                                    {lawyer.languages?.map((lang, i) => (
                                        <span key={`lang-${i}`} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full flex items-center gap-1">
                                            <Globe className="w-3 h-3" />
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Specialization Section */}
                            <section>
                                <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-gold" />
                                    ความเชี่ยวชาญเฉพาะทาง
                                </h2>
                                <Card>
                                    <CardBody className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-navy mb-3">คดีที่รับว่าความ</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {lawyer.expertCases?.map((expertCase, i) => (
                                                    <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        <span className="text-sm font-medium">{expertCase.replace(/_/g, ' ')}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy mb-3">ทักษะเสริม</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {lawyer.skills?.map((skill, i) => (
                                                    <Badge key={i} variant="info" className="text-gray-600 bg-gray-100 border-gray-200">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </section>

                            {/* Track Record & Education */}
                            <section>
                                <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-gold" />
                                    ประวัติและประสบการณ์
                                </h2>
                                <Card>
                                    <CardBody className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-navy mb-3">การศึกษา</h3>
                                            <ul className="space-y-4">
                                                {lawyer.education?.map((edu, i) => (
                                                    <li key={i} className="flex gap-4">
                                                        <div className="flex-col items-center hidden md:flex">
                                                            <div className="w-2 h-2 rounded-full bg-navy mt-2"></div>
                                                            <div className="w-0.5 h-full bg-gray-100 my-1"></div>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-navy">{edu.degree}</p>
                                                            <p className="text-sm text-text-light">{edu.institution}, {edu.year}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-gray-100">
                                            <h3 className="font-semibold text-navy mb-3">ประสบการณ์คดีที่ดิน</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                <div className="bg-blue-50 p-4 rounded-xl text-center">
                                                    <p className="text-2xl font-bold text-blue-700">{lawyer.totalCases}</p>
                                                    <p className="text-xs text-blue-600 mt-1">คดีทั้งหมดที่รับผิดชอบ</p>
                                                </div>
                                                <div className="bg-green-50 p-4 rounded-xl text-center">
                                                    <p className="text-2xl font-bold text-green-700">{lawyer.landCasesHandled || 0}</p>
                                                    <p className="text-xs text-green-600 mt-1">คดีเกี่ยวกับที่ดิน</p>
                                                </div>
                                                <div className="bg-gold-50 p-4 rounded-xl text-center">
                                                    <p className="text-2xl font-bold text-gold-700">{lawyer.casesWon}</p>
                                                    <p className="text-xs text-gold-600 mt-1">คดีที่ชนะ/สำเร็จ</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </section>

                            {/* Reviews */}
                            <section>
                                <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 text-gold" />
                                    เสียงตอบรับจากผู้ใช้งาน
                                </h2>
                                <Card>
                                    <CardBody>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="text-5xl font-bold text-navy">{lawyer.rating}</div>
                                            <div>
                                                <div className="flex text-gold mb-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(lawyer.rating) ? 'fill-current' : 'text-gray-300'}`} />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-text-light">จาก {lawyer.reviewsCount} รีวิว</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {lawyer.reviews && lawyer.reviews.length > 0 ? (
                                                lawyer.reviews.map((review: any) => (
                                                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div>
                                                                <p className="font-semibold text-sm">{review.user}</p>
                                                                <div className="flex text-gold text-xs">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <span className="text-xs text-text-light">{new Date(review.date).toLocaleDateString('th-TH')}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">{review.comment}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-center text-gray-500 py-4">ยังไม่มีรีวิว</p>
                                            )}
                                        </div>
                                    </CardBody>
                                </Card>
                            </section>
                        </div>

                        {/* Right Column: Sticky Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Pricing Card */}
                                <Card className="border-t-4 border-t-gold">
                                    <CardBody className="space-y-6">
                                        <h3 className="font-bold text-lg text-navy">อัตราค่าบริการเริ่มต้น</h3>

                                        <div className="space-y-4">
                                            {lawyer.fees.detailed ? (
                                                Object.entries(lawyer.fees.detailed).map(([key, value]) => (
                                                    <div key={key} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0">
                                                        <span className="text-gray-600">{key === 'consultationRate' ? 'ค่าปรึกษา' : key === 'documentDrafting' ? 'ร่างเอกสาร' : 'ว่าความ'}</span>
                                                        <span className="font-semibold text-navy text-right">{value as string}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-600">ค่าปรึกษาเบื้องต้น</span>
                                                    <span className="font-semibold text-navy">{lawyer.fees.consultation.toLocaleString()} บาท</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-3 pt-2">
                                            <Button variant="primary" className="w-full justify-center py-3">
                                                ปรึกษาเบื้องต้นทันที
                                            </Button>
                                            <Button variant="outline" className="w-full justify-center">
                                                ขอใบเสนอราคา
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>

                                {/* Service Info Card */}
                                <Card>
                                    <CardBody className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-sm text-navy mb-3 flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                พื้นที่ให้บริการ
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {lawyer.location.serviceAreas.map((area, i) => (
                                                    <Badge key={i} variant="info" className="text-xs">
                                                        {area}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-sm text-navy mb-3 flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                เวลาทำการ
                                            </h3>
                                            <div className="p-3 bg-gray-50 rounded-lg text-sm">
                                                <p className="flex justify-between mb-1">
                                                    <span className="text-gray-500">วันทำการ:</span>
                                                    <span className="font-medium">{lawyer.availability?.days.join(', ')}</span>
                                                </p>
                                                <p className="flex justify-between">
                                                    <span className="text-gray-500">เวลา:</span>
                                                    <span className="font-medium">{lawyer.availability?.hours}</span>
                                                </p>
                                                {lawyer.availability?.nextAvailable && (
                                                    <p className="mt-2 text-xs text-green-600 flex items-center gap-1">
                                                        <CheckCircle className="w-3 h-3" />
                                                        คิวว่างถัดไป: {new Date(lawyer.availability.nextAvailable).toLocaleDateString('th-TH')}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
