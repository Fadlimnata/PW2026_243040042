// app/page.js
import Link from 'next/link';
import { daftarUkm } from '@/data/ukm';

export default function HomePage() {
  const ukmPilihan = daftarUkm.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-indigo-700 p-8 text-white shadow-sm">
        <span className="inline-block rounded-full bg-indigo-800 px-3 py-1 text-xs font-medium text-indigo-100">
          Unit Kegiatan Mahasiswa
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight">
          Temukan UKM Sesuai Minatmu
        </h1>
        <p className="mt-3 max-w-xl text-indigo-100">
          Jelajahi daftar UKM di kampus, lihat jadwal latihan, lokasi
          sekretariat, dan status pendaftarannya sebelum kamu bergabung.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/ukm"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Lihat Direktori UKM
          </Link>
          <Link
            href="/tentang"
            className="rounded-lg border border-indigo-300 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800"
          >
            Tentang Direktori
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">UKM Pilihan</h2>
          <Link href="/ukm" className="text-sm font-medium text-indigo-700 hover:underline">
            Semua UKM &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {ukmPilihan.map((ukm) => (
            <Link
              key={ukm.id}
              href={`/ukm/${ukm.id}`}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-2xl">
                {ukm.ikon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{ukm.nama}</h3>
              <p className="mt-1 text-xs text-slate-500">{ukm.anggota} anggota</p>
              <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                {ukm.kategori}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
