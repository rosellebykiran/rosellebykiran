import { describe, expect, it } from 'vitest';
import { products, inquiryUrl } from '@/lib/products';

describe('Product launch prices', () => {
  it('prices Ocean Whisper Earrings at Rs. 999, reduced from Rs. 1,499', () => { expect(products[0]?.price).toBe(999); expect(products[0]?.originalPrice).toBe(1499); });
  it('prices Luna Pearl Drops at Rs. 899, reduced from Rs. 1,299', () => { expect(products[1]?.price).toBe(899); expect(products[1]?.originalPrice).toBe(1299); });
  it('prices Celeste Crown Pendant at Rs. 999, reduced from Rs. 1,499', () => { expect(products[2]?.price).toBe(999); expect(products[2]?.originalPrice).toBe(1499); });
  it('prices Ivory Charm Bracelet at Rs. 799 without an invented original price', () => { expect(products[3]?.price).toBe(799); expect(products[3]?.originalPrice).toBeUndefined(); });
  it('contains only the four specified products', () => { expect(products.map(p => p.name)).toEqual(['Ocean Whisper Earrings', 'Luna Pearl Drops', 'Celeste Crown Pendant', 'Ivory Charm Bracelet']); });
  it('sends the selected item and quantity to the supplied WhatsApp number', () => { const url = new URL(inquiryUrl('Luna Pearl Drops', 3, true)); expect(url.pathname).toBe('/923426399389'); expect(url.searchParams.get('text')).toBe('I would like to order Luna Pearl Drops. Quantity: 3.'); });
});