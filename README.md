# Local Business Landing Pages

## Deskripsi Project

Local Business Landing Pages adalah project Astro berisi kumpulan dummy landing page untuk berbagai bisnis UMKM seperti catering, laundry, dan service AC. Project ini dibuat sebagai portfolio untuk menunjukkan kemampuan membangun website bisnis lokal yang responsive, ringan, SEO-friendly, dan berbasis komponen reusable.

Project ini bukan website jasa pribadi, bukan marketplace, dan bukan aplikasi transaksi. Fokus utamanya adalah menampilkan contoh landing page bisnis lokal yang bisa dikembangkan menjadi banyak niche UMKM.

## Tujuan Project

Tujuan utama project ini adalah membuat satu codebase Astro yang bisa menampilkan beberapa demo website UMKM secara rapi dan scalable.

Project ini menunjukkan beberapa kemampuan penting dalam pengembangan frontend:

- Membuat landing page bisnis lokal yang modern dan responsive.
- Menggunakan dynamic route Astro untuk membuat banyak halaman dari data.
- Memisahkan konten bisnis ke file TypeScript agar mudah dikelola.
- Membuat komponen reusable untuk section umum landing page.
- Menambahkan CTA WhatsApp, SEO dasar, Open Graph meta tag, navbar mobile, dan FAQ accordion.
- Menyiapkan struktur project yang mudah dipahami pemula dan tetap layak dipajang di portfolio.

## Demo Website

Route yang tersedia:

```txt
/                         -> Homepage etalase demo
/demo/dapur-bu-rani        -> Demo landing page catering
/demo/freshklin-laundry    -> Demo landing page laundry
/demo/sejuk-teknik-ac      -> Demo landing page service AC
```

Daftar demo:

| Demo | Jenis Bisnis | Route |
| --- | --- | --- |
| Dapur Bu Rani | Catering, nasi box, snack box, tumpeng mini | `/demo/dapur-bu-rani` |
| FreshKlin Laundry | Laundry kiloan, express, setrika, bed cover, cuci sepatu | `/demo/freshklin-laundry` |
| Sejuk Teknik AC | Service AC, cuci AC, isi freon, bongkar pasang AC | `/demo/sejuk-teknik-ac` |

## Fitur Utama

- Homepage etalase demo.
- Dynamic route Astro dengan `/demo/[slug]`.
- Data bisnis dari file TypeScript.
- Reusable components untuk layout, navbar, footer, button, dan section.
- Responsive design untuk mobile, tablet, dan desktop.
- CTA WhatsApp pada hero, pricing, final CTA, dan floating button.
- SEO dasar dengan title dan meta description.
- Open Graph meta tag dan Twitter Card.
- Navbar mobile dengan toggle sederhana.
- FAQ accordion menggunakan vanilla JavaScript.
- Floating WhatsApp button.
- Fallback image placeholder agar tampilan tetap rapi jika gambar gagal dimuat.
- Static Site Generation sehingga ringan dan cocok untuk deploy ke hosting modern.

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- Static Site Generation
- Reusable Component
- Data-driven Rendering

## Struktur Folder

Struktur utama project:

```txt
src/
|-- components/
|   |-- common/
|   |   |-- Button.astro
|   |   |-- Container.astro
|   |   |-- FloatingWhatsApp.astro
|   |   |-- Footer.astro
|   |   |-- Navbar.astro
|   |   `-- SectionHeader.astro
|   |
|   `-- sections/
|       |-- FAQSection.astro
|       |-- FeatureSection.astro
|       |-- FinalCTASection.astro
|       |-- GallerySection.astro
|       |-- HeroSection.astro
|       |-- LocationSection.astro
|       |-- OrderStepsSection.astro
|       |-- PricingSection.astro
|       |-- ProblemSection.astro
|       |-- ServiceSection.astro
|       `-- TestimonialSection.astro
|
|-- data/
|   |-- businesses/
|   |   |-- dapur-bu-rani.ts
|   |   |-- freshklin-laundry.ts
|   |   |-- sejuk-teknik-ac.ts
|   |   `-- types.ts
|   `-- demo-list.ts
|
|-- layouts/
|   `-- MainLayout.astro
|
|-- pages/
|   |-- index.astro
|   `-- demo/
|       `-- [slug].astro
|
|-- styles/
|   `-- global.css
|
`-- utils/
    |-- formatWhatsApp.ts
    `-- getBusinessBySlug.ts
