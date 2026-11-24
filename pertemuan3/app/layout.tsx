import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 px-6 py-4 text-center text-sm text-slate-500">
          &copy; 2024 BacaKampus. All rights reserved.
        </footer>
      </body>
    </html>
  );
}