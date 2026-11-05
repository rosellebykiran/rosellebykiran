# Roadmap

## Open
- [ ] Create four product detail pages while preserving the Homepage design — waiting for the missing reference (including buttons, badges and footer) and the remainder of Ivory Charm Bracelet details.

## Done
- [x] Swapped all four product photos for the user's newest uploads in the given order (blue drop earrings → Ocean Whisper Earrings, cluster earrings → Luna Pearl Drops, gold pendant → Celeste Crown Pendant, bracelet → Ivory Charm Bracelet), each filling its card edge-to-edge; names, layout, card size, hero and button untouched.
- [x] Removed all four "Inquire on WhatsApp" buttons from under the products; only the product name now shows under each card, images and layout unchanged.
- [x] Sent Collections screenshots (phone + desktop) after the rename; confirmed the caption line, prices, "Original" and "Handcrafted" wording are all gone and the four WhatsApp buttons link to wa.me/923426399389.
- [x] Products renamed to Ocean Whisper Earrings, Luna Pearl Drops, Celeste Crown Pendant, Ivory Charm Bracelet; "Original Roselle Piece" caption and prices removed; small gold "Inquire on WhatsApp" button (wa.me/923426399389) added under each name.
- [x] Restored the original boutique, RK monogram, black rose and blue heart ocean scene; removed all hero product overlays, kept header logo unchanged and verified four real photos appear only in Collections on phone and desktop.
- [x] Replaced old jewelry with all four unchanged original uploaded photos in the hero and collection, with clean photo frames, soft shadows and "Original Roselle Piece" labels; removed fabricated names and prices. Preserved logo and gold architecture while removing the old jewelry from the boutique scene.
- [x] Verified all eight photo placements load, four collection labels appear and no horizontal overflow occurs at desktop and phone widths; routing test passed and build is clean.
- [x] Header logo — user's real logo file (IMG-20261104-WA5695.jpg) uploaded to CDN as `src/assets/roselle_rk_header_dp.jpg.asset.json` and used unchanged in the header at 48x48 / border-radius 8px. Old emblem crop deleted.
- [x] Header per spec: 66px tall, #fcfaf7, logo 48x48 / border-radius 8px top-left, ROSELLE + by Kiran, nav.
- [x] Discarded both AI-generated logo versions; logo is now a plain crop, no AI.
- [x] Mobile header: menu no longer overlaps "ROSELLE" at 411px (gap now ~43px, single line).
- [x] Favicon replaced with the user's uploaded full logo image (IMG-20261104-WA9567.jpg) as-is: `public/favicon.png` (256x256) + `public/favicon.ico` (16–256 frames), linked from `src/routes/__root.tsx` head (no index.html in this stack).
