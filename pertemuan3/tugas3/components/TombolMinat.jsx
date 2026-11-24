// components/TombolMinat.jsx
'use client';

import { useState } from 'react';

export default function TombolMinat({ namaUkm, jumlahAwal }) {
  const [berminat, setBerminat] = useState(false);
  const [jumlah, setJumlah] = useState(jumlahAwal);

  function handleKlik() {
    if (berminat) {
      setBerminat(false);
      setJumlah((prev) => prev - 1);
    } else {
      setBerminat(true);
      setJumlah((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={handleKlik}
        className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
          berminat
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
        }`}
      >
        {berminat ? '✓ Kamu Berminat' : '+ Saya Berminat'}
      </button>
      <span className="text-sm text-slate-600">
        {jumlah} mahasiswa berminat bergabung di <strong>{namaUkm}</strong>
      </span>
    </div>
  );
}
