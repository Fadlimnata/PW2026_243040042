// app/tentang/page.js
import Link from 'next/link';

export default function TentangPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tentang Direktori UKM</h1>
        <p className="mt-2 text-slate-600">
          Direktori UKM Kampus adalah aplikasi web sederhana yang membantu
          mahasiswa baru mengenal Unit Kegiatan Mahasiswa yang ada, mulai dari
          bidang teknologi, seni, olahraga, sampai akademik. Aplikasi ini
          dibuat dengan Next.js 16 menggunakan App Router sebagai tugas
          terstruktur Praktikum Web Modul 3.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Tujuan</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
            <li>Memudahkan mahasiswa mencari UKM</li>
            <li>Menampilkan jadwal dan lokasi kegiatan</li>
            <li>Memberi info status pendaftaran</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Teknologi</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
            <li>Next.js 16 (App Router)</li>
            <li>React 19</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>

      <Link
        href="/ukm"
        className="inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Jelajahi Direktori UKM
      </Link>
    </div>
  );
}