```

## Cara Menjalankan Project

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka di browser:

```txt
http://localhost:4321/
```

Jika di Windows PowerShell perintah `npm` bermasalah, gunakan:

```bash
npm.cmd install
npm.cmd run dev
```

## Cara Build

Build project untuk production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

Jika di Windows PowerShell bermasalah, gunakan:

```bash
npm.cmd run build
npm.cmd run preview
```

## Data Dummy

Semua konten bisnis pada project ini adalah data dummy untuk kebutuhan portfolio.

Data bisnis disimpan di folder:

```txt
src/data/businesses/
```

File utama daftar demo:

```txt
src/data/demo-list.ts
```

Dengan pendekatan ini, halaman demo baru bisa ditambahkan dengan membuat file data bisnis baru, lalu mendaftarkannya ke `demo-list.ts`.

Contoh jenis data yang tersedia:

- Profil bisnis.
- Hero section.
- Problem pelanggan.
- Layanan.
- Paket harga.
- Keunggulan.
- Galeri.
- Testimoni.
- Cara order.
- FAQ.
- Lokasi dan area layanan.
- Final CTA.
- SEO title dan description.

## Screenshot / Preview

Preview yang disarankan untuk portfolio:

```txt
Homepage:
http://localhost:4321/

Demo Catering:
http://localhost:4321/demo/dapur-bu-rani

Demo Laundry:
http://localhost:4321/demo/freshklin-laundry

Demo Service AC:
http://localhost:4321/demo/sejuk-teknik-ac
```

Screenshot dapat ditambahkan nanti ke folder `public/` atau langsung ke dokumentasi GitHub setelah project dideploy.

## Catatan

- Project ini adalah dummy portfolio, bukan bisnis asli.
- Nomor WhatsApp, alamat, testimoni, harga, dan data layanan adalah data contoh.
- Project tidak menggunakan database, login, admin panel, payment gateway, atau CMS.
- Gambar menggunakan URL eksternal dan sudah disiapkan fallback visual agar layout tetap rapi jika gambar gagal dimuat.
- Cocok dideploy sebagai static website ke Vercel atau Netlify.

## Rencana Pengembangan

Beberapa pengembangan yang bisa dilakukan berikutnya:

- Menambahkan demo baru untuk barbershop, toko kue, bengkel motor, klinik kecantikan, florist, dan bisnis lokal lainnya.
- Menambahkan screenshot preview untuk setiap demo.
- Menambahkan filter kategori interaktif di homepage.
- Menambahkan animasi ringan untuk transisi section.
- Menambahkan mode data yang lebih modular jika jumlah demo semakin banyak.
- Menambahkan halaman studi kasus singkat untuk menjelaskan proses desain dan development.

## Checklist Sebelum Deploy

Gunakan checklist berikut sebelum publish:

```txt
[ ] npm run build berhasil
[ ] npm run preview berhasil
[ ] Semua link demo bisa dibuka
[ ] Tampilan mobile aman
[ ] CTA WhatsApp aman
[ ] SEO title dan description aman
[ ] Open Graph meta tag aman
[ ] README sudah lengkap
[ ] Repository GitHub sudah rapi
[ ] Deploy ke Vercel atau Netlify
```

## Rekomendasi Deploy

Project ini dapat dideploy ke platform static hosting seperti Vercel atau Netlify.

### Vercel

Cocok jika ingin deploy cepat dari GitHub.

Pengaturan umum:

```txt
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Netlify

Cocok untuk static site dan preview deploy.

Pengaturan umum:

```txt
Build Command: npm run build
Publish Directory: dist
```

Keduanya cocok untuk project ini karena Astro menghasilkan static output di folder `dist`.
