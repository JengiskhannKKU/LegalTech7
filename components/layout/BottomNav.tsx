'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Map, ShieldAlert, Bell, Menu } from 'lucide-react';

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { href: '/dashboard', label: 'แดชบอร์ด', icon: LayoutDashboard },
        { href: '/my-lands', label: 'ที่ดิน', icon: Map },
        { href: '/risk-assessment', label: 'ประเมินภัย', icon: ShieldAlert },
        { href: '/alerts', label: 'แจ้งเตือน', icon: Bell },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-navy' : 'text-gray-400 hover:text-navy/70'
                                }`}
                        >
                            <item.icon className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : ''}`} />
                            <span className="text-[10px] font-medium transition-colors">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}

                {/* More / Menu Option (Triggers mobile menu logic or separate page in future) */}
                <button
                    className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-400 hover:text-navy/70"
                    onClick={() => {
                        // In a real app, this might open a drawer. 
                        // For now, let's link to settings or toggle the existing mobile menu if possible, 
                        // or just act as a 'More' placeholder.
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <Menu className="w-6 h-6" />
                    <span className="text-[10px] font-medium">เมนู</span>
                </button>
            </div>
        </div>
    );
}
