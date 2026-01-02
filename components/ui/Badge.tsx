'use client';

import React, { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'critical' | 'high' | 'medium' | 'low' | 'info' | 'success';
    className?: string;
}

export default function Badge({ children, variant = 'info', className = '' }: BadgeProps) {
    const styles = {
        critical: 'bg-red-100 text-red-800 border-red-200',
        high: 'bg-orange-100 text-orange-800 border-orange-200',
        medium: 'bg-gold-100 text-gold-700 border-gold-200',
        low: 'bg-green-100 text-green-800 border-green-200',
        info: 'bg-blue-100 text-blue-800 border-blue-200',
        success: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    };

    return (
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${styles[variant]} ${className}`}>
            {children}
        </span>
    );
}
