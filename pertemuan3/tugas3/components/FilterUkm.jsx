// components/FilterUkm.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FilterUkm({ daftarUkm, daftarKategori }) {
  const [kategori, setKategori] = useState('Semua');

  const hasil =
    kategori === 'Semua'
      ? daftarUkm
      : daftarUkm.filter((ukm) => ukm.kategori === kategori);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setKategori(item)}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition ${
              kategori === item
                ? 'bg-indigo-600 text-white'
                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Menampilkan {hasil.length} UKM
        {kategori !== 'Semua' && ` kategori ${kategori}`}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hasil.map((ukm) => (
          <div
            key={ukm.id}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-2xl">
                  {ukm.ikon}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    ukm.status === 'Buka Pendaftaran'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {ukm.status}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">{ukm.nama}</h2>
              <p className="mt-0.5 text-xs text-slate-500">
                {ukm.kategori} &middot; {ukm.anggota} anggota
              </p>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{ukm.ringkasan}</p>
            </div>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <Link
                href={`/ukm/${ukm.id}`}
                className="inline-block rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
