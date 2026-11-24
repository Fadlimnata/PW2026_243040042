
import Link from "next/link";
import { notFound } from "next/navigation";
import { bukuList } from "@/app/data/Buku";
import TombolSimpan from "@/app/components/TombolSimpan";

interface DetailBukuPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return bukuList.map((buku) => ({
    id: buku.id.toString(),
  }));
}

export default async function DetailBukuPage({
  params,
}: DetailBukuPageProps) {
  const { id } = await params;

  const buku = bukuList.find(
    (item) => item.id.toString() === id
  );

  if (!buku) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/buku"
        className="inline-block text-sm font-semibold text-slate-600 transition hover:text-slate-900"
      >
        ← Kembali ke Katalog
      </Link>

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm font-semibold text-sky-700">
            {buku.genre}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {buku.judul}
          </h1>

          <p className="mt-2 text-slate-600">
            oleh {buku.penulis} ({buku.tahunTerbit})
          </p>
        </div>

        <dl className="mt-6 grid gap-4 rounded-xl bg-slate-50 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Genre
            </dt>
            <dd className="mt-1 font-medium text-slate-900">
              {buku.genre}
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Penerbit
            </dt>
            <dd className="mt-1 font-medium text-slate-900">
              {buku.penerbit}
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Penulis
            </dt>
            <dd className="mt-1 font-medium text-slate-900">
              {buku.penulis}
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Tahun Terbit
            </dt>
            <dd className="mt-1 font-medium text-slate-900">
              {buku.tahunTerbit}
            </dd>
          </div>
        </dl>

        <div className="mt-6 border-t border-slate-100 pt-6">
          <TombolSimpan judulBuku={buku.judul} />
        </div>
      </article>
    </section>
  );
}
