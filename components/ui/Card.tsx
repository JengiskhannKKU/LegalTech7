'use client';

import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
}

export default function Card({ children, className = '', hover = false, glass = false, onClick, style }: CardProps) {
    const baseClasses = 'rounded-xl transition-all duration-300';
    const glassClasses = glass ? 'bg-white/70 backdrop-blur-lg border border-white/20' : 'bg-white shadow-card';
    const hoverClasses = hover ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : '';
    const clickClasses = onClick ? 'cursor-pointer' : '';

    return (
        <div
            className={`${baseClasses} ${glassClasses} ${hoverClasses} ${clickClasses} ${className}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`p-6 border-t border-gray-100 ${className}`}>{children}</div>;
}
