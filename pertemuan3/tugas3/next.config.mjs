import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Project ini berada di dalam folder pertemuan3 yang sudah punya project lain.
  // Baris ini memastikan Turbopack memakai folder tugas3 sebagai root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
