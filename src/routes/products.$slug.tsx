import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowLeft, MessageCircle, Minus, Plus, ShoppingBag, BadgeCheck, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, inquiryUrl } from '@/lib/products';
import logo from '@/assets/roselle_rk_header_dp.jpg.asset.json';

export const Route = createFileRoute('/products/$slug')({
  loader: ({ params }) => {
    const product = products.find(p => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} — ROSELLE by Kiran` : 'Product unavailable — ROSELLE by Kiran';
    const description = loaderData?.description ?? 'Explore Ivory Charm Bracelet from ROSELLE by Kiran.';
    return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
  },
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  return <ProductDetail key={product.slug} product={product} />;
}

function ProductDetail({ product }: { product: (typeof products)[number] }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex h-[66px] items-center justify-between bg-secondary px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="ROSELLE by Kiran logo" className="h-12 w-12 rounded-lg object-cover" />
          <div className="font-serif"><b className="block text-xl font-medium leading-none">ROSELLE</b><span className="text-[11px]">by Kiran</span></div>
        </Link>
        <Button variant="ghost" asChild><Link to="/"><ArrowLeft />Home</Link></Button>
      </header>
      <main className="mx-auto max-w-6xl px-5 pb-16 pt-7 md:px-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-xs text-muted-foreground"><Link to="/">Home</Link><span>/</span><span>{product.name}</span></nav>
        <section className="grid items-start gap-9 md:grid-cols-2 md:gap-14">
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover shadow-card" />
          <div className="py-2">
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-baseline gap-4"><span className="text-2xl text-jewelry-gold">Rs. {product.price.toLocaleString('en-PK')}</span>{product.originalPrice && <del className="text-lg text-muted-foreground">Rs. {product.originalPrice.toLocaleString('en-PK')}</del>}</div>
            <p className="mt-1 text-xs text-muted-foreground">Launching price</p>
            {product.description && <p className="mt-7 leading-relaxed text-muted-foreground">{product.description}</p>}
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {product.material && <div className="py-4"><dt className="text-xs font-medium">MATERIAL</dt><dd className="mt-2 text-sm text-muted-foreground">{product.material}</dd></div>}
              {product.size && <div className="py-4"><dt className="text-xs font-medium">SIZE</dt><dd className="mt-2 text-sm text-muted-foreground">{product.size}</dd></div>}
            </dl>
            <label htmlFor="quantity" className="mb-3 mt-7 block text-xs font-medium">QUANTITY</label>
            <div className="flex w-36 items-center">
              <Button variant="outline" size="icon" aria-label="Decrease quantity" disabled={quantity === 1} onClick={() => setQuantity(q => q - 1)}><Minus /></Button>
              <Input id="quantity" aria-label="Quantity" type="number" min={1} value={quantity} className="w-16 text-center" onChange={e => setQuantity(Math.max(1, Math.floor(Number(e.target.value) || 1)))} />
              <Button variant="outline" size="icon" aria-label="Increase quantity" onClick={() => setQuantity(q => q + 1)}><Plus /></Button>
            </div>
            <div className="mt-6 grid gap-3">
              <Button asChild size="lg" className="bg-jewelry-gold text-jewelry-gold-foreground hover:bg-jewelry-gold/90"><a href={inquiryUrl(product.name, quantity, true)} target="_blank" rel="noopener noreferrer"><ShoppingBag />Order on WhatsApp</a></Button>
              <Button asChild size="lg" variant="outline"><a href={inquiryUrl(product.name, quantity)} target="_blank" rel="noopener noreferrer"><MessageCircle />Inquire on WhatsApp</a></Button>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-5 text-xs text-muted-foreground"><span className="flex items-center gap-2"><BadgeCheck className="size-5 text-jewelry-gold" />ROSELLE by Kiran</span><span className="flex items-center gap-2"><MessageCircle className="size-5 text-jewelry-gold" />Direct assistance</span></div>
          </div>
        </section>
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="mb-7 text-center font-serif text-3xl">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7">
            {products.filter(p => p.slug !== product.slug).map(p => <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group"><img src={p.image} alt={p.name} className="aspect-square w-full object-cover shadow-card" /><h3 className="mt-3 text-center text-sm group-hover:underline">{p.name}</h3></Link>)}
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-secondary px-5 py-10"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6"><Link to="/" className="font-serif text-2xl">ROSELLE <span className="text-sm">by Kiran</span></Link><Button asChild variant="link"><a href="https://wa.me/923426399389" target="_blank" rel="noopener noreferrer"><Gem />Contact on WhatsApp</a></Button></div></footer>
    </div>
  );
}