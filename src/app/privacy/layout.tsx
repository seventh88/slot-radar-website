import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - AIS Auto Rescheduler Extension | US Visa Radar',
    description:
        'Privacy Policy for VisaRadar.cc: AIS Auto Rescheduler Extension. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
