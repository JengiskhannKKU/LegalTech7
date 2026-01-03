'use client';

import { useState, useRef, useEffect, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { mockLawyers } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Send, User, MoreVertical, Phone, Video, Paperclip, Image as ImageIcon, Search } from 'lucide-react';

interface Message {
    id: string;
    sender: 'user' | 'lawyer';
    text: string;
    timestamp: Date;
    read: boolean;
}

export default function ChatPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const lawyer = mockLawyers.find(l => l.lawyerId === id);

    if (!lawyer) {
        notFound();
    }

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'lawyer',
            text: 'สวัสดีครับ มีอะไรให้ผมช่วยดูแลไหมครับ เกี่ยวกับเรื่องที่ดินหรือคดีความด้านไหนครับ?',
            timestamp: new Date(Date.now() - 3600000), // 1 hour ago
            read: true
        }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!newMessage.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: newMessage,
            timestamp: new Date(),
            read: false
        };

        setMessages(prev => [...prev, userMsg]);
        setNewMessage('');

        // Mock auto-reply
        setTimeout(() => {
            const replyMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'lawyer',
                text: 'ขอบคุณครับ ผมขอทราบรายละเอียดเพิ่มเติมเกี่ยวกับโฉนดที่ดินสักเล็กน้อยนะครับ',
                timestamp: new Date(),
                read: false
            };
            setMessages(prev => [...prev, replyMsg]);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[calc(100vh-140px)] min-h-[600px] flex border border-gray-200">
                    {/* Sidebar / Chat List - Hidden on mobile if viewing specific chat, shown on desktop */}
                    <div className="w-80 border-r border-gray-100 flex-col hidden md:flex bg-gray-50/50">
                        <div className="p-4 border-b border-gray-100">
                            <h2 className="font-bold text-navy text-lg mb-4">ข้อความ</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="ค้นหา..."
                                    className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20"
                                />
                            </div>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            {/* Active Chat Item */}
                            <div className="p-4 bg-white border-l-4 border-navy cursor-pointer hover:bg-gray-50 transition-colors">
                                <div className="flex gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">
                                            {lawyer.name.charAt(0)}
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-semibold text-sm text-navy truncate">{lawyer.name}</h3>
                                            <span className="text-xs text-text-light whitespace-nowrap">09:41</span>
                                        </div>
                                        <p className="text-xs text-gray-500 truncate">
                                            {messages[messages.length - 1].sender === 'user' ? 'คุณ: ' : ''}{messages[messages.length - 1].text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Other Mock Items */}
                            {[1, 2].map((i) => (
                                <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-transparent">
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                                            T
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-semibold text-sm text-gray-700 truncate">ทนายความ ระบบ (Admin)</h3>
                                                <span className="text-xs text-gray-400 whitespace-nowrap">เมื่อวาน</span>
                                            </div>
                                            <p className="text-xs text-gray-400 truncate">ยินดีต้อนรับสู่ LegalTech...</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-grow flex flex-col h-full bg-white">
                        {/* Header */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white shadow-sm z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">
                                    {lawyer.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy text-base">{lawyer.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="text-xs text-green-600 font-medium">ออนไลน์</span>
                                        <span className="text-xs text-gray-300">|</span>
                                        <span className="text-xs text-gray-500">ตอบกลับภายใน {lawyer.responseTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" icon={<Phone className="w-4 h-4" />}>{null}</Button>
                                <Button variant="ghost" size="sm" icon={<Video className="w-4 h-4" />}>{null}</Button>
                                <Button variant="ghost" size="sm" icon={<MoreVertical className="w-4 h-4" />}>{null}</Button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/30">
                            <div className="flex justify-center my-4">
                                <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">วันนี้</span>
                            </div>

                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[75%] md:max-w-[60%] flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${msg.sender === 'user' ? 'bg-gold text-white' : 'bg-navy text-white'
                                            }`}>
                                            {msg.sender === 'user' ? 'U' : lawyer.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.sender === 'user'
                                                    ? 'bg-navy text-white rounded-tr-none'
                                                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                                }`}>
                                                {msg.text}
                                            </div>
                                            <div className={`flex items-center gap-1 mt-1 text-[10px] text-gray-400 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'
                                                }`}>
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                {msg.sender === 'user' && (msg.read ? ' • อ่านแล้ว' : ' • ส่งแล้ว')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                                <Button type="button" variant="ghost" size="sm" icon={<Paperclip className="w-5 h-5" />}>{null}</Button>
                                <Button type="button" variant="ghost" size="sm" icon={<ImageIcon className="w-5 h-5" />}>{null}</Button>
                                <Input
                                    className="flex-grow"
                                    placeholder="พิมพ์ข้อความ..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <Button type="submit" variant="primary" icon={<Send className="w-4 h-4" />}>
                                    ส่ง
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
