'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Alert from '@/components/ui/Alert';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Link from 'next/link';
import {
    Download,
    FileText,
    Sparkles,
    ArrowRight,
    Clock,
    ShieldCheck,
    CheckCircle,
} from 'lucide-react';
import { mockDocuments } from '@/lib/mockData';

const templates = [
    {
        id: 'notice',
        title: 'หนังสือแจ้งเตือนการบุกรุก',
        description: 'แจ้งอย่างเป็นทางการเมื่อพบการรุกล้ำที่ดิน',
        tag: 'Prevention',
    },
    {
        id: 'objection',
        title: 'หนังสือคัดค้านการรังวัด',
        description: 'ใช้เมื่อไม่เห็นด้วยกับแนวเขตที่ที่ดินข้างเคียงนำชี้',
        tag: 'Dispute',
    },
    {
        id: 'power_of_attorney',
        title: 'หนังสือมอบอำนาจ',
        description: 'มอบอำนาจให้ตัวแทนดำเนินการแทนเจ้าของที่ดิน',
        tag: 'General',
    },
];

const statusConfig = {
    ready: { label: 'พร้อมใช้งาน', variant: 'success' },
    draft: { label: 'ฉบับร่าง', variant: 'medium' },
    review: { label: 'รอตรวจสอบ', variant: 'info' },
} as const;

export default function DocumentsPage() {
    const readyCount = mockDocuments.filter((doc) => doc.status === 'ready').length;
    const reviewCount = mockDocuments.filter((doc) => doc.status === 'review').length;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-navy">เอกสารทางกฎหมาย</h1>
                        <p className="text-text-light mt-2 max-w-2xl">
                            ศูนย์กลางเอกสารของคุณ สร้าง ตรวจสอบ และดาวน์โหลดเอกสารที่เกี่ยวข้องกับคดีและการบริหารที่ดิน
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/documents/generate">
                            <Button variant="secondary" icon={<Sparkles className="w-4 h-4" />}>
                                สร้างเอกสารใหม่
                            </Button>
                        </Link>
                        <Button variant="outline" icon={<Download className="w-4 h-4" />}>
                            ดาวน์โหลดทั้งหมด
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="animate-fade-in">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">เอกสารพร้อมใช้งาน</p>
                                <p className="text-3xl font-bold text-navy">{readyCount}</p>
                            </div>
                            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                <CheckCircle className="w-7 h-7" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="animate-fade-in animation-delay-100">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">รอตรวจสอบโดยทนาย</p>
                                <p className="text-3xl font-bold text-navy">{reviewCount}</p>
                            </div>
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="animate-fade-in animation-delay-200">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">เทมเพลตที่พร้อมใช้</p>
                                <p className="text-3xl font-bold text-navy">{templates.length}</p>
                            </div>
                            <div className="p-3 bg-gold-100 text-gold-700 rounded-lg">
                                <FileText className="w-7 h-7" />
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="animate-slide-up">
                            <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold">เอกสารของฉัน</h2>
                                    <p className="text-sm text-text-light">เอกสารที่สร้างล่าสุดและสถานะปัจจุบัน</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                    <div className="w-full sm:w-56">
                                        <Input placeholder="ค้นหาเอกสาร" />
                                    </div>
                                    <div className="w-full sm:w-44">
                                        <Select>
                                            <option>ทุกสถานะ</option>
                                            <option>พร้อมใช้งาน</option>
                                            <option>ฉบับร่าง</option>
                                            <option>รอตรวจสอบ</option>
                                        </Select>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                {mockDocuments.map((doc) => {
                                    const status =
                                        statusConfig[doc.status as keyof typeof statusConfig] ??
                                        statusConfig.ready;

                                    return (
                                        <div
                                            key={doc.documentId}
                                            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                                        >
                                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                                <div>
                                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-navy">{doc.title}</h3>
                                                        <Badge variant={status.variant}>{status.label}</Badge>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-light">
                                                        <span>ID: {doc.documentId}</span>
                                                        <span>เชื่อมกับ {doc.landId}</span>
                                                        <span>
                                                            สร้างเมื่อ {new Date(doc.generatedDate).toLocaleDateString('th-TH')}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    <Link href="/documents/generate">
                                                        <Button variant="outline" size="sm">
                                                            ดูตัวอย่าง
                                                        </Button>
                                                    </Link>
                                                    <Link href={doc.pdfUrl} target="_blank">
                                                        <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                                                            ดาวน์โหลด
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {mockDocuments.length === 0 && (
                                    <div className="rounded-xl border border-dashed border-gray-200 bg-white p-8 text-center">
                                        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-lg font-semibold text-navy">ยังไม่มีเอกสาร</p>
                                        <p className="text-sm text-text-light mt-2">
                                            เริ่มสร้างเอกสารฉบับแรกของคุณด้วยเทมเพลตที่ผ่านการตรวจสอบ
                                        </p>
                                        <Link href="/documents/generate">
                                            <Button variant="secondary" className="mt-4">
                                                สร้างเอกสารใหม่
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </CardBody>
                        </Card>

                        <Card className="animate-slide-up animation-delay-100">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">สถานะงานล่าสุด</h2>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                <div className="flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-4">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-navy">กำลังตรวจสอบโดยทนาย</p>
                                        <p className="text-sm text-text-light">
                                            เอกสารมาตรฐานของคุณจะได้รับการยืนยันภายใน 24 ชั่วโมง
                                        </p>
                                    </div>
                                    <Badge variant="info">กำลังดำเนินการ</Badge>
                                </div>

                                <Alert type="info" title="เคล็ดลับการเตรียมเอกสาร">
                                    ตรวจสอบข้อมูลโฉนดและชื่อผู้มีสิทธิให้ครบถ้วนก่อนส่งให้ทนายตรวจสอบ
                                </Alert>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="animate-fade-in">
                            <CardHeader className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">เทมเพลตยอดนิยม</h2>
                                <Sparkles className="w-5 h-5 text-gold" />
                            </CardHeader>
                            <CardBody className="space-y-4">
                                {templates.map((template) => (
                                    <div key={template.id} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-navy">{template.title}</h3>
                                            <Badge variant="medium">{template.tag}</Badge>
                                        </div>
                                        <p className="text-sm text-text-light">{template.description}</p>
                                    </div>
                                ))}
                                <Link href="/documents/generate">
                                    <Button variant="outline" className="w-full">
                                        ดูเทมเพลตทั้งหมด
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>

                        <Card className="animate-fade-in animation-delay-100">
                            <CardHeader>
                                <h2 className="text-lg font-semibold">สิ่งที่ต้องเตรียม</h2>
                            </CardHeader>
                            <CardBody className="space-y-3 text-sm text-text-light">
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-gold"></span>
                                    ข้อมูลโฉนดและเลขที่ดิน
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-gold"></span>
                                    หลักฐานประกอบ เช่น รูปถ่ายหรือแผนที่
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-gold"></span>
                                    รายละเอียดผู้เกี่ยวข้องและช่องทางติดต่อ
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
