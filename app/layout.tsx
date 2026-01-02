import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";

export const metadata: Metadata = {
    title: "LandGuard - แพลตฟอร์มบริหารจัดการที่ดินอัจฉริยะ",
    description: "เปลี่ยนกฎหมายที่ดินจากแบบเชิงรับเป็นเชิงป้องกัน ช่วยให้เจ้าของที่ดินบริหารจัดการความเสี่ยงทางกฎหมายได้อย่างมีประสิทธิภาพ",
    keywords: "ที่ดิน, กฎหมาย, LegalTech, การบริหารจัดการที่ดิน, ป้องกันข้อพิพาท",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th">
            <body className="pb-20 md:pb-0">
                {children}
                <BottomNav />
            </body>
        </html>
    );
}
