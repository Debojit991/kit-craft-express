import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";
import { toast } from "sonner";

import heroJersey from "@/assets/hero-jersey.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { categories, jerseyImages, products, testimonials, type Product } from "./store-data";

const instagramUrl = "https://www.instagram.com/_indrajit_das_?stkn=Z2o2eWRjbWt4cmx4";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SmartImage({
  src,
  alt,
  className = "",
  eager = false,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`image-shell ${loaded ? "is-loaded" : ""} ${className}`}>
      <div aria-hidden="true" className="image-skeleton" />
      <img
        src={src}
        alt={alt}
        width={1200}
        height={1504}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const links = [
    ["Shop", "#shop"],
    ["Collections", "#collections"],
    ["Customise", "#customise"],
    ["Reviews", "#reviews"],
  ];

  return (
    <header className={`site-nav ${scrolled || open ? "is-solid" : ""}`}>
      <a className="brand-mark" href="#top" aria-label="Kit District home">
        <span>KIT</span>DISTRICT
      </a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <Button
        variant="navIcon"
        size="iconLg"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="mobile-menu-button"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight /></a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          setOffset(Math.min(window.scrollY * 0.035, 24));
          frame = 0;
        });
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="hero-section">
      <img
        className="hero-image"
        src={heroJersey}
        alt="Footballer in a black and electric green jersey entering a stadium"
        width={1536}
        height={1920}
        sizes="100vw"
        fetchPriority="high"
        style={{ transform: `scale(1.035) translate3d(0, ${offset}px, 0)` }}
      />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="hero-kicker hero-enter">Own the ninety</p>
        <h1 className="hero-enter hero-delay-1">Wear<br /><em>the game.</em></h1>
        <p className="hero-lede hero-enter hero-delay-2">Premium football jerseys. Match-ready quality. Made personal.</p>
        <Button asChild variant="hero" size="xl" className="hero-enter hero-delay-3">
          <a href="#shop">Shop jerseys <ArrowDown /></a>
        </Button>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><span>New season / 26</span></div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: ShieldCheck, text: "Premium quality" },
    { icon: Truck, text: "Fast delivery" },
    { icon: Sparkles, text: "Name & number" },
    { icon: PackageCheck, text: "COD available" },
  ];
  return (
    <div className="trust-strip" aria-label="Shopping benefits">
      <div className="trust-track">
        {items.map(({ icon: Icon, text }) => <div className="trust-item" key={text}><Icon /><span>{text}</span></div>)}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      {note && <p>{note}</p>}
    </div>
  );
}

