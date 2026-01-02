'use client';

import React, { ReactNode } from 'react';
import { AlertCircle, AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

interface AlertProps {
    type?: 'info' | 'warning' | 'critical' | 'success';
    title?: string;
    children: ReactNode;
    onClose?: () => void;
    className?: string;
}

export default function Alert({ type = 'info', title, children, onClose, className = '' }: AlertProps) {
    const icons = {
        info: <Info className="w-5 h-5" />,
        warning: <AlertTriangle className="w-5 h-5" />,
        critical: <AlertCircle className="w-5 h-5" />,
        success: <CheckCircle className="w-5 h-5" />,
    };

    const styles = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-gold-50 border-gold-400 text-gold-800',
        critical: 'bg-red-50 border-red-300 text-red-800',
        success: 'bg-green-50 border-green-200 text-green-800',
    };

    return (
        <div className={`border-l-4 p-4 rounded-lg animate-fade-in ${styles[type]} ${className}`}>
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
                <div className="flex-1">
                    {title && <h4 className="font-semibold mb-1">{title}</h4>}
                    <div className="text-sm">{children}</div>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="flex-shrink-0 hover:opacity-70 transition-opacity"
                        aria-label="Close alert"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
