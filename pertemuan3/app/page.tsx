import Link from "next/link";
import { bukuList } from "./data/Buku";

export default function Home() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sky-300">
          Perpustakaan Kampus
        </p>
        <h1 className="text-4xl font-bold">Temukan Buku Favoritmu</h1>
        <p className="mt-4 max-w-xl text-slate-300">
          Jelajahi koleksi buku untuk mendukung kegiatan belajar dan riset.
        </p>
        <Link
          href="/buku"
          className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-sky-100"
        >
          Lihat Katalog
        </Link>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Buku Unggulan</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {bukuList.map((buku) => (
          <article
            key={buku.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold text-sky-700">{buku.genre}</p>
            <h3 className="mt-2 font-bold text-slate-900">{buku.judul}</h3>
            <p className="mt-2 text-sm text-slate-600">{buku.penulis}</p>
          </article>
        ))}
      </div>
    </section>
  );
}