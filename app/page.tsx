'use client';

import React from 'react';
import Link from 'next/link';
import {
    Shield,
    MapPin,
    FileText,
    Users,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Satellite,
    Bell,
    Lock,
    BarChart3,
    MessageSquare,
    Star
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/images/landguard-logo.png" alt="LandGuard Logo" className="h-12 w-auto" />
                            <span className="text-2xl font-bold text-navy">LandGuard</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-text hover:text-navy transition-colors">ฟีเจอร์</a>
                            <a href="#how-it-works" className="text-text hover:text-navy transition-colors">วิธีใช้งาน</a>
                            <a href="#pricing" className="text-text hover:text-navy transition-colors">ราคา</a>
                            <Link href="/dashboard">
                                <Button variant="primary">เข้าสู่ระบบ</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-gold/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="inline-block">
                                <span className="bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold">
                                    แพลตฟอร์มจัดการที่ดินอัจฉริยะ
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">
                                ปกป้องที่ดินของคุณ
                                <span className="block text-gold mt-2">ด้วยเทคโนโลยี AI</span>
                            </h1>
                            <p className="text-xl text-text-light leading-relaxed">
                                ตรวจสอบ ติดตาม และปกป้องที่ดินของคุณด้วยระบบ AI ที่ทันสมัย
                                พร้อมเครือข่ายทนายความมืออาชีพ
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/dashboard">
                                    <Button variant="primary" size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                                        เริ่มใช้งานฟรี
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Link href="#how-it-works">
                                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                                        เรียนรู้เพิ่มเติม
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex items-center gap-8 pt-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-sm text-text-light">ไม่ต้องใช้บัตรเครดิต</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-sm text-text-light">ตรวจสอบฟรี 30 วัน</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative animate-slide-up animation-delay-200">
                            <div className="relative bg-gradient-to-br from-navy to-navy-700 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                                <div className="absolute -top-4 -right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    ✨ ใหม่!
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                        <Satellite className="w-10 h-10 text-gold" />
                                        <div>
                                            <p className="text-white font-semibold">ตรวจสอบด้วยดาวเทียม</p>
                                            <p className="text-gray-300 text-sm">อัพเดทแบบ Real-time</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                        <Bell className="w-10 h-10 text-gold" />
                                        <div>
                                            <p className="text-white font-semibold">แจ้งเตือนอัตโนมัติ</p>
                                            <p className="text-gray-300 text-sm">ตรวจจับการบุกรุกทันที</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                        <FileText className="w-10 h-10 text-gold" />
                                        <div>
                                            <p className="text-white font-semibold">OCR โฉนดที่ดิน</p>
                                            <p className="text-gray-300 text-sm">สกัดข้อมูลอัตโนมัติ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-navy text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="text-5xl font-bold text-gold mb-2">10K+</p>
                            <p className="text-gray-300">ที่ดินที่ได้รับการปกป้อง</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl font-bold text-gold mb-2">500+</p>
                            <p className="text-gray-300">ทนายความในเครือข่าย</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl font-bold text-gold mb-2">98%</p>
                            <p className="text-gray-300">ความพึงพอใจของลูกค้า</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl font-bold text-gold mb-2">24/7</p>
                            <p className="text-gray-300">ระบบตรวจสอบตลอดเวลา</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy mb-4">ฟีเจอร์ที่ทรงพลัง</h2>
                        <p className="text-xl text-text-light max-w-2xl mx-auto">
                            ทุกสิ่งที่คุณต้องการเพื่อปกป้องและจัดการที่ดินของคุณ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Satellite className="w-12 h-12 text-navy" />,
                                title: 'ตรวจสอบด้วยดาวเทียม',
                                description: 'ติดตามการเปลี่ยนแปลงของที่ดินด้วยภาพดาวเทียมความละเอียดสูง',
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                icon: <Shield className="w-12 h-12 text-navy" />,
                                title: 'ประเมินความเสี่ยง AI',
                                description: 'วิเคราะห์ความเสี่ยงด้วย AI และรับคำแนะนำเชิงรุก',
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                icon: <FileText className="w-12 h-12 text-navy" />,
                                title: 'OCR โฉนดอัตโนมัติ',
                                description: 'สกัดข้อมูลจากโฉนดที่ดินด้วย AI ประหยัดเวลา',
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                icon: <Bell className="w-12 h-12 text-navy" />,
                                title: 'แจ้งเตือนแบบ Real-time',
                                description: 'รับการแจ้งเตือนทันทีเมื่อตรวจพบความผิดปกติ',
                                color: 'from-red-500 to-red-600'
                            },
                            {
                                icon: <Users className="w-12 h-12 text-navy" />,
                                title: 'เครือข่ายทนายความ',
                                description: 'เชื่อมต่อกับทนายความมืออาชีพในพื้นที่ของคุณ',
                                color: 'from-yellow-500 to-yellow-600'
                            },
                            {
                                icon: <BarChart3 className="w-12 h-12 text-navy" />,
                                title: 'รายงานและวิเคราะห์',
                                description: 'Dashboard แสดงข้อมูลเชิงลึกและแนวโน้ม',
                                color: 'from-indigo-500 to-indigo-600'
                            }
                        ].map((feature, index) => (
                            <Card key={index} hover className="group">
                                <CardBody className="p-8">
                                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                                        {React.cloneElement(feature.icon, { className: 'w-12 h-12 text-white' })}
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                                    <p className="text-text-light leading-relaxed">{feature.description}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy mb-4">วิธีใช้งาน</h2>
                        <p className="text-xl text-text-light max-w-2xl mx-auto">
                            เริ่มต้นใช้งานได้ง่ายๆ ใน 3 ขั้นตอน
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'อัพโหลดโฉนดที่ดิน',
                                description: 'ถ่ายรูปหรืออัพโหลดโฉนดที่ดินของคุณ ระบบจะสกัดข้อมูลอัตโนมัติด้วย OCR',
                                icon: <FileText className="w-16 h-16 text-gold" />
                            },
                            {
                                step: '02',
                                title: 'ระบบวิเคราะห์ความเสี่ยง',
                                description: 'AI จะวิเคราะห์ความเสี่ยงและตรวจสอบสภาพที่ดินด้วยดาวเทียม',
                                icon: <Satellite className="w-16 h-16 text-gold" />
                            },
                            {
                                step: '03',
                                title: 'รับการเฝ้าตรวจตลอด 24/7',
                                description: 'ระบบจะติดตามและแจ้งเตือนคุณเมื่อพบความผิดปกติ',
                                icon: <Bell className="w-16 h-16 text-gold" />
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <Card className="h-full">
                                    <CardBody className="p-8 text-center">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                            {step.step}
                                        </div>
                                        <div className="mt-8 mb-6 flex justify-center">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                                        <p className="text-text-light leading-relaxed">{step.description}</p>
                                    </CardBody>
                                </Card>
                                {index < 2 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-0 items-center justify-center">
                                        <ArrowRight className="w-6 h-6 text-gold opacity-50" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy mb-4">ลูกค้าของเราพูดถึงเรา</h2>
                        <p className="text-xl text-text-light max-w-2xl mx-auto">
                            ความไว้วางใจจากผู้ใช้งานจริง
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'คุณสมชาย ใจดี',
                                role: 'เจ้าของที่ดิน 50 ไร่',
                                content: 'ระบบช่วยให้ผมตรวจพบการบุกรุกได้ทันท่วงที ประหยัดเวลาและค่าใช้จ่ายมาก',
                                rating: 5
                            },
                            {
                                name: 'คุณสมหญิง รักษ์ดิน',
                                role: 'นักลงทุนอสังหาริมทรัพย์',
                                content: 'OCR ช่วยประหยัดเวลาในการจัดการเอกสารมากมาย แนะนำเลยค่ะ',
                                rating: 5
                            },
                            {
                                name: 'คุณประยุทธ์ มั่นคง',
                                role: 'เกษตรกร',
                                content: 'ภาพดาวเทียมช่วยให้เห็นภาพรวมของที่ดินได้ชัดเจน ใช้งานง่ายมาก',
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <Card key={index} className="bg-gradient-to-br from-gray-50 to-white">
                                <CardBody className="p-8">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                                        ))}
                                    </div>
                                    <p className="text-text-light mb-6 italic leading-relaxed">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold">
                                            {testimonial.name.charAt(2)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-navy">{testimonial.name}</p>
                                            <p className="text-sm text-text-light">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-gradient-to-br from-navy via-navy-700 to-navy-900 text-white overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="mb-8">
                        <span className="inline-block bg-gold/20 text-gold px-6 py-2 rounded-full text-sm font-semibold mb-6">
                            เริ่มต้นใช้งานฟรี
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        พร้อมที่จะปกป้องที่ดิน<br />ของคุณแล้วหรือยัง?
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        เริ่มต้นใช้งานฟรี 30 วัน ไม่ต้องใช้บัตรเครดิต
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <Link href="/dashboard">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="text-xl px-12 py-6 shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300 font-semibold"
                            >
                                เริ่มใช้งานเลย
                                <ArrowRight className="w-6 h-6 ml-3" />
                            </Button>
                        </Link>
                        <Link href="/legal-network">
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:!text-navy transition-all duration-300 font-semibold"
                            >
                                ปรึกษาทนายความ
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-base">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                            <Lock className="w-5 h-5 text-gold" />
                            <span className="font-medium">ปลอดภัย 100%</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                            <CheckCircle className="w-5 h-5 text-gold" />
                            <span className="font-medium">ยกเลิกได้ทุกเมื่อ</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <img src="/images/landguard-logo.png" alt="LandGuard Logo" className="h-10 w-auto" />
                                <span className="text-xl font-bold text-white">LandGuard</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                แพลตฟอร์มจัดการและปกป้องที่ดินด้วยเทคโนโลยี AI
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">ผลิตภัณฑ์</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/my-lands" className="hover:text-gold transition-colors">จัดการที่ดิน</Link></li>
                                <li><Link href="/risk-assessment" className="hover:text-gold transition-colors">ประเมินความเสี่ยง</Link></li>
                                <li><Link href="/legal-network" className="hover:text-gold transition-colors">เครือข่ายทนาย</Link></li>
                                <li><Link href="/insurance" className="hover:text-gold transition-colors">ประกันที่ดิน</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">บริษัท</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gold transition-colors">เกี่ยวกับเรา</a></li>
                                <li><Link href="/faq" className="hover:text-gold transition-colors">คำถามที่พบบ่อย</Link></li>
                                <li><a href="#" className="hover:text-gold transition-colors">ติดต่อเรา</a></li>
                                <li><a href="#" className="hover:text-gold transition-colors">ร่วมงานกับเรา</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">ติดตามเรา</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
                                <li><a href="#" className="hover:text-gold transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2026 LandGuard. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
