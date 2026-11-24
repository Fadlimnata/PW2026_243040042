import { bukuList } from "../data/Buku";

export default function BukuPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Katalog Buku</h1>
      <p className="mt-2 text-slate-600">
        Daftar buku yang tersedia di BacaKampus.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bukuList.map((buku) => (
          <article
            key={buku.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold text-sky-700">{buku.genre}</p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">{buku.judul}</h2>
            <dl className="mt-4 space-y-1 text-sm text-slate-600">
              <div>
                <dt className="inline font-medium">Penulis:</dt>{" "}
                <dd className="inline">{buku.penulis}</dd>
              </div>
              <div>
                <dt className="inline font-medium">Penerbit:</dt>{" "}
                <dd className="inline">{buku.penerbit}</dd>
              </div>
              <div>
                <dt className="inline font-medium">Tahun:</dt>{" "}
                <dd className="inline">{buku.tahunTerbit}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}