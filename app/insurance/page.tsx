'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Shield, CheckCircle, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InsurancePage() {
    const plans = [
        {
            id: 'basic',
            name: 'Basic Protection',
            price: '5,000',
            period: '/ปี',
            coverage: '300,000',
            features: [
                'คุ้มครองค่าใช้จ่ายในการต่อสู้คดี 300,000 บาท',
                'ให้คำปรึกษาทางกฎหมายเบื้องต้น',
                'ช่วยไกล่เกลี่ยข้อพิพาท 1 ครั้ง/ปี',
                'ค่าธรรมเนียมศาลและค่าทนายความ',
            ],
            recommended: false,
            color: 'bg-gray-100 text-navy',
            btnVariant: 'outline' as const,
        },
        {
            id: 'standard',
            name: 'Standard Protection',
            price: '12,000',
            period: '/ปี',
            coverage: '1,000,000',
            features: [
                'คุ้มครองค่าใช้จ่ายในการต่อสู้คดี 1,000,000 บาท',
                'Case Manager ส่วนตัวดูแลคดี',
                'ช่วยไกล่เกลี่ยข้อพิพาทไม่จำกัดครั้ง',
                'ค่าธรรมเนียมศาลและค่าทนายความเต็มจำนวน',
                'ค่าชดเชยระหว่างดำเนินคดี',
            ],
            recommended: true,
            color: 'bg-navy text-white',
            btnVariant: 'primary' as const,
        },
        {
            id: 'premium',
            name: 'Premium Protection',
            price: '25,000',
            period: '/ปี',
            coverage: '5,000,000',
            features: [
                'คุ้มครองค่าใช้จ่ายในการต่อสู้คดี 5,000,000 บาท',
                'Senior Lawyer & Case Manager ดูแลพิเศษ',
                'คุ้มครองที่ดินสูงสุด 5 แปลง',
                'บริการตรวจสอบที่ดินด้วยโดรนทุกไตรมาส',
                'ค่าชดเชยและค่าเสียโอกาสทางธุรกิจ',
            ],
            recommended: false,
            color: 'bg-gold text-white',
            btnVariant: 'secondary' as const,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        แผนประกันคุ้มครองสิทธิในที่ดิน
                    </h1>
                    <p className="text-xl text-text-light max-w-2xl mx-auto">
                        ปกป้องทรัพย์สินของคุณจากข้อพิพาทที่ไม่คาดฝัน ด้วยความคุ้มครองที่ครอบคลุมค่าใช้จ่ายทางกฎหมายและการดำเนินคดี
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <Card
                            key={plan.id}
                            className={`relative flex flex-col h-full animate-slide-up ${plan.recommended ? 'ring-2 ring-gold shadow-glow-gold transform -translate-y-2' : ''
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                                        แนะนำสำหรับคุณ
                                    </span>
                                </div>
                            )}

                            <div className={`p-6 rounded-t-xl text-center ${plan.recommended ? 'bg-navy-50' : ''}`}>
                                <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                                <div className="flex justify-center items-end gap-1 mb-4">
                                    <span className="text-4xl font-bold text-navy">{plan.price}</span>
                                    <span className="text-text-light mb-1">{plan.period}</span>
                                </div>
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                                    วงเงินคุ้มครอง {plan.coverage} บาท
                                </div>
                            </div>

                            <CardBody className="flex-1 flex flex-col p-6">
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-text">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button variant={plan.btnVariant} className="w-full">
                                    เลือกแผนนี้
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                {/* FAQ / Info Section */}
                <div className="grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-300">
                    <Card>
                        <CardBody className="p-8 flex items-start gap-4">
                            <div className="p-3 bg-navy-100 rounded-lg">
                                <Shield className="w-8 h-8 text-navy" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">ทำไมต้องมีประกันที่ดิน?</h3>
                                <p className="text-text-light leading-relaxed">
                                    ข้อพิพาทเรื่องที่ดินมักใช้เวลานานและมีค่าใช้จ่ายสูง ทั้งค่าทนาย ค่าธรรมเนียมศาล
                                    และการเสียโอกาสทางธุรกิจ ประกันของเราช่วยรับความเสี่ยงเหล่านี้แทนคุณ
                                </p>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className="p-8 flex items-start gap-4">
                            <div className="p-3 bg-gold-100 rounded-lg">
                                <FileText className="w-8 h-8 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">ขั้นตอนการเคลมง่ายๆ</h3>
                                <p className="text-text-light leading-relaxed">
                                    เมื่อเกิดข้อพิพาทหรือได้รับหมายศาล แจ้งผ่านระบบ Case Manager ได้ทันที
                                    เรามีทีมทนายความพร้อมดูแลและดำเนินการแทนคุณในทุกขั้นตอน
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-text-light mb-4">ยังไม่แน่ใจ? ปรึกษาผู้เชี่ยวชาญของเราก่อนตัดสินใจ</p>
                    <Link href="/legal-network">
                        <Button variant="ghost">
                            ติดต่อเรา <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

            </div>
            <Footer />
        </div>
    );
}
