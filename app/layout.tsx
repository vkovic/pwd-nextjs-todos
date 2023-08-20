import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Title of the app',
  description: 'Some cool description goes here'
};

export default function RootLayout(
  {children}: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    <body
      className={`${inter.className} bg-slate-500 text-slate-100 container mx-auto p-4`}>{children}</body>
    </html>
  );
}
