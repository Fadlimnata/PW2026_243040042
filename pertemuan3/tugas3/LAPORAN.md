# Laporan Tugas Terstruktur — Praktikum Web Modul 3

**Nama** : Fadli Muhammad R
**Kelas** : F
**NPM** : 243040042
**Judul Proyek** : Direktori UKM Kampus (Next.js 16 + App Router)

## 1. Deskripsi Singkat
Aplikasi ini adalah direktori Unit Kegiatan Mahasiswa (UKM) kampus. Pengguna bisa melihat daftar UKM, menyaring berdasarkan kategori, membuka detail tiap UKM (jadwal, lokasi, kegiatan), dan menandai minat bergabung. Data disimpan lokal di `data/ukm.js`.

## 2. Struktur Folder
```
tugas3/
├── app/
│   ├── layout.js            -> Root Layout (Navbar + footer)
│   ├── page.js              -> Beranda (/)
│   ├── globals.css
│   ├── not-found.js         -> Halaman 404 custom
│   ├── tentang/page.js      -> Halaman statis (/tentang)
│   ├── kontak/page.js       -> Halaman statis (/kontak)
│   └── ukm/
│       ├── layout.js        -> Nested Layout (banner info pendaftaran)
│       ├── page.js          -> Direktori UKM (/ukm)
│       └── [id]/page.js     -> Dynamic Route (/ukm/robotik, dst.)
├── components/
│   ├── Navbar.jsx           -> 'use client' (usePathname)
│   ├── FilterUkm.jsx        -> 'use client' (useState filter)
│   └── TombolMinat.jsx      -> 'use client' (useState + onClick)
└── data/ukm.js
```

## 3. Pemenuhan Syarat Tugas
| Syarat | Implementasi |
|---|---|
| Root Layout | `app/layout.js` memuat Navbar dan footer sekali untuk semua halaman |
| Active Link (`usePathname`) | `components/Navbar.jsx` memberi warna berbeda pada menu yang sedang dibuka |
| Minimal 3 halaman statis | `/` (Beranda), `/tentang`, `/kontak` (ditambah `/ukm`) |
| 1 Nested Layout | `app/ukm/layout.js`, banner hanya tampil di `/ukm` dan `/ukm/[id]` |
| 1 Dynamic Route | `app/ukm/[id]/page.js` memakai `const { id } = await params` |
| `not-found.js` | `app/not-found.js`, dipanggil lewat `notFound()` jika id tidak ada |
| Client Component | `Navbar`, `FilterUkm`, dan `TombolMinat` memakai `'use client'` |

## 4. Penjelasan Server vs Client Component
Semua halaman (`page.js`) dan layout dibiarkan sebagai Server Component karena hanya menampilkan data. `'use client'` hanya dipasang pada tiga komponen yang butuh interaksi: Navbar (butuh `usePathname`), FilterUkm (butuh `useState` untuk kategori), dan TombolMinat (butuh `useState` dan `onClick`).

## 5. Screenshot Tiap Halaman
> Jalankan `npm run dev`, buka tiap alamat, lalu tempel screenshot di bawah ini.

**5.1 Beranda (`/`)**
[Tempel screenshot di sini]

**5.2 Direktori UKM (`/ukm`) beserta banner Nested Layout**
[Tempel screenshot di sini]

**5.3 Direktori UKM setelah filter kategori dipilih**
[Tempel screenshot di sini]

**5.4 Detail UKM (`/ukm/robotik`) beserta Tombol Minat**
[Tempel screenshot di sini]

**5.5 Tentang (`/tentang`)**
[Tempel screenshot di sini]

**5.6 Kontak (`/kontak`)**
[Tempel screenshot di sini]

**5.7 Halaman 404 (`/ukm/tidak-ada`)**
[Tempel screenshot di sini]

## 6. Kesimpulan
Dengan App Router, rute cukup dibuat lewat nama folder dan file `page.js`, layout bersama dipasang sekali di `layout.js`, dan detail data cukup satu file `[id]/page.js` untuk semua UKM. Pemisahan Server dan Client Component membuat `'use client'` hanya dipakai di bagian yang interaktif.
