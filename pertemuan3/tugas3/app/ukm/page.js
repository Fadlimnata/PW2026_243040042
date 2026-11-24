// app/ukm/page.js
import FilterUkm from '@/components/FilterUkm';
import { daftarUkm, daftarKategori } from '@/data/ukm';

export default function DirektoriUkmPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Direktori UKM</h1>
      <p className="mt-1 mb-6 text-sm text-slate-600">
        Pilih kategori untuk menyaring UKM, lalu buka detailnya.
      </p>
      <FilterUkm daftarUkm={daftarUkm} daftarKategori={daftarKategori} />
    </div>
  );
}
