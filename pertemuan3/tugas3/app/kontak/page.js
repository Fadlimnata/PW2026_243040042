// app/kontak/page.js
import Link from 'next/link';

export default function KontakPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Kontak</h1>
        <p className="mt-2 text-slate-600">
          Hubungi bagian kemahasiswaan jika kamu ingin bertanya tentang UKM
          atau mendaftarkan UKM baru ke direktori ini.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Jam Layanan</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Senin - Jumat: 08.00 - 16.00 WIB</li>
            <li>Sabtu: 09.00 - 12.00 WIB</li>
            <li>Minggu &amp; Hari Libur: Tutup</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Sekretariat Bersama</h2>
          <p className="mt-2 text-sm text-slate-600">
            Gedung Student Center Lantai 1, Jl. Dr. Setiabudi No.193, Bandung.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Email: kemahasiswaan@kampus.ac.id
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block text-sm font-medium text-indigo-700 hover:underline"
      >
        &larr; Kembali ke Beranda
      </Link>
    </div>
  );
}
