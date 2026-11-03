import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/roselle_rk_header_dp.png";
import drops from "@/assets/water-drops-bg.jpg";
import ocean from "@/assets/ocean.jpg";
import button from "@/assets/water-button.png";
import p1 from "@/assets/prod1.jpg";
import p2 from "@/assets/prod2.jpg";
import p3 from "@/assets/prod3.jpg";
import p4 from "@/assets/prod4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROSELLE by Kiran — Ocean of the Heart Jewelry" },
      { name: "description", content: "Heirloom-quality sapphire, pearl and gold jewelry by ROSELLE by Kiran." },
      { property: "og:title", content: "ROSELLE by Kiran — Ocean of the Heart" },
      { property: "og:description", content: "Curated heirloom-quality pieces, crafted for timeless elegance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { img: p1, name: "Sapphire Halo Drop Earrings", price: "$1,250" },
  { img: p2, name: "Blue Diamond Solitaire Ring", price: "$3,800" },
  { img: p3, name: "Pearl & Sapphire Strand Necklace", price: "$2,100" },
  { img: p4, name: "Ornate Gold Cuff Bracelet", price: "$1,850" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-secondary px-5 md:px-8">
        <div className="leading-none">
          <b className="block font-serif text-2xl font-medium tracking-[0.2em]">ROSELLE</b>
          <span className="block text-center font-serif text-xs opacity-80">by Kiran</span>
        </div>
        <nav className="text-[9px] tracking-wider md:text-xs">
          HOME · COLLECTIONS · ABOUT · CONTACT
        </nav>
      </header>

      <section className="bg-ocean">
        <img src={hero} alt="Roselle gold palace on the ocean" className="block max-h-[88vh] w-full object-cover object-top" />
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
            <div key={p.name} className="overflow-hidden rounded-2xl border border-border bg-card/95 text-center backdrop-blur-[2px] shadow-card">
              <img src={p.img} alt={p.name} className="aspect-square w-full object-cover" />
              <div className="px-2 pb-5 pt-3.5 text-[13px]">
                <h4 className="font-medium">{p.name}</h4>
                <p className="mt-1 opacity-90">— {p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative z-10 flex justify-center pt-5" style={{ backgroundImage: `url(${drops})`, backgroundSize: "100% auto", backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
        <a href="#" aria-label="View all collection" className="block w-72 bg-transparent md:w-96" style={{ background: "transparent" }}>
          <img src={button} alt="View all collection" className="w-full [filter:drop-shadow(0_12px_24px_rgba(15,35,65,0.25))]" style={{ background: "transparent" }} />
        </a>
      </div>

      <div className="-mt-[2px] h-64 overflow-hidden">
        <img src={ocean} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
