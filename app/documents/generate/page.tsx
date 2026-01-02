'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FileText, Download, Edit3, Check, Printer } from 'lucide-react';
import { useState } from 'react';

export default function DocumentGenerationPage() {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

    const templates = [
        {
            id: 'notice',
            title: 'หนังสือแจ้งเตือนการบุกรุก',
            description: 'สำหรับแจ้งผู้บุกรุกให้ออกจากพื้นที่อย่างเป็นทางการ',
            type: 'PREVENTION',
            popular: true,
        },
        {
            id: 'objection',
            title: 'หนังสือคัดค้านการรังวัด',
            description: 'ใช้เมื่อไม่เห็นด้วยกับแนวเขตที่ที่ดินข้างเคียงนำชี้',
            type: 'DISPUTE',
            popular: false,
        },
        {
            id: 'power_of_attorney',
            title: 'หนังสือมอบอำนาจ',
            description: 'มอบอำนาจให้บุคคลอื่นดำเนินการทางกฎหมายแทน',
            type: 'GENERAL',
            popular: true,
        },
        {
            id: 'rent_agreement',
            title: 'สัญญาเช่าที่ดินเพื่อเกษตรกรรม',
            description: 'ร่างสัญญามาตรฐานสำหรับเช่าทำนาทำไร่',
            type: 'AGREEMENT',
            popular: false,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-navy mb-4">สร้างเอกสารทางกฎหมายอัตโนมัติ</h1>
                    <p className="text-text-light max-w-2xl mx-auto">
                        เลือกเทมเพลตเอกสารที่ผ่านการตรวจสอบโดยทนายความ กรอกข้อมูล และดาวน์โหลดไปใช้งานได้ทันที
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar - Templates */}
                    <div className="lg:col-span-1 space-y-4">
                        <h2 className="font-semibold text-lg text-navy mb-2">เลือกประเภทเอกสาร</h2>
                        {templates.map((template) => (
                            <div
                                key={template.id}
                                onClick={() => setSelectedTemplate(template.id)}
                                className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedTemplate === template.id
                                        ? 'bg-navy text-white border-navy shadow-lg transform scale-105'
                                        : 'bg-white border-gray-200 hover:border-gold hover:shadow-md'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className={`font-semibold ${selectedTemplate === template.id ? 'text-white' : 'text-navy'}`}>
                                        {template.title}
                                    </h3>
                                    {template.popular && (
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedTemplate === template.id ? 'bg-gold text-white' : 'bg-gold-100 text-gold-700'
                                            }`}>
                                            นิยม
                                        </span>
                                    )}
                                </div>
                                <p className={`text-sm ${selectedTemplate === template.id ? 'text-gray-300' : 'text-text-light'}`}>
                                    {template.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Preview / Form Area */}
                    <div className="lg:col-span-2">
                        <Card className="h-full min-h-[600px] flex flex-col">
                            <CardBody className="flex-1 flex flex-col p-8">
                                {selectedTemplate ? (
                                    <div className="flex-1 flex flex-col animate-fade-in">
                                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                            <div>
                                                <h2 className="text-xl font-bold text-navy">
                                                    {templates.find(t => t.id === selectedTemplate)?.title}
                                                </h2>
                                                <p className="text-text-light text-sm">แบบร่างมาตรฐาน (ฉบับปี 2568)</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm" icon={<Edit3 className="w-4 h-4" />}>
                                                    แก้ไข
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Mock Document Preview */}
                                        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-8 mb-6 font-serif shadow-inner overflow-y-auto max-h-[500px]">
                                            <div className="max-w-xl mx-auto bg-white p-8 shadow-sm min-h-[400px] text-sm leading-relaxed">
                                                <p className="text-center font-bold text-lg mb-8">หนังสือแจ้งเตือนการบุกรุก</p>
                                                <p className="text-right mb-4">วันที่ ...................................</p>
                                                <p className="mb-4">เรื่อง ขอให้รื้อถอนสิ่งปลูกสร้างและออกจากพื้นที่</p>
                                                <p className="mb-4">เรียน ...................................</p>
                                                <p className="indent-8 mb-4">
                                                    ข้าพเจ้า ................................... เจ้าของกรรมสิทธิ์ที่ดินโฉนดเลขที่ ...............
                                                    ตำบล ............... อำเภอ ............... จังหวัด ...............
                                                </p>
                                                <p className="indent-8 mb-4">
                                                    ปรากฏว่าท่านได้กระทำการบุกรุกโดยการ ..............................................
                                                    เข้าไปในที่ดินของข้าพเจ้าโดยไม่ได้รับอนุญาต ซึ่งเป็นการละเมิดสิทธิของข้าพเจ้าตามกฎหมาย
                                                </p>
                                                <p className="indent-8">
                                                    ดังนั้น ข้าพเจ้าจึงขอยื่นคำบอกกล่าวนี้ให้ท่านรื้อถอนสิ่งปลูกสร้างและขนย้ายทรัพย์สิน
                                                    ออกจากที่ดินของข้าพเจ้าภายใน ....... วัน นับแต่วันที่ได้รับหนังสือฉบับนี้
                                                    มิฉะนั้นข้าพเจ้ามีความจำเป็นต้องดำเนินคดีตามกฎหมายจนถึงที่สุด
                                                </p>
                                                <div className="mt-12 flex flex-col items-end">
                                                    <p className="mb-8">ขอแสดงความนับถือ</p>
                                                    <p>(...................................)</p>
                                                    <p>เจ้าของที่ดิน</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 justify-end mt-auto">
                                            <Button variant="outline" icon={<Printer className="w-4 h-4" />}>
                                                พิมพ์
                                            </Button>
                                            <Button variant="primary" icon={<Download className="w-4 h-4" />}>
                                                ดาวน์โหลด Word
                                            </Button>
                                            <Button variant="secondary" icon={<Check className="w-4 h-4" />}>
                                                ส่งให้ทนายตรวจสอบ
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex-1 flex flex-col items-center justify-center text-center text-text-light">
                                        <FileText className="w-16 h-16 text-gray-200 mb-4" />
                                        <h3 className="text-lg font-medium text-navy mb-2">เลือกเอกสารจากรายการด้านซ้าย</h3>
                                        <p>เพื่อดูตัวอย่างและเริ่มกรอกข้อมูล</p>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
