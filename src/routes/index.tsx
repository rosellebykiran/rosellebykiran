import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/original-boutique.jpg.asset.json";
import logoAsset from "@/assets/roselle_rk_header_dp.jpg.asset.json";
import drops from "@/assets/water-drops-bg.jpg";
import ocean from "@/assets/ocean.jpg";
import button from "@/assets/water-button.png";
import p1 from "@/assets/roselle-blue-drop-earrings.jpg.asset.json";
import p2 from "@/assets/roselle-cluster-earrings.jpg.asset.json";
import p3 from "@/assets/roselle-gold-pendant.jpg.asset.json";
import p4 from "@/assets/roselle-necklace.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROSELLE by Kiran — Ocean of the Heart Jewelry" },
      { name: "description", content: "ROSELLE by Kiran fine jewelry: Ocean Whisper Earrings, Luna Pearl Drops, Celeste Crown Pendant and Ivory Charm Bracelet." },
      { property: "og:title", content: "ROSELLE by Kiran — Ocean of the Heart" },
      { property: "og:description", content: "Explore the ROSELLE by Kiran collection, photographed in the signature rose boutique." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/923426399389";

const products = [
  { img: p1.url, name: "Ocean Whisper Earrings" },
  { img: p2.url, name: "Luna Pearl Drops" },
  { img: p3.url, name: "Celeste Crown Pendant" },
  { img: p4.url, name: "Ivory Charm Bracelet" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className="sticky top-0 z-50"
        style={{
          height: "66px",
          background: "#fcfaf7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logoAsset.url}
            alt="ROSELLE by Kiran logo"
            style={{ width: "48px", height: "48px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <b
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "20px",
                letterSpacing: "3px",
                fontWeight: 500,
                display: "block",
                lineHeight: 1,
              }}
            >
              ROSELLE
            </b>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "11px" }}>
              by Kiran
            </span>
          </div>
        </div>
        <nav className="whitespace-nowrap text-[8px] tracking-[0.02em] md:text-xs md:tracking-[0.15em]">
          HOME · COLLECTIONS · ABOUT · CONTACT
        </nav>
      </header>

      <section className="bg-ocean">
        <img src={hero.url} alt="ROSELLE gold luxury boutique floating on a dark ocean at night, with RK diamond monogram, black rose and blue heart necklace" className="block max-h-[88vh] w-full object-cover object-top" />
      </section>

      <section className="bg-top bg-no-repeat px-3 pb-2 pt-9 [background-size:100%_100%]" style={{ backgroundImage: `url(${drops})` }}>
        <h1 className="text-center font-serif text-xl md:text-3xl">
          Ocean of the Heart — Made from the Ocean's Last Tear
        </h1>
        <p className="mt-2 text-center text-xs opacity-80 md:text-sm">
          Curated heirloom-quality pieces for timeless elegance
        </p>
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3.5 md:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-lg border border-border bg-card text-center shadow-card">
              <img src={p.img} alt={p.name} className="aspect-square w-full bg-card object-contain" />
              <div className="px-2 pb-4 pt-3.5 text-[13px]">
                <h4 className="font-medium">{p.name}</h4>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-block rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.12em] md:text-[10px]"
                  style={{
                    background: "linear-gradient(135deg, #e7c979, #c9a24a)",
                    border: "1px solid rgba(201,162,74,0.45)",
                    color: "#231a08",
                    boxShadow: "0 4px 10px rgba(180,140,60,0.28)",
                  }}
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative z-10 flex justify-center pt-5" style={{ backgroundImage: `url(${drops})`, backgroundSize: "100% auto", backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
        <a href="#" aria-label="View all collection" className="block w-72 bg-transparent md:w-96" style={{ background: "transparent", marginTop: "40px" }}>
          <img src={button} alt="View all collection" className="w-full [filter:drop-shadow(0_12px_24px_rgba(15,35,65,0.25))]" style={{ background: "transparent" }} />
        </a>
      </div>

      <div className="-mt-[2px] h-64 overflow-hidden">
        <img src={ocean} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
