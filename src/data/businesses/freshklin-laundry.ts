import type { Business } from './types';

export const freshklinLaundry = {
  slug: 'freshklin-laundry',
  name: 'FreshKlin Laundry',
  category: 'laundry',
  categoryLabel: 'Laundry Modern',
  tagline: 'Laundry bersih, wangi, dan praktis dengan layanan antar jemput.',
  shortDescription:
    'Demo landing page laundry untuk kiloan, express, setrika, bed cover, dan cuci sepatu.',
  phone: '0813-4567-8901',
  whatsappNumber: '6281345678901',
  logoText: 'FK',
  logo: {
    src: '/images/logos/freshklin-laundry.svg',
    alt: 'Logo FreshKlin Laundry',
  },
  theme: {
    name: 'Clean Cyan',
    mood: ['Bersih', 'Modern', 'Biru', 'Putih', 'Cyan'],
    colors: {
      primary: '#0284c7',
      secondary: '#0f172a',
      accent: '#06b6d4',
      background: '#f0f9ff',
      surface: '#ffffff',
      text: '#0f172a',
      muted: '#64748b',
    },
  },
  navItems: [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Harga', href: '#harga' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'FAQ', href: '#faq' },
  ],
  profile: {
    headline: 'Laundry harian yang mudah dipesan dan siap dijemput.',
    description:
      'FreshKlin Laundry membantu pelanggan mencuci pakaian, bed cover, sepatu, dan setrika harian dengan proses yang rapi, bersih, dan mudah dipantau.',
    businessTypes: ['Laundry kiloan', 'Laundry express', 'Setrika', 'Bed cover', 'Cuci sepatu'],
  },
  hero: {
    eyebrow: 'Laundry bersih dengan antar jemput',
    title: 'Pakaian bersih dan wangi tanpa harus keluar rumah.',
    subtitle:
      'Jadwalkan penjemputan, pilih layanan laundry yang dibutuhkan, lalu pakaian diproses dengan standar kebersihan yang konsisten.',
    image:
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Pakaian bersih terlipat rapi setelah laundry',
    primaryCta: {
      label: 'Jemput Laundry Sekarang',
      type: 'whatsapp',
      messageTopic: 'menjadwalkan jemput laundry',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'Cek Harga Laundry',
      type: 'anchor',
      targetId: 'harga',
      variant: 'secondary',
    },
    highlights: ['Antar jemput', 'Express 1 hari', 'Paket langganan'],
  },
  problems: [
    {
      title: 'Cucian menumpuk di hari kerja',
      description:
        'Pelanggan sering tidak punya waktu mencuci, menjemur, dan menyetrika pakaian harian.',
    },
    {
      title: 'Butuh pakaian cepat dipakai',
      description:
        'Beberapa pakaian kerja atau seragam perlu selesai lebih cepat dari laundry biasa.',
    },
    {
      title: 'Item besar sulit dicuci sendiri',
      description:
        'Bed cover, selimut, sepatu, dan item tebal membutuhkan alat serta proses yang lebih tepat.',
    },
  ],
  solutions: [
    {
      title: 'Jemput dan antar',
      description:
        'Pelanggan cukup mengirim lokasi, lalu tim laundry menjadwalkan penjemputan.',
    },
    {
      title: 'Pilihan reguler dan express',
      description:
        'Layanan bisa disesuaikan dengan tingkat urgensi pakaian yang dibutuhkan.',
    },
    {
      title: 'Paket langganan',
      description:
        'Cocok untuk pelanggan kos, keluarga, dan pekerja yang rutin memakai laundry mingguan.',
    },
  ],
  services: [
    {
      title: 'Laundry Kiloan',
      description: 'Cuci dan kering untuk pakaian harian.',
      price: 'Mulai Rp8.000/kg',
      badge: 'Populer',
      includes: ['Cuci', 'Kering', 'Lipat rapi'],
    },
    {
      title: 'Laundry Express',
      description: 'Pakaian diproses lebih cepat untuk kebutuhan mendadak.',
      price: 'Mulai Rp15.000/kg',
      includes: ['Estimasi lebih cepat', 'Prioritas proses', 'Minimal berat berlaku'],
    },
    {
      title: 'Setrika Saja',
      description: 'Layanan setrika untuk pakaian yang sudah dicuci sendiri.',
      price: 'Mulai Rp6.000/kg',
      includes: ['Setrika rapi', 'Lipat', 'Pewangi'],
    },
    {
      title: 'Bed Cover',
      description: 'Cuci bed cover, selimut, dan sprei besar.',
      price: 'Mulai Rp25.000/item',
      includes: ['Cuci item besar', 'Pengeringan optimal', 'Packing bersih'],
    },
    {
      title: 'Cuci Sepatu',
      description: 'Pembersihan sepatu harian dengan treatment ringan.',
      price: 'Mulai Rp30.000/pasang',
      includes: ['Sikat upper', 'Bersihkan outsole', 'Deodorizer'],
    },
    {
      title: 'Paket Langganan',
      description: 'Paket laundry rutin untuk pelanggan mingguan atau bulanan.',
      price: 'By request',
      includes: ['Jadwal tetap', 'Harga paket', 'Prioritas pickup'],
    },
  ],
  pricing: [
    {
      name: 'Reguler',
      price: 'Rp8.000',
      unit: 'per kg',
      description: 'Untuk cucian harian yang tidak terlalu mendesak.',
      features: ['Cuci', 'Kering', 'Lipat', 'Estimasi 2-3 hari', 'Minimal 3 kg'],
      ctaLabel: 'Pilih Reguler',
    },
    {
      name: 'Express',
      price: 'Rp15.000',
      unit: 'per kg',
      description: 'Untuk pakaian yang perlu dipakai lebih cepat.',
      features: ['Cuci express', 'Kering', 'Lipat', 'Prioritas proses', 'Kuota harian terbatas'],
      ctaLabel: 'Pilih Express',
      highlighted: true,
    },
    {
      name: 'Langganan',
      price: 'Custom',
      description: 'Untuk pelanggan rutin mingguan atau bulanan.',
      features: ['Jadwal pickup', 'Harga paket', 'Catatan preferensi', 'Reminder WhatsApp'],
      ctaLabel: 'Tanya Paket Langganan',
    },
  ],
  features: [
    {
      title: 'Antar jemput praktis',
      description: 'Laundry bisa dijemput dan diantar sesuai area layanan yang tersedia.',
    },
    {
      title: 'Pakaian dipisah',
      description: 'Proses laundry mengutamakan pemisahan cucian per pelanggan.',
    },
    {
      title: 'Wangi tahan lama',
      description: 'Pewangi dipilih agar hasil laundry terasa segar saat diterima.',
    },
    {
      title: 'Layanan express',
      description: 'Tersedia opsi express untuk pakaian yang perlu selesai lebih cepat.',
    },
    {
      title: 'Item khusus',
      description: 'Bed cover dan sepatu bisa diproses dengan layanan khusus.',
    },
  ],
  gallery: [
    {
      title: 'Pakaian Terlipat',
      description: 'Hasil laundry kiloan yang bersih dan rapi.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
      alt: 'Pakaian hasil laundry terlipat rapi',
    },
    {
      title: 'Area Laundry',
      description: 'Proses laundry modern dengan alur kerja bersih.',
      image:
        'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&w=900&q=80',
      alt: 'Mesin laundry modern',
    },
    {
      title: 'Bed Cover',
      description: 'Cuci item besar seperti selimut dan bed cover.',
      image:
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',
      alt: 'Bed cover bersih di kamar',
    },
    {
      title: 'Cuci Sepatu',
      description: 'Treatment ringan untuk sepatu harian.',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      alt: 'Sepatu bersih setelah dicuci',
    },
  ],
  testimonials: [
    {
      name: 'Raka',
      role: 'Pelanggan kos',
      quote: 'Jemput laundry-nya membantu banget. Tinggal chat, cucian diambil sore.',
      rating: 5,
    },
    {
      name: 'Nadia',
      role: 'Pekerja kantor',
      quote: 'Pakaian kerja selesai rapi dan wanginya tidak berlebihan.',
      rating: 5,
    },
    {
      name: 'Bu Sinta',
      role: 'Pelanggan keluarga',
      quote: 'Bed cover jadi bersih lagi dan packing-nya rapi saat diantar.',
      rating: 5,
    },
  ],
  orderSteps: [
    {
      step: '01',
      title: 'Chat alamat pickup',
      description: 'Kirim lokasi, jenis layanan, dan perkiraan berat cucian lewat WhatsApp.',
    },
    {
      step: '02',
      title: 'Cucian dijemput',
      description: 'Tim FreshKlin menjadwalkan penjemputan sesuai area layanan.',
    },
    {
      step: '03',
      title: 'Laundry diproses',
      description: 'Cucian ditimbang, dicatat, lalu diproses sesuai layanan yang dipilih.',
    },
    {
      step: '04',
      title: 'Diantar kembali',
      description: 'Laundry yang selesai dikemas dan diantar kembali ke alamat pelanggan.',
    },
  ],
  faqs: [
    {
      question: 'Apakah ada layanan antar jemput?',
      answer: 'Ya, tersedia layanan antar jemput untuk area tertentu sesuai jadwal operasional.',
    },
    {
      question: 'Berapa minimal laundry kiloan?',
      answer: 'Minimal laundry kiloan adalah 3 kg untuk layanan antar jemput.',
    },
    {
      question: 'Apakah bisa express?',
      answer: 'Bisa, layanan express tersedia dengan kuota harian dan biaya berbeda.',
    },
    {
      question: 'Apakah menerima bed cover?',
      answer: 'Ya, bed cover, selimut, dan sprei besar bisa diproses sebagai item satuan.',
    },
    {
      question: 'Apakah menerima cuci sepatu?',
      answer: 'Ya, tersedia cuci sepatu harian dengan treatment ringan.',
    },
  ],
  location: {
    address: 'Jl. Cendrawasih No. 21, Makassar',
    areaServed: ['Panakkukang', 'Rappocini', 'Tamalanrea', 'Biringkanaya', 'Makassar Kota'],
    mapQuery: 'Jl. Cendrawasih No. 21, Makassar, Sulawesi Selatan',
    hours: 'Setiap hari, 08.00 - 20.00 WITA',
    notes: 'Area layanan dapat disesuaikan berdasarkan alamat pelanggan dan jadwal operasional.',
  },
  finalCta: {
    title: 'Cucian menumpuk? Jadwalkan pickup hari ini.',
    description:
      'Kirim alamat dan jenis layanan lewat WhatsApp, lalu tim FreshKlin membantu proses berikutnya.',
    primaryCta: {
      label: 'Jemput Laundry Sekarang',
      type: 'whatsapp',
      messageTopic: 'menjadwalkan jemput laundry',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'Cek Harga Laundry',
      type: 'anchor',
      targetId: 'harga',
      variant: 'secondary',
    },
  },
  seo: {
    title: 'FreshKlin Laundry - Laundry Kiloan dan Antar Jemput',
    description:
      'Demo landing page laundry modern untuk laundry kiloan, express, setrika, bed cover, cuci sepatu, dan antar jemput.',
    keywords: ['laundry kiloan', 'laundry express', 'antar jemput laundry', 'cuci sepatu', 'laundry makassar'],
  },
} satisfies Business;
