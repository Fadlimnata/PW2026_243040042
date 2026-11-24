// app/ukm/[id]/page.js
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { daftarUkm } from '@/data/ukm';
import TombolMinat from '@/components/TombolMinat';

export function generateStaticParams() {
  return daftarUkm.map((ukm) => ({ id: ukm.id }));
}

export default async function DetailUkmPage({ params }) {
  const { id } = await params;
  const ukm = daftarUkm.find((item) => item.id === id);

  if (!ukm) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/ukm"
        className="inline-block text-sm font-medium text-indigo-700 hover:underline"
      >
        &larr; Kembali ke Direktori UKM
      </Link>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-50 text-4xl">
            {ukm.ikon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                {ukm.kategori}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  ukm.status === 'Buka Pendaftaran'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {ukm.status}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">{ukm.nama}</h1>
            <p className="mt-1 text-sm text-slate-500">{ukm.anggota} anggota aktif</p>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-slate-700">{ukm.ringkasan}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
            <strong className="text-slate-800">Jadwal:</strong> {ukm.jadwal}
          </div>
          <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
            <strong className="text-slate-800">Lokasi:</strong> {ukm.lokasi}
          </div>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold text-slate-900">Kegiatan Utama</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
            {ukm.kegiatan.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-6">
          <TombolMinat namaUkm={ukm.nama} jumlahAwal={Math.round(ukm.anggota / 5)} />
        </div>
      </article>
    </div>
  );
}
