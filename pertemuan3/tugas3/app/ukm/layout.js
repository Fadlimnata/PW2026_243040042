// app/ukm/layout.js
// Nested Layout: hanya membungkus /ukm dan /ukm/[id]
export default function UkmLayout({ children }) {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-4">
        <p className="text-sm font-semibold text-indigo-900">
          Info Pendaftaran &mdash; Pendaftaran anggota UKM dibuka setiap awal
          semester dengan membawa KTM aktif.
        </p>
        <p className="mt-1 text-xs text-indigo-700">
          Banner ini berasal dari Nested Layout (app/ukm/layout.js), sehingga
          muncul di halaman direktori maupun halaman detail UKM.
        </p>
      </div>
      {children}
    </section>
  );
}