function CategoryGrid() {
  return (
    <section id="collections" className="section-shell section-light">
      <Reveal><SectionHeading eyebrow="Find your colors" title="Pick your side." note="From modern match kits to cult classics." /></Reveal>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Reveal key={category.name} className="category-reveal" >
            <a href="#shop" className="category-card" style={{ transitionDelay: `${index * 45}ms` }}>
              <SmartImage src={category.image} alt={`${category.name} jersey collection`} sizes="(max-width: 767px) 50vw, 33vw" />
              <div className="card-scrim" />
              <div className="category-copy"><span>{category.note}</span><h3>{category.name}</h3><ArrowRight /></div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProductGrid({ onSelect }: { onSelect: (product: Product) => void }) {
  return (
    <section id="shop" className="section-shell section-dark">
      <Reveal><SectionHeading eyebrow="The starting lineup" title="Built for match day." note="Ten essential jerseys. Every one ready to customise." /></Reveal>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <button className="product-image-button" onClick={() => onSelect(product)} aria-label={`Quick view ${product.name}`}>
              <SmartImage src={product.image} alt={`${product.name} ${product.team} jersey`} sizes="(max-width: 767px) 50vw, 25vw" />
              <span className="product-badge">{product.badge}</span>
              <span className="quick-view">Quick view <ArrowRight /></span>
            </button>
            <button className="product-info" onClick={() => onSelect(product)}>
              <span><small>{product.team}</small><strong>{product.name}</strong></span>
              <b>₹{product.price.toLocaleString("en-IN")}</b>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [size, setSize] = useState("M");
  const [slide, setSlide] = useState(0);
  const touchStart = useRef<number | null>(null);
  const gallery = product ? [product.image, jerseyImages.volt, jerseyImages.retro] : [];

  useEffect(() => { setSlide(0); setSize("M"); }, [product]);

  if (!product) return null;
  return (
    <Drawer open={Boolean(product)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DrawerContent className="quick-drawer">
        <div className="quick-inner">
          <div
            className="quick-gallery"
            onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              const end = event.changedTouches[0]?.clientX;
              if (start === null || end === undefined) return;
              const distance = end - start;
              if (distance < -45) setSlide((value) => Math.min(gallery.length - 1, value + 1));
              if (distance > 45) setSlide((value) => Math.max(0, value - 1));
              touchStart.current = null;
            }}
          >
            <div className="quick-gallery-track" style={{ transform: `translate3d(-${slide * 100}%, 0, 0)` }}>
              {gallery.map((image, index) => <SmartImage key={`${image}-${index}`} src={image} alt={`${product.name} view ${index + 1}`} sizes="(max-width: 767px) 100vw, 50vw" eager={index === 0} />)}
            </div>
            <div className="gallery-dots" aria-label="Product image gallery">
              {gallery.map((_, index) => <button key={index} aria-label={`Show image ${index + 1}`} className={slide === index ? "is-active" : ""} onClick={() => setSlide(index)} />)}
            </div>
          </div>
          <div className="quick-details">
            <DrawerClose asChild><Button variant="navIcon" size="iconLg" className="quick-close" aria-label="Close quick view"><X /></Button></DrawerClose>
            <p className="eyebrow">{product.team}</p>
            <DrawerTitle>{product.name}</DrawerTitle>
            <DrawerDescription>Breathable performance knit with a clean athletic fit. Personalise it your way.</DrawerDescription>
            <p className="quick-price">₹{product.price.toLocaleString("en-IN")}</p>
            <fieldset className="size-picker"><legend>Choose size <a href="#size-guide">Size guide</a></legend><div>{["S", "M", "L", "XL", "XXL"].map((item) => <button key={item} className={size === item ? "is-active" : ""} onClick={() => setSize(item)}>{item}</button>)}</div></fieldset>
            <div className="personal-fields"><Input aria-label="Custom name" maxLength={12} placeholder="NAME (OPTIONAL)" /><Input aria-label="Custom number" inputMode="numeric" maxLength={2} placeholder="NUMBER" /></div>
            <Button variant="hero" size="xl" className="add-button" onClick={() => toast.success(`${product.name} added in size ${size}`, { icon: <Check /> })}>Add to bag <span>₹{product.price.toLocaleString("en-IN")}</span></Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CustomizationSection() {
  const [name, setName] = useState("YOUR NAME");
  const [number, setNumber] = useState("10");
  return (
    <section id="customise" className="custom-section">
      <div className="custom-grid">
        <Reveal className="custom-copy">
          <p className="eyebrow">Make it yours</p>
          <h2>Your name.<br /><em>Your number.</em></h2>
          <p>Set your identity in match-grade lettering. Type it in and see your kit come alive.</p>
          <div className="custom-inputs"><label>Name<Input value={name} maxLength={12} onChange={(event) => setName(event.target.value.toUpperCase())} /></label><label>Number<Input value={number} maxLength={2} inputMode="numeric" onChange={(event) => setNumber(event.target.value.replace(/\D/g, ""))} /></label></div>
        </Reveal>
        <Reveal className="jersey-preview">
          <SmartImage src={jerseyImages.volt} alt="Black jersey customization preview" sizes="(max-width: 767px) 100vw, 50vw" />
          <div className="jersey-personalisation"><span>{name || "YOUR NAME"}</span><strong>{number || "10"}</strong></div>
          <span className="preview-label">Live preview</span>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="section-shell section-light reviews-section">
      <Reveal><SectionHeading eyebrow="From the terraces" title="Worn. Loved. Repeated." /></Reveal>
      <div className="review-track">
        {testimonials.map((item) => <article className="review-card" key={item.name}><div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} />)}</div><blockquote>“{item.quote}”</blockquote><footer><strong>{item.name}</strong><span>{item.detail}</span></footer></article>)}
      </div>
    </section>
  );
}

function SocialStrip() {
  const images = [jerseyImages.crimson, jerseyImages.retro, jerseyImages.volt, jerseyImages.green, jerseyImages.blue, jerseyImages.kids];
  return (
    <section className="social-section">
      <div className="social-heading"><div><p className="eyebrow">From the feed</p><h2>Kit in the wild.</h2></div><Button asChild variant="outlineLight" size="lg"><a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram /> Follow IndraJit</a></Button></div>
      <div className="social-grid">{images.map((image, index) => <a href={instagramUrl} target="_blank" rel="noreferrer" key={image} aria-label={`Open Instagram post ${index + 1}`}><SmartImage src={image} alt={`Jersey style inspiration ${index + 1}`} sizes="(max-width: 767px) 33vw, 17vw" /></a>)}</div>
    </section>
  );
}

function CtaBand() {
  const subscribe = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); toast.success("You’re on the list. Your 10% code is coming soon."); event.currentTarget.reset(); };
  return (
    <section className="cta-band"><div><p className="eyebrow">First signing bonus</p><h2>Get 10% off your first kit.</h2></div><form onSubmit={subscribe}><Input required type="email" aria-label="Email address" placeholder="YOUR EMAIL ADDRESS" /><Button variant="ink" size="xl" type="submit">Claim 10% <ArrowRight /></Button></form><a className="whatsapp-link" href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle /> Custom order? Chat on WhatsApp</a></section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="size-guide">
      <div className="footer-brand"><a className="brand-mark" href="#top"><span>KIT</span>DISTRICT</a><p>Football culture, cut to fit.</p></div>
      <div className="footer-links"><details open><summary>Shop <ChevronDown /></summary><a href="#shop">New season</a><a href="#collections">Collections</a><a href="#customise">Custom jerseys</a></details><details><summary>Help <ChevronDown /></summary><a href="#size-guide">Size guide</a><a href="#top">Delivery</a><a href="#top">Returns</a></details><details><summary>Follow <ChevronDown /></summary><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href="#top">Facebook</a><a href="#top">YouTube</a></details></div>
      <div className="footer-bottom"><span>© 2026 Kit District. Demo storefront.</span><div aria-label="Accepted payment methods"><span>VISA</span><span>UPI</span><span>COD</span></div></div>
    </footer>
  );
}

export function JerseyStore() {
  const [selected, setSelected] = useState<Product | null>(null);
  return <main><Navbar /><Hero /><TrustStrip /><CategoryGrid /><ProductGrid onSelect={setSelected} /><CustomizationSection /><Testimonials /><SocialStrip /><CtaBand /><Footer /><QuickView product={selected} onClose={() => setSelected(null)} /></main>;
}