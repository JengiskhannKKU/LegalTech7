'use client';

import React, { useState, useRef, ChangeEvent } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Alert from '@/components/ui/Alert';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, FileText, Share2, Printer, AlertTriangle, CheckCircle, Clock, ShieldAlert, Plus, History, Trash2 } from 'lucide-react';
import { mockLands, mockRiskAssessments, mockAlerts, mockLandChanges } from '@/lib/mockData';
import DynamicMap from '@/components/ui/DynamicMap';
import Modal, { ModalBody, ModalFooter } from '@/components/ui/Modal';
import { useParams } from 'next/navigation';

interface Document {
    name: string;
    size: string;
    date: string;
    type: 'pdf' | 'image';
    url?: string;
}

export default function LandDetailsPage() {
    // In a real app, use params to fetch data. Here we mock it interactively.
    const params = useParams(); // Should handle if used in real component, but for mock we just pick first

    const [documents, setDocuments] = useState<Document[]>([
        { name: 'โฉนดที่ดิน.pdf', size: '2.5 MB', date: '15/01/2024', type: 'pdf' },
        { name: 'สัญญาซื้อขาย.pdf', size: '1.8 MB', date: '10/05/2020', type: 'pdf' }
    ]);

    // State for delete confirmation
    const [deleteDocIndex, setDeleteDocIndex] = useState<number | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Mock upload - in real app would upload to server
        const newDoc: Document = {
            name: file.name,
            size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
            date: new Date().toLocaleDateString('th-TH'),
            type: file.type.includes('pdf') ? 'pdf' : 'image',
            url: URL.createObjectURL(file)
        };

        setDocuments(prev => [...prev, newDoc]);
    };

    const handleDeleteClick = (index: number, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent opening document when clicking delete
        setDeleteDocIndex(index);
    };

    const confirmDelete = () => {
        if (deleteDocIndex === null) return;

        setDocuments(prev => prev.filter((_, i) => i !== deleteDocIndex));
        setDeleteDocIndex(null);
    };
    const land = mockLands[0];
    const riskAssessment = mockRiskAssessments[0];
    const landAlerts = mockAlerts.filter(a => a.landId === land.id);
    const landChanges = mockLandChanges.filter(c => c.landId === land.id);

    const riskLabels: Record<string, string> = {
        adversePossession: 'การครอบครองโดยปรปักษ์',
        encroachment: 'การบุกรุก',
        inheritanceDispute: 'ข้อพิพาทเรื่องมรดก',
        rightOfWay: 'ภาระจำยอม/ทางจำเป็น'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb & Header */}
                <div className="mb-8">
                    <Link href="/my-lands" className="inline-flex items-center text-text-light hover:text-navy mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        กลับไปหน้ารายการ
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-navy">
                                    {land.deedType} {land.deedNumber}
                                </h1>
                                <Badge variant={land.riskLevel === 'low' ? 'low' : 'critical'}>
                                    {land.riskLevel === 'low' ? 'ปลอดภัย' : 'มีการลุกล้ำ'}
                                </Badge>
                            </div>
                            <p className="text-text-light flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {land.subdistrict}, {land.district}, {land.province}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Button variant="outline" icon={<Printer className="w-4 h-4" />} onClick={() => window.print()}>
                                พิมพ์
                            </Button>
                            <Link href="/risk-assessment">
                                <Button variant="primary">
                                    ประเมินความเสี่ยงใหม่
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map Section */}
                        <Card className="overflow-hidden h-[450px]">
                            <DynamicMap
                                center={[land.coordinates.lat, land.coordinates.lng]}
                                zoom={15}
                                markers={[
                                    {
                                        position: [land.coordinates.lat, land.coordinates.lng],
                                        title: `ที่ดิน: ${land.deedType} ${land.deedNumber}`,
                                        content: (
                                            <div>
                                                <p className="font-bold text-navy">{land.deedType} {land.deedNumber}</p>
                                                <p className="text-xs">ขนาด: {land.landSizeRai}-{land.landSizeNgan}-{land.landSizeWa} ไร่</p>
                                            </div>
                                        )
                                    }
                                ]}
                                circles={[
                                    {
                                        center: [land.coordinates.lat, land.coordinates.lng],
                                        radius: 200, // Mock radius for risk zone
                                        color: '#ef4444',
                                        fillColor: '#ef4444'
                                    }
                                ]}
                                className="h-full w-full"
                            />
                        </Card>

                        {/* Alert History */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-navy" />
                                    ประวัติการแจ้งเตือน
                                </h2>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-4">
                                    {landAlerts.map((alert) => (
                                        <div key={alert.alertId} className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className={`p-2 rounded-lg h-fit ${alert.alertLevel === 'critical' ? 'bg-red-100 text-red-600' : 'bg-gold-100 text-gold-600'}`}>
                                                <AlertTriangle className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4 className="font-semibold text-navy">{alert.description}</h4>
                                                    <span className="text-xs text-text-light">
                                                        {new Date(alert.timestamp).toLocaleDateString('th-TH')}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-text-light mb-2">ประเภท: {alert.alertType}</p>
                                                <Badge variant={alert.status === 'new' ? 'critical' : 'success'}>
                                                    {alert.status === 'new' ? 'ใหม่' : 'รับทราบแล้ว'}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                    {landAlerts.length === 0 && (
                                        <div className="text-center py-8 text-text-light">
                                            <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-500 opacity-50" />
                                            <p>ไม่มีการแจ้งเตือนในช่วงนี้</p>
                                        </div>
                                    )}
                                </div>
                            </CardBody>
                        </Card>

                        {/* Land Change Timeline */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <History className="w-5 h-5 text-navy" />
                                    ประวัติการเปลี่ยนแปลงสภาพที่ดิน
                                </h2>
                            </CardHeader>
                            <CardBody>
                                <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 pl-6 py-2">
                                    {landChanges.map((change, index) => (
                                        <div key={change.id} className="relative">
                                            {/* Dot */}
                                            <div
                                                className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white box-content
                                                ${change.changePercentage > 0 ? 'bg-red-500' : 'bg-green-500'}`}
                                            ></div>

                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                                <div>
                                                    <p className="font-semibold text-navy text-lg">{change.description}</p>
                                                    <div className="flex items-center gap-2 text-sm text-text-light mt-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(change.changeDate).toLocaleDateString('th-TH', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    {change.changePercentage > 0 && (
                                                        <Badge variant="critical">
                                                            เปลี่ยน {change.changePercentage}%
                                                        </Badge>
                                                    )}
                                                    {change.changePercentage === 0 && (
                                                        <Badge variant="success">
                                                            ปกติ
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>

                                            {change.coordinates && (
                                                <div className="mt-3 p-3 bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                                                    <MapPin className="w-4 h-4 text-text-light" />
                                                    <span className="text-navy font-medium">
                                                        พิกัด: {change.coordinates.lat.toFixed(6)}, {change.coordinates.lng.toFixed(6)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>




                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h3 className="font-semibold">ข้อมูลที่ดิน</h3>
                            </CardHeader>
                            <CardBody className="space-y-4 text-sm">
                                <div>
                                    <label className="text-text-light block text-xs mb-1">ขนาดพื้นที่</label>
                                    <p className="font-semibold text-lg">{land.landSizeRai}-{land.landSizeNgan}-{land.landSizeWa} ไร่</p>
                                </div>
                                <div>
                                    <label className="text-text-light block text-xs mb-1">วันที่ได้มา</label>
                                    <p className="font-medium">{new Date(land.acquisitionDate).toLocaleDateString('th-TH')}</p>
                                </div>

                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h3 className="font-semibold">เอกสารที่เกี่ยวข้อง</h3>
                            </CardHeader>
                            <CardBody>
                                <ul className="space-y-3">
                                    {documents.map((doc, index) => (
                                        <li key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer group" onClick={() => window.open(doc.url, '_blank')}>
                                            <FileText className={`w-8 h-8 ${doc.type === 'pdf' ? 'text-red-500' : 'text-blue-500'}`} />
                                            <div className="flex-1 overflow-hidden">
                                                <p className="font-medium truncate group-hover:text-navy transition-colors">{doc.name}</p>
                                                <p className="text-xs text-text-light">{doc.size} • {doc.date}</p>
                                            </div>
                                            <button
                                                className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover:opacity-100 no-print"
                                                onClick={(e) => handleDeleteClick(index, e)}
                                                title="ลบเอกสาร"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileUpload}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full mt-4"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <Plus className="w-4 h-4" />
                                    เพิ่มเอกสาร
                                </Button>
                            </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-navy to-navy-700 text-white">
                            <CardBody>
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldAlert className="w-8 h-8 text-gold" />
                                    <h3 className="font-semibold text-lg">ประกันข้อพิพาท</h3>
                                </div>
                                <p className="text-sm text-gray-200 mb-4">
                                    ที่ดินแปลงนี้ยังไม่มีความคุ้มครองข้อพิพาท
                                </p>
                                <Link href="/insurance">
                                    <Button variant="secondary" className="w-full">
                                        ดูแผนความคุ้มครอง
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Delete Confirmation Modal */}
            <Modal
                isOpen={deleteDocIndex !== null}
                onClose={() => setDeleteDocIndex(null)}
                title="ยืนยันการลบเอกสาร"
                size="sm"
            >
                <ModalBody>
                    <p className="text-gray-600">
                        คุณแน่ใจหรือไม่ที่จะลบเอกสารนี้? การกระทำนี้ไม่สามารถย้อนกลับได้
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={() => setDeleteDocIndex(null)}>
                        ยกเลิก
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        ลบเอกสาร
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
