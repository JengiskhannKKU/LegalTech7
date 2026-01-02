'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import { ArrowLeft, User, Phone, Mail, Calendar, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react';
import { mockCases } from '@/lib/mockData';
import { useParams } from 'next/navigation';

export default function CaseDetailsPage() {
    const caseItem = mockCases[0]; // Mock data

    const timelineEvents = [
        { date: '2024-12-15', title: 'ได้รับแจ้งเรื่อง', status: 'completed' },
        { date: '2024-12-17', title: 'ให้คำปรึกษาเบื้องต้น', status: 'completed' },
        { date: '2024-12-27', title: 'รวบรวมพยานหลักฐาน', status: 'completed' },
        { date: '2025-01-10', title: 'นัดเจรจาไกล่เกลี่ย', status: 'upcoming' }, // Future date
        { date: '2025-03-30', title: 'ปิดคดี', status: 'pending' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link href="/cases" className="inline-flex items-center text-text-light hover:text-navy transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        กลับไปหน้ารวมคดี
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-navy flex items-center gap-3">
                                {caseItem.caseType}
                                <Badge variant="high">Active</Badge>
                            </h1>
                            <p className="text-text-light">Case ID: {caseItem.caseId}</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" icon={<FileText className="w-4 h-4" />}>
                                เอกสารประกอบ
                            </Button>
                            <Button variant="primary" icon={<MessageSquare className="w-4 h-4" />}>
                                ติดต่อ Case Manager
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Timeline & Progress */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">ไทม์ไลน์การดำเนินคดี</h2></CardHeader>
                            <CardBody>
                                <div className="relative pl-8 border-l-2 border-gray-200 space-y-8 my-4">
                                    {timelineEvents.map((event, index) => (
                                        <div key={index} className="relative">
                                            <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm ${event.status === 'completed' ? 'bg-green-500' :
                                                    event.status === 'upcoming' ? 'bg-blue-500 ring-4 ring-blue-100' : 'bg-gray-300'
                                                }`}></div>

                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                <div>
                                                    <h3 className={`font-semibold ${event.status === 'pending' ? 'text-gray-400' : 'text-navy'}`}>
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-sm text-text-light">
                                                        {new Date(event.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                        {event.status === 'upcoming' && <span className="text-blue-500 ml-2">(กำลังจะถึง)</span>}
                                                    </p>
                                                </div>
                                                {event.status === 'completed' && <Badge variant="success">เสร็จสิ้น</Badge>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">บันทึกความคืบหน้า</h2></CardHeader>
                            <CardBody className="space-y-4">
                                {caseItem.progressUpdates.map((update, i) => (
                                    <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-navy">{update.update}</h4>
                                            <span className="text-xs text-text-light">{new Date(update.date).toLocaleDateString('th-TH')}</span>
                                        </div>
                                        <div className="flex items-start gap-2 mt-2 pt-2 border-t border-gray-200">
                                            <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                            <p className="text-sm text-text-light">
                                                <span className="font-medium text-navy">ขั้นตอนต่อไป: </span>
                                                {update.nextSteps}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </CardBody>
                        </Card>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader><h2 className="text-md font-semibold">ผู้รับผิดชอบคดี</h2></CardHeader>
                            <CardBody>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center">
                                        <User className="w-8 h-8 text-navy" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy">{caseItem.caseManager.name}</h3>
                                        <p className="text-sm text-text-light">Case Manager</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <a href={`tel:${caseItem.caseManager.phone}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                                        <Phone className="w-5 h-5 text-green-600" />
                                        <span className="text-sm font-medium">{caseItem.caseManager.phone}</span>
                                    </a>
                                    <a href={`mailto:${caseItem.caseManager.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm font-medium">{caseItem.caseManager.email}</span>
                                    </a>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader><h2 className="text-md font-semibold">ข้อมูลที่ดิน</h2></CardHeader>
                            <CardBody className="space-y-4">
                                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                                    <p className="text-xs text-text-light">แผนที่สังเขป</p>
                                </div>
                                <Link href={`/my-lands/${caseItem.landId}`}>
                                    <Button variant="outline" size="sm" className="w-full">
                                        ดูรายละเอียดที่ดิน
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
