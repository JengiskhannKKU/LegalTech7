'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, FileQuestion, Shield, Map, MessageSquare } from 'lucide-react';
import Input from '@/components/ui/Input';

const faqs = [
    {
        category: 'general',
        question: 'LandGuard คืออะไร?',
        answer: 'LandGuard คือแพลตฟอร์มบริหารจัดการความเสี่ยงที่ดินครบวงจร ที่ช่วยให้เจ้าของที่ดินสามารถตรวจสอบ เฝ้าระวัง และจัดการเอกสารทางกฎหมายเกี่ยวกับที่ดินได้อย่างมีประสิทธิภาพ ผ่านเทคโนโลยี AI และภาพถ่ายดาวเทียม'
    },
    {
        category: 'risk',
        question: 'ระบบประเมินความเสี่ยงทำงานอย่างไร?',
        answer: 'ระบบใช้ AI วิเคราะห์ข้อมูลจากหลายแหล่ง เช่น ภาพถ่ายดาวเทียม ประวัติการใช้ประโยชน์ที่ดิน และกฎหมายที่เกี่ยวข้อง เพื่อคำนวณคะแนนความเสี่ยงในการถูกบุกรุกหรือการครอบครองปรปักษ์ พร้อมให้คำแนะนำในการป้องกัน'
    },
    {
        category: 'risk',
        question: 'ความแม่นยำของการตรวจสอบการบุกรุกเป็นอย่างไร?',
        answer: 'ระบบมีความแม่นยำสูงในการตรวจจับการเปลี่ยนแปลงทางกายภาพขนาดใหญ่ เช่น การก่อสร้างอาคารใหม่ หรือการเปลี่ยนแปลงพื้นที่สีเขียว อย่างไรก็ตาม เราแนะนำให้มีการตรวจสอบสถานที่จริงควบคู่ไปด้วยเมื่อได้รับการแจ้งเตือน'
    },
    {
        category: 'documents',
        question: 'เอกสารที่สร้างจากระบบมีผลทางกฎหมายหรือไม่?',
        answer: 'เอกสารที่สร้างจากระบบเป็นฉบับร่างที่ถูกต้องตามรูปแบบมาตรฐานทางกฎหมาย แต่เพื่อให้มีผลสมบูรณ์และรัดกุมที่สุด เราแนะนำให้ส่งให้ทนายความในเครือข่ายของเราตรวจสอบอีกครั้งก่อนนำไปใช้งานจริง'
    },
    {
        category: 'documents',
        question: 'ฉันสามารถแก้ไขเอกสารหลังจากสร้างเสร็จแล้วได้หรือไม่?',
        answer: 'ได้ คุณสามารถดาวน์โหลดไฟล์เอกสารไปแก้ไขต่อได้ หรือทำการแก้ไขข้อมูลในระบบแล้วกดสร้างเอกสารใหม่ได้ตลอดเวลา'
    },
    {
        category: 'legal',
        question: 'ค่าบริการทนายความเริ่มต้นเท่าไหร่?',
        answer: 'ค่าบริการเริ่มต้นสำหรับการปรึกษาเบื้องต้นอยู่ที่ 1,500 บาท และสำหรับการตรวจสอบเอกสารเริ่มต้นที่ 3,000 บาท โดยคุณสามารถดูรายละเอียดค่าบริการได้ในหน้า "ผู้จัดการเคส" หรือ "เครือข่ายทนายความ"'
    },
    {
        category: 'general',
        question: 'ข้อมูลส่วนตัวและข้อมูลโฉนดที่ดินปลอดภัยแค่ไหน?',
        answer: 'เราให้ความสำคัญสูงสุดกับความปลอดภัยของข้อมูล ข้อมูลทั้งหมดจะถูกเข้ารหัสตามมาตรฐานความปลอดภัยสากล และไม่มีการเปิดเผยข้อมูลต่อบุคคลภายนอกโดยไม่ได้รับอนุญาต'
    }
];

const categories = [
    { id: 'all', label: 'ทั้งหมด', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'general', label: 'ทั่วไป', icon: <FileQuestion className="w-4 h-4" /> },
    { id: 'risk', label: 'ความเสี่ยง', icon: <Shield className="w-4 h-4" /> },
    { id: 'documents', label: 'เอกสาร', icon: <Map className="w-4 h-4" /> }, // Icon choice for documents/land
];

export default function FAQPage() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-navy text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">คำถามที่พบบ่อย</h1>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            รวบรวมคำตอบสำหรับข้อสงสัยเกี่ยวกับการใช้งาน LandGuard การจัดการที่ดิน และกฎหมายที่เกี่ยวข้อง
                        </p>

                        <div className="max-w-xl mx-auto relative">
                            <Input
                                placeholder="ค้นหาคำถาม..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 py-3 rounded-full shadow-lg text-navy"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-12">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.id
                                        ? 'bg-navy text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {cat.icon}
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                                    >
                                        <span className={`font-semibold text-lg ${activeAccordion === index ? 'text-navy' : 'text-gray-700'}`}>
                                            {faq.question}
                                        </span>
                                        {activeAccordion === index ? (
                                            <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        )}
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                <FileQuestion className="w-12 h-12 mx-auto mb-3 opacity-30" />
                                <p>ไม่พบคำถามที่ค้นหา</p>
                            </div>
                        )}
                    </div>

                    {/* Contact Support CTA */}
                    <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <h3 className="text-xl font-bold text-navy mb-2">ยังไม่พบคำตอบที่ต้องการ?</h3>
                        <p className="text-gray-600 mb-6">ทีมงานผู้เชี่ยวชาญและทนายความของเราพร้อมให้ความช่วยเหลือคุณ</p>
                        <div className="flex gap-4 justify-center">
                            <button className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors font-medium shadow-md">
                                ติดต่อฝ่ายบริการลูกค้า
                            </button>
                            <button className="px-6 py-2 bg-white text-navy border border-navy rounded-lg hover:bg-gray-50 transition-colors font-medium">
                                ปรึกษาทนายความ
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
