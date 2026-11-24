// app/layout.js
import { Geist } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Direktori UKM Kampus',
  description: 'Direktori Unit Kegiatan Mahasiswa (UKM) menggunakan Next.js 16 dan App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${geistSans.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-5 text-center text-sm text-slate-500">
          Direktori UKM Kampus &copy; 2026 &mdash; Tugas 3 Praktikum Web
          <br />
          Fadli Muhammad R &middot; Kelas F &middot; NPM 243040042
        </footer>
      </body>
    </html>
  );
}
