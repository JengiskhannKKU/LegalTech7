'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-navy text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-xl">
                                LG
                            </div>
                            <span className="text-xl font-bold">LandGuard</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            เปลี่ยนกฎหมายที่ดินจากแบบเชิงรับเป็นเชิงป้องกัน ช่วยให้เจ้าของที่ดินบริหารจัดการความเสี่ยงทางกฎหมายได้อย่างมีประสิทธิภาพ
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">เมนูหลัก</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-gray-300 hover:text-gold transition-colors">เกี่ยวกับเรา</Link></li>
                            <li><Link href="/pricing" className="text-gray-300 hover:text-gold transition-colors">แผนบริการ</Link></li>
                            <li><Link href="/legal-network" className="text-gray-300 hover:text-gold transition-colors">เครือข่ายทนายความ</Link></li>
                            <li><Link href="/insurance" className="text-gray-300 hover:text-gold transition-colors">ประกันภัย</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">ช่วยเหลือ</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/help" className="text-gray-300 hover:text-gold transition-colors">ศูนย์ช่วยเหลือ</Link></li>
                            <li><Link href="/faq" className="text-gray-300 hover:text-gold transition-colors">คำถามที่พบบ่อย</Link></li>
                            <li><Link href="/privacy" className="text-gray-300 hover:text-gold transition-colors">นโยบายความเป็นส่วนตัว</Link></li>
                            <li><Link href="/terms" className="text-gray-300 hover:text-gold transition-colors">ข้อกำหนดการใช้งาน</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">ติดต่อเรา</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>123 ถนนสุขุมวิท กรุงเทพฯ 10110</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <a href="tel:0212345678" className="hover:text-gold transition-colors">02-123-4567</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a href="mailto:info@landguard.com" className="hover:text-gold transition-colors">info@landguard.com</a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex gap-3 mt-4">
                            <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2025 LandGuard. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
