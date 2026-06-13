export function normalizeWhatsAppNumber(phone: string) {
  const digits = phone.replace(/\D/g, '');

  if (!digits) {
    return '';
  }

  if (digits.startsWith('0062')) {
    return digits.replace(/^00/, '');
  }

  if (digits.startsWith('62')) {
    return digits;
  }

  if (digits.startsWith('0')) {
    return `62${digits.slice(1)}`;
  }

  if (digits.startsWith('8')) {
    return `62${digits}`;
  }

  return digits;
}

export function formatWhatsApp(phone: string, message?: string) {
  const normalizedPhone = normalizeWhatsAppNumber(phone);
  const baseUrl = `https://wa.me/${normalizedPhone}`;
  const cleanMessage = message?.trim();

  if (!cleanMessage) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(cleanMessage)}`;
}

export function createBusinessWhatsAppMessage(businessName: string, topic?: string) {
  const cleanTopic = topic?.trim();

  if (!cleanTopic) {
    return `Halo ${businessName}, saya ingin bertanya tentang layanan yang tersedia. Boleh info lebih lanjut?`;
  }

  return `Halo ${businessName}, saya ingin ${cleanTopic}. Boleh info lebih lanjut?`;
}
