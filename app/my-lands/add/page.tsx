'use client';

import React, { useState, useRef, ChangeEvent } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardBody, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Alert from '@/components/ui/Alert';
import Link from 'next/link';
import { ArrowLeft, Upload, Image as ImageIcon, Loader2, CheckCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ExtractedData {
    deedType: string;
    deedNumber: string;
    landSizeRai: string;
    landSizeNgan: string;
    landSizeWa: string;
    province: string;
    district: string;
    subdistrict: string;
    villageNo: string;
    issueDate: string;
}

export default function AddLandPage() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        deedType: '',
        deedNumber: '',
        landSizeRai: '',
        landSizeNgan: '',
        landSizeWa: '',
        province: '',
        district: '',
        subdistrict: '',
        villageNo: '',
        currentUse: '',
        estimatedValue: '',
        acquisitionDate: '',
    });

    const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setError('กรุณาอัพโหลดไฟล์รูปภาพเท่านั้น');
            return;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            setError('ขนาดไฟล์ต้องไม่เกิน 10MB');
            return;
        }

        setImageFile(file);
        setError(null);

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const fakeEvent = {
                target: { files: [file] }
            } as any;
            handleImageSelect(fakeEvent);
        }
    };

    const processOCR = async () => {
        if (!imageFile) {
            setError('กรุณาอัพโหลดรูปภาพก่อน');
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('image', imageFile);

            const response = await fetch('/api/ocr/extract-deed', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to process image');
            }

            if (result.success && result.data) {
                setExtractedData(result.data);
                // Auto-fill form
                setFormData(prev => ({
                    ...prev,
                    deedType: result.data.deedType || '',
                    deedNumber: result.data.deedNumber || '',
                    landSizeRai: result.data.landSizeRai || '',
                    landSizeNgan: result.data.landSizeNgan || '',
                    landSizeWa: result.data.landSizeWa || '',
                    province: result.data.province || '',
                    district: result.data.district || '',
                    subdistrict: result.data.subdistrict || '',
                    villageNo: result.data.villageNo || '',
                    acquisitionDate: result.data.issueDate || '',
                }));
            }
        } catch (err) {
            console.error('OCR Error:', err);
            setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการประมวลผลรูปภาพ');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.deedType || !formData.deedNumber || !formData.province) {
            setError('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน (ประเภทโฉนด, เลขที่โฉนด, จังหวัด)');
            return;
        }

        // In a real app, this would save to database
        // For now, we'll just show success message
        setSuccess(true);

        // Redirect after 2 seconds
        setTimeout(() => {
            router.push('/my-lands');
        }, 2000);
    };

    const clearImage = () => {
        setUploadedImage(null);
        setImageFile(null);
        setExtractedData(null);
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/my-lands" className="inline-flex items-center text-text-light hover:text-navy mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        กลับไปหน้ารายการ
                    </Link>

                    <h1 className="text-3xl font-bold text-navy">เพิ่มที่ดินใหม่</h1>
                    <p className="text-text-light mt-2">
                        อัพโหลดรูปโฉนดที่ดินเพื่อให้ระบบช่วยกรอกข้อมูลอัตโนมัติ
                    </p>
                </div>

                {success && (
                    <Alert type="success" className="mb-6">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>บันทึกข้อมูลที่ดินสำเร็จ! กำลังนำคุณกลับไปหน้ารายการ...</span>
                        </div>
                    </Alert>
                )}

                {error && (
                    <Alert type="critical" className="mb-6">
                        {error}
                    </Alert>
                )}

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Upload Section */}
                    <div>
                        <Card>
                            <CardHeader>
                                <h2 className="text-xl font-semibold">อัพโหลดรูปโฉนด</h2>
                            </CardHeader>
                            <CardBody>
                                {!uploadedImage ? (
                                    <div
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-navy transition-colors cursor-pointer"
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                        <p className="text-lg font-medium text-navy mb-2">
                                            ลากไฟล์มาวางที่นี่
                                        </p>
                                        <p className="text-sm text-text-light mb-4">
                                            หรือคลิกเพื่อเลือกไฟล์
                                        </p>
                                        <p className="text-xs text-text-light">
                                            รองรับไฟล์: JPG, PNG (ขนาดไม่เกิน 10MB)
                                        </p>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageSelect}
                                            className="hidden"
                                        />
                                    </div>
                                ) : (
                                    <div className="relative">
                                        <img
                                            src={uploadedImage}
                                            alt="Uploaded deed"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                        <button
                                            onClick={clearImage}
                                            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}

                                {uploadedImage && !extractedData && (
                                    <Button
                                        variant="primary"
                                        className="w-full mt-4"
                                        onClick={processOCR}
                                        disabled={isProcessing}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                กำลังประมวลผล...
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="w-5 h-5" />
                                                สกัดข้อมูลจากรูปภาพ
                                            </>
                                        )}
                                    </Button>
                                )}

                                {extractedData && (
                                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center gap-2 text-green-700 mb-2">
                                            <CheckCircle className="w-5 h-5" />
                                            <span className="font-semibold">สกัดข้อมูลสำเร็จ!</span>
                                        </div>
                                        <p className="text-sm text-green-600">
                                            ข้อมูลถูกกรอกในฟอร์มด้านขวาแล้ว กรุณาตรวจสอบและแก้ไขหากจำเป็น
                                        </p>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </div>

                    {/* Form Section */}
                    <div>
                        <Card>
                            <CardHeader>
                                <h2 className="text-xl font-semibold">ข้อมูลที่ดิน</h2>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                ประเภทโฉนด <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                name="deedType"
                                                value={formData.deedType}
                                                onChange={handleInputChange}
                                                placeholder="เช่น โฉนดที่ดิน, น.ส.3"
                                                required
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                เลขที่โฉนด <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                name="deedNumber"
                                                value={formData.deedNumber}
                                                onChange={handleInputChange}
                                                placeholder="เลขที่โฉนด"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                ไร่
                                            </label>
                                            <Input
                                                name="landSizeRai"
                                                value={formData.landSizeRai}
                                                onChange={handleInputChange}
                                                placeholder="0"
                                                type="number"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                งาน
                                            </label>
                                            <Input
                                                name="landSizeNgan"
                                                value={formData.landSizeNgan}
                                                onChange={handleInputChange}
                                                placeholder="0"
                                                type="number"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                ตารางวา
                                            </label>
                                            <Input
                                                name="landSizeWa"
                                                value={formData.landSizeWa}
                                                onChange={handleInputChange}
                                                placeholder="0"
                                                type="number"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                จังหวัด <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                name="province"
                                                value={formData.province}
                                                onChange={handleInputChange}
                                                placeholder="จังหวัด"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                อำเภอ
                                            </label>
                                            <Input
                                                name="district"
                                                value={formData.district}
                                                onChange={handleInputChange}
                                                placeholder="อำเภอ"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                ตำบล
                                            </label>
                                            <Input
                                                name="subdistrict"
                                                value={formData.subdistrict}
                                                onChange={handleInputChange}
                                                placeholder="ตำบล"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                หมู่ที่
                                            </label>
                                            <Input
                                                name="villageNo"
                                                value={formData.villageNo}
                                                onChange={handleInputChange}
                                                placeholder="หมู่ที่"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                การใช้ประโยชน์ปัจจุบัน
                                            </label>
                                            <Input
                                                name="currentUse"
                                                value={formData.currentUse}
                                                onChange={handleInputChange}
                                                placeholder="เช่น เกษตรกรรม, ที่อยู่อาศัย"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                ราคาประเมิน (บาท)
                                            </label>
                                            <Input
                                                name="estimatedValue"
                                                value={formData.estimatedValue}
                                                onChange={handleInputChange}
                                                placeholder="0"
                                                type="number"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-navy mb-1">
                                                วันที่ได้มา
                                            </label>
                                            <Input
                                                name="acquisitionDate"
                                                value={formData.acquisitionDate}
                                                onChange={handleInputChange}
                                                type="date"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <Link href="/my-lands" className="flex-1">
                                            <Button variant="outline" className="w-full">
                                                ยกเลิก
                                            </Button>
                                        </Link>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            className="flex-1"
                                            disabled={success}
                                        >
                                            บันทึกข้อมูล
                                        </Button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
