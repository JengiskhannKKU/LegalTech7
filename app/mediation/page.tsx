'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Handshake, MessageSquare, Video, Calendar, FileCheck } from 'lucide-react';

export default function MediationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex p-3 rounded-full bg-navy-100 mb-4">
                        <Handshake className="w-8 h-8 text-navy" />
                    </div>
                    <h1 className="text-3xl font-bold text-navy mb-4">ระบบไกล่เกลี่ยข้อพิพาท (Online Mediation)</h1>
                    <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
                        ช่องทางการเจรจาหาข้อยุติที่เป็นธรรม รวดเร็ว และประหยัดค่าใช้จ่าย
                        โดยมีคนกลางมืออาชีพช่วยประสานงานผ่านระบบ VDO Conference ที่มีความปลอดภัยสูง
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">


                    <Card className="border-t-4 border-t-gold hover:shadow-lg transition-all animate-slide-up animation-delay-100">
                        <CardBody className="p-8 text-center flex flex-col items-center h-full">
                            <MessageSquare className="w-12 h-12 text-gold mb-4" />
                            <h3 className="text-xl font-bold text-navy mb-2">ปรึกษาทนายความ</h3>
                            <p className="text-text-light mb-8">
                                สอบถามขั้นตอนและแนวทางการเจรจากับผู้เชี่ยวชาญก่อนเริ่มกระบวนการจริง
                            </p>
                            <Button variant="secondary" className="mt-auto w-full">
                                เริ่มแชทปรึกษา
                            </Button>
                        </CardBody>
                    </Card>
                </div>

                {/* Process Steps */}
                <div className="animate-slide-up animation-delay-200">
                    <h2 className="text-2xl font-bold text-navy text-center mb-8">ขั้นตอนการให้บริการ</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { icon: <FileCheck />, title: '1. ยื่นคำร้อง', desc: 'กรอกรายละเอียดข้อพิพาท' },
                            { icon: <Calendar />, title: '2. นัดหมาย', desc: 'เลือกวันเวลาที่สะดวกทั้งสองฝ่าย' },
                            { icon: <Video />, title: '3. เจรจา', desc: 'ผ่านระบบออนไลน์โดยมีคนกลาง' },
                            { icon: <Handshake />, title: '4. ทำสัญญา', desc: 'บันทึกข้อตกลงยอมความ' },
                        ].map((step, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 text-center relative">
                                <div className="w-10 h-10 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-navy mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                                <p className="text-sm text-text-light">{step.desc}</p>

                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gray-300"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
