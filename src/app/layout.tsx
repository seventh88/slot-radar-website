import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// 提取公共的 SEO 信息
const defaultTitle =
    'US Visa Radar - Real-time Alert System for US B1/B2 Visa Applicants';
const defaultDescription =
    'US Visa Radar is a real-time alert system that continuously monitors official appointment systems across multiple countries. Receive instant notifications via Telegram, WhatsApp, or Discord so help you to book a slot.';
const defaultImageUrl = 'https://visaradar.cc/hero-whero-illustration.png';

/**
 * 在这里定义 SEO 相关信息
 * 注意：根据你自己的网站信息来定制
 */
export const metadata: Metadata = {
    title: defaultTitle,
    description: defaultDescription,
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
    },
    keywords: [
        'US Visa Radar',
        'US Visa',
        'Visa Slot',
        'B1/B2 Visa',
        'Visa Appointments',
        'Real-time Alerts',
    ],
    openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        url: 'https://visaradar.cc', // 替换为你自己的网站 URL
        siteName: 'US Visa Radar',
        images: [
            {
                url: defaultImageUrl, // 替换为你自己托管的封面图地址
                width: 1200,
                height: 630,
                alt: 'US Visa Radar illustration',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: defaultTitle,
        description: defaultDescription,
        images: [defaultImageUrl],
        // creator: '@us_visa_radar', // 如果有官方推特账号，可填写
    },
};

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
