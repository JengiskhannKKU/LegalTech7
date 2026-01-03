'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Alert from '@/components/ui/Alert';
import Link from 'next/link';
import {
    Briefcase,
    Calendar,
    CheckCircle,
    Clock,
    FileText,
    MessageSquare,
    Phone,
    Mail,
    ArrowRight,
    Users,
} from 'lucide-react';
import { mockCases, mockDocuments } from '@/lib/mockData';

const statusConfig = {
    active: { label: 'กำลังดำเนินการ', variant: 'high' },
    pending: { label: 'รอดำเนินการ', variant: 'medium' },
    closed: { label: 'ปิดคดี', variant: 'success' },
} as const;

export default function CaseManagerPage() {
    const activeCases = mockCases.filter((caseItem) => caseItem.status === 'active');
    const primaryCase = activeCases[0];
    const nextMediation = primaryCase?.timeline.mediationScheduled;
    const documentsReady = mockDocuments.length;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                            Case Manager
                        </p>
                        <h1 className="text-3xl font-bold text-navy">ผู้จัดการเคสของคุณ</h1>
                        <p className="text-text-light mt-2 max-w-2xl">
                            ศูนย์กลางการติดตามคดี นัดหมาย และเอกสาร เพื่อให้การจัดการข้อพิพาทเป็นระบบและชัดเจน
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/documents/generate">
                            <Button variant="secondary" icon={<FileText className="w-4 h-4" />}>
                                สร้างเอกสารใหม่
                            </Button>
                        </Link>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-navy text-white animate-fade-in">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">คดีที่กำลังดูแล</p>
                                <p className="text-4xl font-bold text-navy">{activeCases.length}</p>
                            </div>
                            <div className="p-3 bg-white/10 rounded-lg">
                                <Briefcase className="w-8 h-8" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="animate-fade-in animation-delay-100">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">นัดหมายถัดไป</p>
                                <p className="text-xl font-bold text-navy">
                                    {nextMediation
                                        ? new Date(nextMediation).toLocaleDateString('th-TH', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })
                                        : '-'}
                                </p>
                            </div>
                            <div className="p-3 bg-gold-100 text-gold-700 rounded-lg">
                                <Calendar className="w-8 h-8" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="animate-fade-in animation-delay-200">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">เอกสารพร้อมใช้</p>
                                <p className="text-4xl font-bold text-navy">{documentsReady}</p>
                            </div>
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                <FileText className="w-8 h-8" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="animate-fade-in animation-delay-300">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">เวลาตอบกลับเฉลี่ย</p>
                                <p className="text-3xl font-bold text-navy">24 ชม.</p>
                            </div>
                            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                <Clock className="w-8 h-8" />
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="animate-slide-up">
                            <CardHeader className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">กำลังดำเนินการ</h2>
                                <Link href="/cases">
                                    <Button variant="ghost" size="sm">
                                        ดูทั้งหมด
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                {activeCases.map((caseItem) => {
                                    const status =
                                        statusConfig[caseItem.status as keyof typeof statusConfig] ??
                                        statusConfig.active;
                                    const latestUpdate = caseItem.progressUpdates[0];

                                    return (
                                        <div
                                            key={caseItem.caseId}
                                            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                                        >
                                            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                                <div>
                                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-navy">
                                                            {caseItem.caseType.replace(/_/g, ' ')}
                                                        </h3>
                                                        <Badge variant={status.variant}>{status.label}</Badge>
                                                        <span className="text-xs text-text-light">
                                                            ID: {caseItem.caseId}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-6 text-sm text-text-light">
                                                        <div>
                                                            <p className="text-xs">เริ่มคดี</p>
                                                            <p className="font-medium text-navy">
                                                                {new Date(caseItem.timeline.caseReceived).toLocaleDateString('th-TH')}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs">คาดว่าจะเสร็จ</p>
                                                            <p className="font-medium text-navy">
                                                                {new Date(caseItem.timeline.estimatedCompletion).toLocaleDateString('th-TH')}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs">ผู้ดูแลคดี</p>
                                                            <p className="font-medium text-navy">
                                                                {caseItem.caseManager.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="lg:w-64 rounded-lg border border-gray-100 bg-gray-50 p-4">
                                                    <p className="text-xs font-semibold text-navy mb-2">อัปเดตล่าสุด</p>
                                                    {latestUpdate ? (
                                                        <>
                                                            <p className="text-sm text-text mb-2">{latestUpdate.update}</p>
                                                            <p className="text-xs text-text-light">
                                                                {new Date(latestUpdate.date).toLocaleDateString('th-TH')}
                                                            </p>
                                                            <div className="mt-3 pt-3 border-t border-gray-200">
                                                                <p className="text-xs font-semibold text-navy mb-1">ขั้นตอนถัดไป</p>
                                                                <p className="text-sm text-text-light">{latestUpdate.nextSteps}</p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <p className="text-sm text-text-light">
                                                            ยังไม่มีการอัปเดตล่าสุด
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                                <Link href={`/cases/${caseItem.caseId}`}>
                                                    <Button variant="primary" size="sm">
                                                        ดูรายละเอียดคดี
                                                    </Button>
                                                </Link>

                                            </div>
                                        </div>
                                    );
                                })}

                                {activeCases.length === 0 && (
                                    <div className="rounded-xl border border-gray-100 bg-white p-8 text-center">
                                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4 opacity-70" />
                                        <p className="text-lg font-semibold text-navy">ยังไม่มีคดีที่กำลังดำเนินการ</p>
                                        <p className="text-sm text-text-light mt-2">
                                            คุณสามารถเริ่มคดีใหม่หรือปรึกษาทนายเพื่อขอคำแนะนำได้ทันที
                                        </p>
                                        <Link href="/legal-network">
                                            <Button variant="secondary" className="mt-4">
                                                ค้นหาทนายความ
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </CardBody>
                        </Card>

                        <Card className="animate-slide-up animation-delay-100">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">กำหนดการถัดไป</h2>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                <div className="flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-4">
                                    <div className="p-2 bg-gold-100 text-gold-700 rounded-lg">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-navy">นัดไกล่เกลี่ยข้อพิพาท</p>
                                        <p className="text-sm text-text-light">
                                            {nextMediation
                                                ? new Date(nextMediation).toLocaleDateString('th-TH', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })
                                                : 'ยังไม่มีนัดหมาย'}
                                        </p>
                                    </div>
                                    <Badge variant="info">กำลังจะถึง</Badge>
                                </div>

                                <Alert type="info" title="คำแนะนำสำหรับการนัดหมาย">
                                    เตรียมเอกสารหลักฐานและสรุปข้อพิพาทล่วงหน้าเพื่อให้การไกล่เกลี่ยเป็นไปอย่างราบรื่น
                                </Alert>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="animate-fade-in">
                            <CardHeader className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">ผู้ดูแลคดีของคุณ</h2>
                                <Users className="w-5 h-5 text-gold" />
                            </CardHeader>
                            <CardBody>
                                {primaryCase ? (
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-text-light">Case Manager</p>
                                            <p className="text-lg font-semibold text-navy">
                                                {primaryCase.caseManager.name}
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <a
                                                href={`tel:${primaryCase.caseManager.phone}`}
                                                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm font-medium text-navy"
                                            >
                                                <Phone className="w-4 h-4 text-green-600" />
                                                {primaryCase.caseManager.phone}
                                            </a>
                                            <a
                                                href={`mailto:${primaryCase.caseManager.email}`}
                                                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm font-medium text-navy"
                                            >
                                                <Mail className="w-4 h-4 text-blue-600" />
                                                {primaryCase.caseManager.email}
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-text-light">
                                        ยังไม่มีผู้ดูแลคดีที่ถูกกำหนดให้กับบัญชีนี้
                                    </p>
                                )}
                            </CardBody>
                        </Card>

                        <Card className="animate-fade-in animation-delay-100">
                            <CardHeader>
                                <h2 className="text-lg font-semibold">งานที่ต้องดำเนินการ</h2>
                            </CardHeader>
                            <CardBody className="space-y-3">
                                {primaryCase?.progressUpdates.map((update, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gold"></div>
                                        <div>
                                            <p className="text-sm text-text">{update.nextSteps}</p>
                                            <p className="text-xs text-text-light">
                                                อัปเดตเมื่อ {new Date(update.date).toLocaleDateString('th-TH')}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {(!primaryCase || primaryCase.progressUpdates.length === 0) && (
                                    <p className="text-sm text-text-light">
                                        ไม่มีงานเร่งด่วนในขณะนี้
                                    </p>
                                )}
                            </CardBody>
                        </Card>

                        <Card className="animate-fade-in animation-delay-200">
                            <CardHeader>
                                <h2 className="text-lg font-semibold">การดำเนินการด่วน</h2>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                <Link href="/cases" className="block">
                                    <Button variant="primary" className="w-full justify-center py-4 text-lg shadow-md hover:shadow-lg transition-all">
                                        <Briefcase className="w-5 h-5" />
                                        ตรวจสอบคดีทั้งหมด
                                    </Button>
                                </Link>
                                <div className="grid grid-cols-2 gap-3">
                                    <Link href="/reports">
                                        <Button variant="outline" className="w-full h-full flex-col gap-2 p-4 text-center hover:bg-navy hover:text-white group">
                                            <FileText className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                                            <span className="text-xs">ดูรายงาน</span>
                                        </Button>
                                    </Link>
                                    <Link href="/legal-network">
                                        <Button variant="outline" className="w-full h-full flex-col gap-2 p-4 text-center hover:bg-navy hover:text-white group">
                                            <MessageSquare className="w-6 h-6 text-gold group-hover:text-gold transition-colors" />
                                            <span className="text-xs">ขอคำปรึกษา</span>
                                        </Button>
                                    </Link>
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
