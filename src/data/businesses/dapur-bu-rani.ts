import type { Business } from './types';

export const dapurBuRani = {
  slug: 'dapur-bu-rani',
  name: 'Dapur Bu Rani',
  category: 'catering',
  categoryLabel: 'Catering Rumahan',
  tagline: 'Catering rumahan hangat untuk acara keluarga, kantor, dan komunitas.',
  shortDescription:
    'Demo landing page catering dengan paket nasi box, snack box, dan tumpeng mini.',
  phone: '0812-3456-7890',
  whatsappNumber: '6281234567890',
  logoText: 'DBR',
  logo: {
    src: '/images/logos/dapur-bu-rani.svg',
    alt: 'Logo Dapur Bu Rani',
  },
  theme: {
    name: 'Warm Homemade',
    mood: ['Hangat', 'Cream', 'Oranye', 'Coklat', 'Rumahan'],
    colors: {
      primary: '#ea580c',
      secondary: '#7c2d12',
      accent: '#f59e0b',
      background: '#fff7ed',
      surface: '#ffffff',
      text: '#1f2937',
      muted: '#6b7280',
    },
  },
  navItems: [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Paket', href: '#harga' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'FAQ', href: '#faq' },
  ],
  profile: {
    headline: 'Masakan rumahan yang rapi, enak, dan siap antar.',
    description:
      'Dapur Bu Rani membantu pelanggan menyiapkan konsumsi acara tanpa repot, mulai dari nasi box harian kantor, snack box rapat, sampai tumpeng mini untuk syukuran.',
    businessTypes: ['Catering', 'Nasi box', 'Snack box', 'Tumpeng mini'],
  },
  hero: {
    eyebrow: 'Catering rumahan siap antar',
    title: 'Nasi box dan snack box hangat untuk acara yang lebih praktis.',
    subtitle:
      'Pilih paket, atur jumlah pesanan, lalu tim Dapur Bu Rani menyiapkan menu rumahan yang bersih, rapi, dan sesuai kebutuhan acara.',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Paket nasi box catering dengan lauk rumahan',
    primaryCta: {
      label: 'Pesan Catering via WhatsApp',
      type: 'whatsapp',
      messageTopic: 'memesan catering',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'Lihat Menu Paket',
      type: 'anchor',
      targetId: 'harga',
      variant: 'secondary',
    },
    highlights: ['Mulai Rp25.000', 'Minimal 20 box', 'Custom menu'],
  },
  problems: [
    {
      title: 'Acara butuh konsumsi tepat waktu',
      description:
        'Pelanggan sering kesulitan menyiapkan makanan untuk tamu, rapat, atau acara keluarga dengan jadwal yang padat.',
    },
    {
      title: 'Menu harus cocok untuk banyak orang',
      description:
        'Pilihan lauk, porsi, dan rasa perlu aman untuk berbagai usia dan selera.',
    },
    {
      title: 'Pesanan harus rapi dan higienis',
      description:
        'Nasi box dan snack box perlu dikemas bersih agar mudah dibagikan saat acara berlangsung.',
    },
  ],
  solutions: [
    {
      title: 'Paket siap pilih',
      description:
        'Pelanggan bisa memilih paket nasi box, snack box, atau tumpeng mini sesuai jumlah tamu.',
    },
    {
      title: 'Menu bisa disesuaikan',
      description:
        'Lauk, tingkat pedas, dan komposisi menu dapat disesuaikan dengan kebutuhan acara.',
    },
    {
      title: 'Pengantaran terjadwal',
      description:
        'Pesanan disiapkan berdasarkan jam acara agar makanan datang dalam kondisi baik.',
    },
  ],
  services: [
    {
      title: 'Nasi Box Ayam',
      description: 'Nasi, ayam bumbu, sayur, sambal, kerupuk, dan buah.',
      price: 'Mulai Rp25.000',
      badge: 'Favorit',
      includes: ['Pilihan ayam goreng atau bakar', 'Kemasan box rapi', 'Bisa tambah telur'],
    },
    {
      title: 'Nasi Box Ikan',
      description: 'Paket nasi box dengan lauk ikan dan sayur rumahan.',
      price: 'Mulai Rp28.000',
      includes: ['Ikan goreng atau balado', 'Sayur harian', 'Sambal terpisah'],
    },
    {
      title: 'Snack Box Rapat',
      description: 'Kue basah, roti, dan air mineral untuk rapat atau seminar.',
      price: 'Mulai Rp15.000',
      includes: ['Isi 3 sampai 4 snack', 'Bisa pilih kue basah', 'Kemasan praktis'],
    },
    {
      title: 'Tumpeng Mini',
      description: 'Tumpeng personal untuk syukuran kecil atau bingkisan.',
      price: 'Mulai Rp35.000',
      includes: ['Nasi kuning', 'Lauk lengkap', 'Kemasan mika premium'],
    },
    {
      title: 'Paket Acara Keluarga',
      description: 'Menu prasmanan sederhana untuk arisan, pengajian, dan ulang tahun.',
      price: 'By request',
      includes: ['Menu custom', 'Porsi sesuai tamu', 'Konsultasi menu'],
    },
    {
      title: 'Custom Menu',
      description: 'Pesanan khusus untuk kebutuhan diet, acara kantor, atau menu tematik.',
      price: 'By request',
      includes: ['Diskusi menu', 'Estimasi budget', 'Penyesuaian bahan'],
    },
  ],
  pricing: [
    {
      name: 'Paket Hemat',
      price: 'Rp25.000',
      unit: 'per box',
      description: 'Cocok untuk konsumsi rapat dan acara kecil.',
      features: ['Nasi putih', 'Ayam goreng', 'Sayur', 'Sambal', 'Minimal 20 box'],
      ctaLabel: 'Pesan Paket Hemat',
    },
    {
      name: 'Paket Favorit',
      price: 'Rp32.000',
      unit: 'per box',
      description: 'Paket lengkap dengan lauk lebih variatif.',
      features: ['Nasi putih atau kuning', 'Ayam atau ikan', 'Telur', 'Sayur', 'Buah'],
      ctaLabel: 'Pesan Paket Favorit',
      highlighted: true,
    },
    {
      name: 'Paket Acara',
      price: 'Custom',
      description: 'Untuk arisan, syukuran, pengajian, dan acara kantor.',
      features: ['Menu fleksibel', 'Jumlah besar', 'Jadwal antar', 'Konsultasi gratis'],
      ctaLabel: 'Konsultasi Paket',
    },
  ],
  features: [
    {
      title: 'Rasa rumahan',
      description: 'Menu dibuat dengan bumbu harian yang familiar dan mudah diterima tamu.',
    },
    {
      title: 'Kemasan rapi',
      description: 'Setiap box dikemas bersih agar praktis dibagikan di lokasi acara.',
    },
    {
      title: 'Minimal order jelas',
      description: 'Pelanggan mendapat informasi minimal order sejak awal sebelum memesan.',
    },
    {
      title: 'Area delivery',
      description: 'Pengantaran tersedia untuk area sekitar dapur dan lokasi acara dalam kota.',
    },
    {
      title: 'Custom menu',
      description: 'Komposisi paket bisa disesuaikan dengan budget dan preferensi pelanggan.',
    },
  ],
  gallery: [
    {
      title: 'Nasi Box Favorit',
      description: 'Paket nasi box ayam dengan lauk rumahan.',
      image:
        'https://images.unsplash.com/photo-1569058242567-93de6f36f8e9?auto=format&fit=crop&w=900&q=80',
      alt: 'Nasi box catering lauk ayam',
    },
    {
      title: 'Snack Box Rapat',
      description: 'Pilihan snack manis dan gurih untuk acara kantor.',
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
      alt: 'Snack box berisi kue untuk rapat',
    },
    {
      title: 'Tumpeng Mini',
      description: 'Tumpeng kecil untuk syukuran dan bingkisan.',
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
      alt: 'Tumpeng mini dengan lauk lengkap',
    },
    {
      title: 'Paket Acara',
      description: 'Menu catering untuk acara keluarga dan komunitas.',
      image:
        'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80',
      alt: 'Hidangan catering untuk acara keluarga',
    },
  ],
  testimonials: [
    {
      name: 'Ibu Melati',
      role: 'Pelanggan arisan',
      quote:
        'Pesanan datang tepat waktu, nasinya masih hangat, dan semua box tersusun rapi.',
      rating: 5,
    },
    {
      name: 'Pak Arif',
      role: 'Koordinator kantor',
      quote:
        'Komunikasinya jelas dari awal. Menu bisa disesuaikan dengan budget kantor.',
      rating: 5,
    },
    {
      name: 'Dina',
      role: 'Pelanggan snack box',
      quote:
        'Snack box-nya praktis untuk rapat pagi. Isi kue juga tidak membosankan.',
      rating: 5,
    },
  ],
  orderSteps: [
    {
      step: '01',
      title: 'Kirim kebutuhan acara',
      description: 'Sampaikan tanggal, jam, jumlah tamu, lokasi, dan perkiraan budget.',
    },
    {
      step: '02',
      title: 'Pilih paket atau custom menu',
      description: 'Tim Dapur Bu Rani membantu menyesuaikan menu dengan kebutuhan acara.',
    },
    {
      step: '03',
      title: 'Konfirmasi pesanan',
      description: 'Pesanan diproses setelah menu, jumlah, alamat, dan jadwal sudah disepakati.',
    },
    {
      step: '04',
      title: 'Pesanan diantar',
      description: 'Makanan disiapkan dan dikirim sesuai jam acara yang sudah dijadwalkan.',
    },
  ],
  faqs: [
    {
      question: 'Berapa minimal order nasi box?',
      answer: 'Minimal order untuk paket nasi box adalah 20 box per jenis paket.',
    },
    {
      question: 'Apakah menu bisa diganti?',
      answer: 'Bisa. Pelanggan dapat konsultasi menu sesuai budget, selera, dan jenis acara.',
    },
    {
      question: 'Apakah tersedia pengantaran?',
      answer: 'Ya, pengantaran tersedia untuk area layanan dengan biaya sesuai jarak.',
    },
    {
      question: 'Bisa pesan mendadak?',
      answer: 'Untuk hasil terbaik, pemesanan disarankan minimal H-2 sebelum acara.',
    },
    {
      question: 'Apakah menerima tumpeng mini?',
      answer: 'Ya, tersedia tumpeng mini untuk syukuran kecil, bingkisan, dan acara keluarga.',
    },
  ],
  location: {
    address: 'Jl. Melati No. 12, Makassar',
    areaServed: ['Makassar Kota', 'Panakkukang', 'Rappocini', 'Tamalanrea', 'Mariso'],
    mapQuery: 'Jl. Melati No. 12, Makassar, Sulawesi Selatan',
    hours: 'Senin - Sabtu, 07.00 - 18.00 WITA',
    notes: 'Area layanan dapat disesuaikan berdasarkan alamat pelanggan dan jadwal operasional.',
  },
  finalCta: {
    title: 'Siapkan konsumsi acara tanpa repot.',
    description:
      'Kirim detail acara lewat WhatsApp dan dapatkan rekomendasi paket catering yang sesuai.',
    primaryCta: {
      label: 'Pesan Catering via WhatsApp',
      type: 'whatsapp',
      messageTopic: 'memesan catering untuk acara',
      variant: 'primary',
    },
    secondaryCta: {
      label: 'Lihat Menu Paket',
      type: 'anchor',
      targetId: 'harga',
      variant: 'secondary',
    },
  },
  seo: {
    title: 'Dapur Bu Rani - Catering Rumahan dan Nasi Box',
    description:
      'Demo landing page catering rumahan untuk nasi box, snack box, tumpeng mini, dan paket acara.',
    keywords: ['catering rumahan', 'nasi box', 'snack box', 'tumpeng mini', 'catering makassar'],
  },
} satisfies Business;
