import type { Business } from './types';

export const sejukTeknikAc = {
  slug: 'sejuk-teknik-ac',
  name: 'Sejuk Teknik AC',
  category: 'service-ac',
  categoryLabel: 'Service AC',
  tagline: 'Teknisi AC profesional untuk rumah, kantor, dan ruko.',
  shortDescription:
    'Demo landing page service AC untuk cuci AC, isi freon, service bocor, dan bongkar pasang.',
  phone: '0814-5678-9012',
  whatsappNumber: '6281456789012',
  logoText: 'STA',
  logo: {
    src: '/images/logos/sejuk-teknik-ac.svg',
    alt: 'Logo Sejuk Teknik AC',
  },
  theme: {
    name: 'Technical Navy',
    mood: ['Profesional', 'Teknis', 'Navy', 'Biru', 'Putih'],
    colors: {
      primary: '#1d4ed8',
      secondary: '#0f172a',
      accent: '#38bdf8',
      background: '#eff6ff',
      surface: '#ffffff',
      text: '#0f172a',
      muted: '#64748b',
    },
  },
  navItems: [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Harga', href: '#harga' },
    { label: 'Garansi', href: '#keunggulan' },
    { label: 'FAQ', href: '#faq' },
  ],
  profile: {
    headline: 'Layanan teknisi AC yang jelas, rapi, dan bergaransi.',
    description:
      'Sejuk Teknik AC membantu pelanggan menangani AC kurang dingin, bocor, kotor, atau perlu dipasang ulang dengan jadwal booking yang mudah.',
    businessTypes: ['Service AC', 'Cuci AC', 'Isi freon', 'Bongkar pasang AC', 'Service bocor'],
  },
  hero: {
    eyebrow: 'Booking teknisi AC terpercaya',
    title: 'AC kurang dingin, bocor, atau berisik? Teknisi siap datang.',
    subtitle:
      'Konsultasikan keluhan AC, pilih jadwal kunjungan, lalu teknisi melakukan pengecekan dan pengerjaan sesuai kebutuhan unit.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Teknisi sedang memperbaiki unit AC',
    primaryCta: {
      label: 'Booking Teknisi via WhatsApp',
      type: 'whatsapp',
      messageTopic: 'booking teknisi AC',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'Konsultasi Keluhan AC',
      type: 'whatsapp',
      messageTopic: 'konsultasi keluhan AC',
      variant: 'secondary',
    },
    highlights: ['Teknisi datang', 'Garansi service', 'Booking cepat'],
  },
  problems: [
    {
      title: 'AC tidak lagi dingin',
      description:
        'Unit AC bisa menurun performanya karena filter kotor, freon kurang, atau komponen bermasalah.',
    },
    {
      title: 'Air menetes dari indoor',
      description:
        'Saluran pembuangan yang mampet atau instalasi kurang tepat sering membuat AC bocor.',
    },
    {
      title: 'Butuh teknisi yang jelas',
      description:
        'Pelanggan perlu estimasi biaya, jadwal kunjungan, dan pengerjaan yang bisa dijelaskan dengan mudah.',
    },
  ],
  solutions: [
    {
      title: 'Pengecekan awal',
      description:
        'Teknisi memeriksa kondisi unit dan menjelaskan penyebab masalah sebelum pengerjaan.',
    },
    {
      title: 'Layanan sesuai keluhan',
      description:
        'Pengerjaan dapat berupa cuci AC, isi freon, service bocor, atau bongkar pasang.',
    },
    {
      title: 'Garansi service',
      description:
        'Pelanggan mendapat garansi pengerjaan sesuai jenis layanan yang dipilih.',
    },
  ],
  services: [
    {
      title: 'Cuci AC',
      description: 'Pembersihan unit indoor dan outdoor untuk menjaga performa dingin.',
      price: 'Mulai Rp75.000/unit',
      badge: 'Rutin',
      includes: ['Bersihkan filter', 'Cuci evaporator', 'Cek pembuangan air'],
    },
    {
      title: 'Isi Freon',
      description: 'Pengecekan tekanan dan pengisian freon sesuai kebutuhan unit.',
      price: 'Mulai Rp150.000',
      includes: ['Cek tekanan', 'Tambah freon', 'Tes suhu'],
    },
    {
      title: 'Service Bocor',
      description: 'Pengecekan penyebab air menetes dan perbaikan saluran pembuangan.',
      price: 'Mulai Rp100.000',
      includes: ['Cek drain', 'Bersihkan jalur pembuangan', 'Tes aliran air'],
    },
    {
      title: 'Bongkar Pasang AC',
      description: 'Pindah unit AC untuk rumah, kantor, atau ruko.',
      price: 'Mulai Rp350.000',
      includes: ['Bongkar unit', 'Pasang ulang', 'Vakum dan tes'],
    },
    {
      title: 'Pengecekan AC',
      description: 'Diagnosis awal untuk AC mati, berisik, atau tidak dingin.',
      price: 'Mulai Rp50.000',
      includes: ['Cek indoor', 'Cek outdoor', 'Rekomendasi tindakan'],
    },
    {
      title: 'Kontrak Maintenance',
      description: 'Perawatan berkala untuk kantor, toko, atau properti sewa.',
      price: 'By request',
      includes: ['Jadwal berkala', 'Laporan service', 'Prioritas teknisi'],
    },
  ],
  pricing: [
    {
      name: 'Cuci AC Reguler',
      price: 'Rp75.000',
      unit: 'per unit',
      description: 'Perawatan berkala untuk AC rumah dan kamar.',
      features: ['Indoor dan outdoor', 'Cek filter', 'Cek pembuangan', 'Tes suhu akhir'],
      ctaLabel: 'Booking Cuci AC',
    },
    {
      name: 'Service Lengkap',
      price: 'Mulai Rp150.000',
      description: 'Untuk AC kurang dingin, bocor, atau perlu pengecekan teknis.',
      features: ['Diagnosis keluhan', 'Cek tekanan', 'Rekomendasi sparepart', 'Garansi service'],
      ctaLabel: 'Booking Service',
      highlighted: true,
    },
    {
      name: 'Maintenance Kantor',
      price: 'Custom',
      description: 'Perawatan berkala untuk beberapa unit AC di kantor atau ruko.',
      features: ['Jadwal rutin', 'Laporan pengerjaan', 'Prioritas teknisi', 'Harga paket'],
      ctaLabel: 'Konsultasi Maintenance',
    },
  ],
  features: [
    {
      title: 'Teknisi berpengalaman',
      description: 'Pengerjaan dilakukan oleh teknisi yang terbiasa menangani berbagai tipe AC.',
    },
    {
      title: 'Estimasi jelas',
      description: 'Pelanggan mendapat penjelasan biaya sebelum pekerjaan tambahan dilakukan.',
    },
    {
      title: 'Garansi service',
      description: 'Beberapa layanan memiliki garansi pengerjaan sesuai ketentuan.',
    },
    {
      title: 'Area teknisi luas',
      description: 'Booking tersedia untuk rumah, kantor, ruko, dan properti sewa di area layanan.',
    },
    {
      title: 'Booking mudah',
      description: 'Cukup kirim keluhan, tipe AC, alamat, dan jadwal yang diinginkan.',
    },
  ],
  gallery: [
    {
      title: 'Cuci Unit Indoor',
      description: 'Pembersihan unit indoor agar aliran udara kembali optimal.',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',
      alt: 'Teknisi membersihkan unit AC indoor',
    },
    {
      title: 'Pengecekan Outdoor',
      description: 'Teknisi melakukan pengecekan bagian outdoor.',
      image:
        'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=900&q=80',
      alt: 'Pengecekan komponen outdoor AC',
    },
    {
      title: 'Peralatan Service',
      description: 'Peralatan teknis untuk service dan pengisian freon.',
      image:
        'https://images.unsplash.com/photo-1581092787765-e3feb951d987?auto=format&fit=crop&w=900&q=80',
      alt: 'Peralatan teknisi untuk service AC',
    },
    {
      title: 'Maintenance Berkala',
      description: 'Perawatan rutin untuk menjaga performa AC.',
      image:
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
      alt: 'Teknisi bekerja dengan peralatan service',
    },
  ],
  testimonials: [
    {
      name: 'Pak Yoga',
      role: 'Pemilik rumah',
      quote: 'AC kamar kembali dingin setelah dicuci. Teknisi juga menjelaskan penyebabnya.',
      rating: 5,
    },
    {
      name: 'Ibu Renata',
      role: 'Pelanggan service bocor',
      quote: 'Air indoor sudah tidak menetes lagi. Booking via WhatsApp juga cepat dibalas.',
      rating: 5,
    },
    {
      name: 'Hendra',
      role: 'Pengelola ruko',
      quote: 'Maintenance beberapa unit bisa dijadwalkan rapi dan ada catatan pengerjaan.',
      rating: 5,
    },
  ],
  orderSteps: [
    {
      step: '01',
      title: 'Kirim keluhan AC',
      description: 'Sampaikan tipe AC, gejala masalah, jumlah unit, dan alamat lokasi.',
    },
    {
      step: '02',
      title: 'Pilih jadwal teknisi',
      description: 'Tim mengatur jadwal kunjungan sesuai area dan ketersediaan teknisi.',
    },
    {
      step: '03',
      title: 'Teknisi melakukan pengecekan',
      description: 'Unit diperiksa terlebih dahulu sebelum pengerjaan utama dilakukan.',
    },
    {
      step: '04',
      title: 'Service dan garansi',
      description: 'Pengerjaan diselesaikan, lalu pelanggan mendapat catatan dan garansi layanan.',
    },
  ],
  faqs: [
    {
      question: 'Kapan AC sebaiknya dicuci?',
      answer: 'Untuk penggunaan normal, cuci AC disarankan setiap 3 sampai 4 bulan sekali.',
    },
    {
      question: 'Apakah bisa isi freon di tempat?',
      answer: 'Bisa setelah teknisi mengecek tekanan dan memastikan kebutuhan unit.',
    },
    {
      question: 'Apakah ada garansi service?',
      answer: 'Ada garansi untuk jenis pengerjaan tertentu sesuai hasil pengecekan teknisi.',
    },
    {
      question: 'Apakah melayani bongkar pasang AC?',
      answer: 'Ya, tersedia bongkar pasang AC untuk pindah unit rumah, kantor, atau ruko.',
    },
    {
      question: 'Apakah melayani area luar kota?',
      answer: 'Area luar kota bisa dikonsultasikan lebih dulu karena tergantung jarak dan jadwal.',
    },
  ],
  location: {
    address: 'Jl. Veteran Selatan No. 8, Makassar',
    areaServed: ['Makassar Kota', 'Panakkukang', 'Tamalanrea', 'Gowa', 'Maros'],
    mapQuery: 'Jl. Veteran Selatan, Makassar, Sulawesi Selatan',
    hours: 'Senin - Minggu, 08.00 - 21.00 WITA',
    notes: 'Area layanan dapat disesuaikan berdasarkan alamat pelanggan dan jadwal teknisi.',
  },
  finalCta: {
    title: 'Jadwalkan teknisi sebelum AC makin bermasalah.',
    description:
      'Kirim keluhan AC lewat WhatsApp dan dapatkan rekomendasi tindakan yang sesuai.',
    primaryCta: {
      label: 'Booking Teknisi via WhatsApp',
      type: 'whatsapp',
      messageTopic: 'booking teknisi AC',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'Konsultasi Keluhan AC',
      type: 'whatsapp',
      messageTopic: 'konsultasi keluhan AC',
      variant: 'secondary',
    },
  },
  seo: {
    title: 'Sejuk Teknik AC - Service AC, Cuci AC, dan Isi Freon',
    description:
      'Demo landing page service AC untuk cuci AC, isi freon, service bocor, bongkar pasang AC, dan maintenance berkala.',
    keywords: ['service AC', 'cuci AC', 'isi freon', 'bongkar pasang AC', 'teknisi AC makassar'],
  },
} satisfies Business;
