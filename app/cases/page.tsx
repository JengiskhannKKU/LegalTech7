'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import { Briefcase, Clock, FileText, MessageSquare, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react';
import { mockCases } from '@/lib/mockData';

export default function CasesPage() {
    const activeCases = mockCases.filter(c => c.status === 'active');

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-navy">จัดการคดี (Case Manager)</h1>
                        <p className="text-text-light mt-1">ติดตามสถานะคดีและข้อพิพาททางกฎหมายของคุณ</p>
                    </div>
                    <Link href="/insurance">
                        <Button variant="outline" icon={<Briefcase className="w-4 h-4" />}>
                            ดูความคุ้มครองของคุณ
                        </Button>
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
                    <Card className="bg-navy text-white">
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-200 text-sm mb-1">คดีที่กำลังดำเนินการ</p>
                                <p className="text-4xl font-bold">{activeCases.length}</p>
                            </div>
                            <div className="p-3 bg-white/10 rounded-lg">
                                <Briefcase className="w-8 h-8" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">นัดหมายเร็วๆ นี้</p>
                                <p className="text-4xl font-bold text-navy">1</p>
                            </div>
                            <div className="p-3 bg-gold-100 text-gold-700 rounded-lg">
                                <Clock className="w-8 h-8" />
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className="flex items-center justify-between">
                            <div>
                                <p className="text-text-light text-sm mb-1">เอกสารต้องตรวจสอบ</p>
                                <p className="text-4xl font-bold text-navy">3</p>
                            </div>
                            <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                                <FileText className="w-8 h-8" />
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* Active Cases List */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-navy flex items-center gap-2">
                        <span className="w-1 h-6 bg-gold rounded-full inline-block"></span>
                        รายการคดีปัจจุบัน
                    </h2>

                    {activeCases.map((caseItem) => (
                        <Card key={caseItem.caseId} hover={true} className="animate-slide-up">
                            <CardBody>
                                <div className="flex flex-col lg:flex-row gap-6">
                                    {/* Case Info */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-navy">{caseItem.caseType.replace(/_/g, ' ')}</h3>
                                            <Badge variant="high">กำลังดำเนินการ</Badge>
                                            <span className="text-sm text-text-light">ID: {caseItem.caseId}</span>
                                        </div>
                                        <p className="text-text mb-4">
                                            ที่ดิน: LND-2025-001234 (โฉนดเลขที่ 12345)
                                        </p>

                                        <div className="flex flex-wrap gap-6 text-sm">
                                            <div>
                                                <p className="text-text-light text-xs mb-1">ทนายผู้ดูแล</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                                        <span className="text-xs font-bold text-gray-600">ท</span>
                                                    </div>
                                                    <span className="font-medium text-navy">{caseItem.caseManager.name}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-text-light text-xs mb-1">เริ่มคดีเมื่อ</p>
                                                <span className="font-medium text-navy">{new Date(caseItem.timeline.caseReceived).toLocaleDateString('th-TH')}</span>
                                            </div>
                                            <div>
                                                <p className="text-text-light text-xs mb-1">สิ้นสุดโดยประมาณ</p>
                                                <span className="font-medium text-navy">{new Date(caseItem.timeline.estimatedCompletion).toLocaleDateString('th-TH')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Latest Update & Action */}
                                    <div className="lg:w-1/3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4 text-gold" />
                                            อัปเดตล่าสุด
                                        </h4>
                                        <div className="space-y-3">
                                            {caseItem.progressUpdates.slice(0, 1).map((update, i) => (
                                                <div key={i}>
                                                    <p className="text-sm text-text mb-1">{update.update}</p>
                                                    <p className="text-xs text-text-light">{new Date(update.date).toLocaleDateString('th-TH')}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <p className="text-xs font-medium text-navy mb-2">ขั้นตอนต่อไป:</p>
                                            <p className="text-sm text-text-light mb-3">{caseItem.progressUpdates[0].nextSteps}</p>
                                            <Link href={`/cases/${caseItem.caseId}`}>
                                                <Button variant="primary" size="sm" className="w-full">
                                                    ดูรายละเอียดความคืบหน้า
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}

                    {activeCases.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-medium text-navy">ไม่มีคดีที่กำลังดำเนินการ</h3>
                            <p className="text-text-light mt-2">คุณสามารถปรึกษาทนายความหรือสร้างเคสใหม่ได้หากต้องการความช่วยเหลือ</p>
                            <Link href="/legal-network">
                                <Button variant="primary" className="mt-6">
                                    ปรึกษาทนายความ
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
