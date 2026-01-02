import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';
import Link from 'next/link';
import { Shield, Eye, FileText, TrendingDown, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'ป้องกันความเสี่ยง',
            description: 'ระบบประเมินความเสี่ยงทางกฎหมายด้วย AI ช่วยวิเคราะห์และป้องกันปัญหาก่อนเกิดจริง',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: 'เฝ้าระวัง 24/7',
            description: 'ติดตามการเปลี่ยนแปลงบนที่ดินด้วยภาพถ่ายดาวเทียมและแจ้งเตือนทันทีเมื่อพบสิ่งผิดปกติ',
            color: 'from-gold-500 to-gold-600',
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: 'สร้างเอกสารอัตโนมัติ',
            description: 'สร้างเอกสารทางกฎหมายได้ทันทีด้วยระบบอัจฉริยะ ตรวจสอบความถูกต้องโดยทนายผู้เชี่ยวชาญ',
            color: 'from-navy-500 to-navy-700',
        },
    ];

    const stats = [
        { value: '30%', label: 'ลดคดีที่ดินเข้าสู่ศาล' },
        { value: '75%', label: 'อัตราความพึงพอใจ' },
        { value: '24 ชม.', label: 'เวลาตอบกลับเฉลี่ย' },
        { value: '50K+', label: 'คดีที่ป้องกันได้' },
    ];

    const pricingPlans = [
        {
            name: 'Basic',
            price: '5,000',
            period: '/ปี',
            description: 'เหมาะสำหรับเจ้าของที่ดิน 1 แปลง',
            features: [
                'ที่ดิน 1 แปลง',
                'ประเมินความเสี่ยงรายปี',
                'แจ้งเตือนพื้นฐาน',
                'เอกสารทางกฎหมายพื้นฐาน',
            ],
            cta: 'เริ่มใช้งาน',
            popular: false,
        },
        {
            name: 'Standard',
            price: '12,000',
            period: '/ปี',
            description: 'เหมาะสำหรับเจ้าของที่ดินหลายแปลง',
            features: [
                'ที่ดิน 3 แปลง',
                'ประเมินความเสี่ยงทุก 6 เดือน',
                'แจ้งเตือน Real-time',
                'เอกสารครบถ้วน',
                'Case Manager',
                'ประกันคุ้มครอง 300,000 บาท',
            ],
            cta: 'เลือกแผนนี้',
            popular: true,
        },
        {
            name: 'Premium',
            price: '25,000',
            period: '/ปี',
            description: 'เหมาะสำหรับนักลงทุนที่ดิน',
            features: [
                'ไม่จำกัดจำนวนแปลง',
                'ประเมินความเสี่ยงทุก 3 เดือน',
                'แจ้งเตือน Real-time',
                'เอกสารครบถ้วน',
                'Dedicated Case Manager',
                'ประกันคุ้มครอง 1,000,000 บาท',
                'Drone Monitoring รายไตรมาส',
            ],
            cta: 'ติดต่อเรา',
            popular: false,
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-navy via-navy-700 to-navy-900 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M30 0v60M0 30h60" stroke="%23fff" stroke-width="0.5"/%3E%3C/svg%3E")',
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                ปกป้องสิทธิที่ดิน<br />
                                <span className="text-gold">ก่อนข้อพิพาท</span>จะเกิด
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                แพลตฟอร์ม LegalTech แบบ Hybrid ที่เปลี่ยนกฎหมายที่ดินจากการทำงานแบบเชิงรับเป็นเชิงป้องกัน
                                ช่วยให้คุณบริหารจัดการความเสี่ยงทางกฎหมายได้อย่างมีประสิทธิภาพ
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/dashboard">
                                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                        เริ่มใช้งานฟรี
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="#pricing">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-navy">
                                        ดูแผนบริการ
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative animate-slide-up animation-delay-200">
                            <div className="relative z-10">
                                <Card glass={true} className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy">Alert ใหม่</h3>
                                            <p className="text-sm text-text-light">พบการเปลี่ยนแปลงบนที่ดิน</p>
                                        </div>
                                    </div>
                                    <img src="/images/legal_shield_hero.png" alt="Legal Protection" className="h-40 w-full object-cover rounded-lg shadow-sm" />
                                </Card>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="text-4xl sm:text-5xl font-bold text-navy mb-2">{stat.value}</div>
                                <div className="text-text-light">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                            ครอบคลุมทุกมิติการบริหารจัดการที่ดิน
                        </h2>
                        <p className="text-xl text-text-light max-w-2xl mx-auto">
                            Prevention → Protection → Resolution
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} hover={true} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                                <CardBody className="text-center">
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-text-light leading-relaxed">{feature.description}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                            แผนบริการที่เหมาะกับคุณ
                        </h2>
                        <p className="text-xl text-text-light">
                            เลือกแผนที่ตรงกับความต้องการของคุณ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <Card
                                key={index}
                                hover={true}
                                className={`relative animate-fade-in ${plan.popular ? 'ring-2 ring-gold shadow-glow-gold' : ''}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-medium">
                                            แนะนำ
                                        </span>
                                    </div>
                                )}
                                <CardBody className="text-center">
                                    <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                                    <p className="text-text-light mb-6">{plan.description}</p>
                                    <div className="mb-6">
                                        <span className="text-5xl font-bold text-navy">{plan.price}</span>
                                        <span className="text-text-light">{plan.period}</span>
                                    </div>
                                    <ul className="space-y-3 mb-8 text-left">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-text">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant={plan.popular ? 'secondary' : 'primary'}
                                        className="w-full"
                                    >
                                        {plan.cta}
                                    </Button>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-navy to-navy-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        พร้อมเริ่มปกป้องที่ดินของคุณแล้วหรือยัง?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        เริ่มต้นใช้งาน LandGuard วันนี้ ป้องกันปัญหาได้ก่อนสายเกินแก้
                    </p>
                    <Link href="/dashboard">
                        <Button variant="secondary" size="lg">
                            เริ่มใช้งานเลย
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
