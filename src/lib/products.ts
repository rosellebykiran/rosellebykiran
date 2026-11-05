import ocean from '@/assets/ocean-whisper-earrings.jpg.asset.json';
import luna from '@/assets/luna-pearl-drops.jpg.asset.json';
import celeste from '@/assets/celeste-crown-pendant.jpg.asset.json';
import ivory from '@/assets/ivory-charm-bracelet.jpg.asset.json';

export const products = [
  { slug: 'ocean-whisper-earrings', name: 'Ocean Whisper Earrings', image: ocean.url, price: 999, originalPrice: 1499, description: 'Soft ocean-inspired drops for everyday elegance.', material: 'Alloy with silver polish, Zircon stones', size: 'Drop length 2.5cm, Lightweight' },
  { slug: 'luna-pearl-drops', name: 'Luna Pearl Drops', image: luna.url, price: 899, originalPrice: 1299, description: 'Classic pearl drops with a soft moonlight shine.', material: 'Artificial pearl, Alloy with silver polish', size: 'Drop length 3cm, Lightweight' },
  { slug: 'celeste-crown-pendant', name: 'Celeste Crown Pendant', image: celeste.url, price: 999, originalPrice: 1499, description: 'A dainty crown pendant for a royal touch.', material: 'Alloy with gold polish, Zircon stones', size: 'Chain Length 18 inch adjustable, Pendant 2cm' },
  { slug: 'ivory-charm-bracelet', name: 'Ivory Charm Bracelet', image: ivory.url, price: 799, originalPrice: undefined, description: undefined, material: undefined, size: undefined },
];

export function inquiryUrl(name: string, quantity: number, order = false) {
  return `https://wa.me/923426399389?text=${encodeURIComponent(`${order ? 'I would like to order' : 'I would like to inquire about'} ${name}. Quantity: ${quantity}.`)}`;
}