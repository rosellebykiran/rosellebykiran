import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/boutique-empty.png";
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
      { name: "description", content: "Discover original ROSELLE by Kiran jewelry: blue drop earrings, cluster earrings, a gold-tone pendant and a crystal necklace." },
      { property: "og:title", content: "ROSELLE by Kiran — Ocean of the Heart" },
      { property: "og:description", content: "Explore original jewelry from ROSELLE by Kiran, photographed in the signature rose collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { img: p1.url, name: "Blue Drop Earrings" },
  { img: p2.url, name: "Crystal Cluster Earrings" },
  { img: p3.url, name: "Gold-Tone Crystal Pendant" },
  { img: p4.url, name: "Crystal Strand Necklace" },
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
        <img src={hero} alt="ROSELLE gold boutique on the ocean" className="block max-h-[70vh] w-full object-cover object-top" />
        <div className="relative mx-auto -mt-12 grid max-w-5xl grid-cols-4 gap-2 px-4 pb-6 md:-mt-40 md:gap-5 md:px-8 md:pb-10">
          {products.map((p) => (
            <img key={p.name} src={p.img} alt={`Original Roselle Piece — ${p.name}`} className="aspect-square w-full rounded-lg bg-card object-contain shadow-card" />
          ))}
        </div>
      </section>

      <section className="bg-top bg-no-repeat px-3 pb-2 pt-9 [background-size:100%_100%]" style={{ backgroundImage: `url(${drops})` }}>
        <h1 className="text-center font-serif text-xl md:text-3xl">
          Ocean of the Heart — Made from the Ocean's Last Tear
        </h1>
        <p className="mt-2 text-center text-xs opacity-80 md:text-sm">
          Curated heirloom-quality pieces, crafted for timeless elegance
        </p>
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3.5 md:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-lg border border-border bg-card text-center shadow-card">
              <img src={p.img} alt={p.name} className="aspect-square w-full bg-card object-contain" />
              <div className="px-2 pb-5 pt-3.5 text-[13px]">
                <h4 className="font-medium">{p.name}</h4>
                <p className="mt-1 text-xs text-muted-foreground">Original Roselle Piece</p>
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
