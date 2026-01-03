'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bell, User, LogOut, Settings } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const navLinks = [
        { href: '/dashboard', label: 'แดชบอร์ด' },
        { href: '/my-lands', label: 'ที่ดินของฉัน' },
        { href: '/risk-assessment', label: 'ประเมินความเสี่ยง' },
        { href: '/case-manager', label: 'ผู้จัดการเคส' },
        { href: '/documents', label: 'เอกสาร' },
    ];

    return (
        <nav className="bg-white text-navy shadow-lg sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image src="/images/Logo.png" alt="Logo" width={40} height={40} />

                        <span className="text-xl font-bold hidden sm:block">LandGuard</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Notifications */}
                        <Link href="/alerts">
                            <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></span>
                            </button>
                        </Link>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <Image src="/images/Avartar.jpg" alt="Profile" width={40} height={40} className="rounded-full object-cover w-10 h-10" />
                                <span className="hidden sm:block text-sm font-medium">สมชาย ใจดี</span>
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-navy animate-fade-in">
                                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm">โปรไฟล์</span>
                                    </Link>
                                    <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors">
                                        <Settings className="w-4 h-4" />
                                        <span className="text-sm">ตั้งค่า</span>
                                    </Link>
                                    <hr className="my-2" />
                                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors w-full text-left text-red-600">
                                        <LogOut className="w-4 h-4" />
                                        <span className="text-sm">ออกจากระบบ</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 animate-fade-in">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
