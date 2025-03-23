import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="US Visa Radar - Real-time B1/B2 US visa appointment alerts for Canada, UK, and UAE." />
      </Head>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        {children}
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', color: '#666' }}>
        © 2025 US Visa Radar
      </footer>
    </>
  );
}
