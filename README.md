# Jersey Showcase

# Premium Jersey Store — Lovable Build Prompt

Copy everything below this line into Lovable as your first prompt.

---

## Project Brief

Build a **premium, mobile-first e-commerce demo website** for a jersey store (football/sports jerseys — club, national team, and customized/personalized jerseys). This is a **client demo** — the goal is to visually impress on first glance, especially on mobile, since **90% of the customer base browses on mobile phones**. Prioritize polish, smooth motion, and zero layout breakage over adding many features.

**Non-negotiable rules:**

- Mobile-first design. Design and test every section at 375px width first, then scale up.

- No horizontal scroll, no overflow, no clipped/cut-off images or text at ANY breakpoint (320px to 1920px).

- Every image must use proper `object-fit: cover`, defined aspect ratios, and responsive `srcset`/sizing so nothing stretches, squishes, or overflows its container.

- Buttery-smooth animations (60fps) — use `transform` and `opacity` only for animated properties, avoid animating `width`/`height`/`top`/`left`.

- Fast perceived load: skeleton loaders / blur-up placeholders for images, no layout shift (reserve image space with aspect-ratio boxes).

- Touch-friendly: minimum 44x44px tap targets, no hover-only interactions (every hover effect must have a tap/active equivalent on mobile).

- Use a component-based structure so sections can be reused/edited easily later.

---

## Brand Direction

- Store type: Premium sports jersey store — football/soccer and other sports jerseys, replica + customized (name/number printing), club & national team kits.

- Vibe: Bold, athletic, premium sportswear energy — think Nike/Adidas product pages meets a boutique jersey shop. Confident, energetic, dark-and-vibrant, not "cute" or "soft."

- Color palette: Deep charcoal/black (#0A0A0A) and off-white (#F5F5F5) as base, with ONE vibrant accent color (electric green, crimson red, or cobalt blue — pick one and use it consistently for CTAs, highlights, badges). Avoid rainbow/multi-accent palettes.

- Typography: Bold, condensed, sporty display font for headings (e.g., a sports-jersey-numbering-style or strong grotesque font), clean readable sans-serif for body text. Strong size contrast between headline and body.

- Imagery style: High-contrast jersey product shots on clean/dark backgrounds, dynamic action-style crops, subtle grain/texture optional for premium feel.

---

## Pages / Sections to Build (Single-Page Demo Scroll + Product Modal)

### 1. Hero Section

- Full-viewport-height hero (use `100dvh` not `100vh` to avoid mobile browser chrome jump bugs).

- Large bold headline (e.g., "Wear The Game." or similar sporty tagline), short subheadline, one primary CTA button ("Shop Jerseys").

- Background: a hero jersey image or a subtle animated gradient/pattern — must be fully responsive with no cropping issues on tall/narrow phone screens.

- On load: staggered fade/slide-up entrance animation for headline, subtext, and CTA (each element delayed ~100-150ms after the previous).

- Subtle parallax or scale-on-scroll effect on the hero image (very subtle, performance-safe, disabled on low-end devices via `prefers-reduced-motion` support).

- Sticky/floating minimal navbar that appears on scroll with logo + hamburger menu (mobile) / horizontal links (desktop). Navbar background should transition from transparent to solid with a blur/backdrop-filter as user scrolls.

### 2. Trust/Highlights Strip

- A slim horizontal strip right under the hero with 3-4 short trust points (e.g., "Authentic Quality", "Fast Delivery", "Custom Name & Number", "COD Available") with small icons.

- On mobile: horizontally scrollable snap-carousel if it can't fit in one row — never wrap awkwardly or overflow the viewport.

### 3. Featured Categories

- Grid of jersey categories (Club Jerseys, National Team, Retro/Vintage, Customized Jerseys, Kids Jerseys, Training Wear).

- Mobile: 2-column grid of image cards. Desktop: 3-4 column grid.

- Each card: image with a subtle zoom-on-tap/hover (scale 1.05, smooth 300ms ease), category name overlay with gradient scrim so text stays readable over any image.

- Cards should have a soft entrance animation on scroll (fade + slide up, staggered) using an intersection-observer style scroll-reveal — must trigger only once, not repeatedly re-animate while scrolling up/down.

### 4. Product Showcase Grid

- Grid of 8-12 sample jersey products (use placeholder product images consistently sized — same aspect ratio for every product image, e.g., 4:5 portrait).

- Mobile: 2-column grid with generous gutter, no cramped text. Desktop: 4-column grid.

- Each product card shows: product image, jersey name, team/club tag, price, a small "Customize" or "Quick View" tag/badge.

- Tapping/clicking a card opens a **Product Quick View** (modal or bottom-sheet on mobile) with:

  - Image gallery (swipeable on mobile, with dot indicators)

  - Jersey name, price, size selector (S/M/L/XL/XXL as pill buttons), optional name & number customization input fields

  - "Add to Cart" button with a satisfying micro-interaction (button press scale + success checkmark animation/toast)

  - Close by swipe-down (mobile) or tap outside/X (desktop)

- Bottom-sheet modal on mobile should slide up from the bottom with spring-like easing, not a jarring center popup that can overflow the screen.

### 5. Customization/Personalization Highlight Section

- A dedicated visual section explaining "Add Your Name & Number" customization service — since this is a big value prop for jersey stores.

- Show a mock jersey with name/number overlay, maybe a simple interactive input where typing an on-page text field live-updates a preview name/number on a jersey mockup image (nice-to-have interactive moment that will impress the client).

- Keep this interaction simple and bug-free over adding many features — a broken interactive demo is worse than no interactive demo.

### 6. Testimonials / Social Proof

- Horizontally swipeable testimonial cards (snap-scroll) with customer name, short quote, star rating.

- Autoplay optional but must pause on user touch/interaction, never fight the user's swipe gesture.

### 7. Instagram / Social Strip

- Small section titled "Follow Us" or "As Seen On Instagram" with a grid of 4-6 square placeholder images in an Instagram-feed style grid, and a CTA button linking out to Instagram.

- Keep this purely visual/decorative for the demo (no live API integration needed).

### 8. Newsletter / WhatsApp CTA Band

- Full-width colored band (using the accent color) with a strong CTA — e.g., "Get 10% Off Your First Order" with an email input + button, or a "Chat on WhatsApp" button (common for jersey stores taking custom orders via WhatsApp/DM).

- Input and button must stack cleanly on mobile, never overlap or overflow.

### 9. Footer

- Logo, short tagline, quick links (Shop, About, Contact, Size Guide, Returns), social icons, payment method icons row, copyright line.

- On mobile: stack into clean single/two-column layout with accordion-style collapsible link groups if there are many links — avoid a huge unstyled wall of links.

---

## Animation & Motion Guidelines

- Use scroll-triggered reveal animations (fade + slight translateY, ~400-600ms, ease-out) for section entrances — subtle, not gimmicky.

- Button interactions: scale down slightly on press (active state), quick spring back.

- Page/section transitions should feel smooth, not abrupt — use consistent easing curves throughout (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` for a premium "ease-out-expo" feel).

- Respect `prefers-reduced-motion` — reduce/disable non-essential animation for users who request it.

- No animation should block interaction — user must always be able to tap/scroll immediately, never wait for an animation to "finish" before the UI is usable.

## Image Handling Rules (Critical)

- Every image container must have a fixed/defined aspect ratio (via CSS `aspect-ratio` or padding-box technique) BEFORE the image loads, to prevent layout shift.

- Use `object-fit: cover; object-position: center;` on all product/hero images.

- All images must be responsive (`max-width: 100%; height: auto;` at minimum, with proper container constraints).

- Never let an image's natural size dictate layout — always constrain via CSS.

- Use placeholder/stock jersey images that are consistent in style and cropping across the whole site for a cohesive premium look.

## Responsive Breakpoint Checklist (test all of these before calling it done)

- 320px (small older phones)

- 375px (standard mobile)

- 414px (large phones)

- 768px (tablets)

- 1024px+ (desktop)

At every one of these: no horizontal scrollbar, no overlapping text, no cut-off buttons, no images spilling outside their cards.

---

## Tech/Build Notes for Lovable

- Build as a modern React + Tailwind CSS site (Lovable default stack).

- Structure into clear components: `Navbar`, `Hero`, `TrustStrip`, `CategoryGrid`, `ProductGrid`, `ProductQuickView`, `CustomizationSection`, `Testimonials`, `InstagramStrip`, `CTABand`, `Footer`.

- Use placeholder jersey/sportswear images (can be sourced as high-quality stock/mock images) consistently throughout — client will swap in real product photos later.

- This is a DEMO for client approval — do not wire up real payments/backend. "Add to Cart" and "Checkout" can be visual-only with toast/confirmation feedback, no real transaction logic needed.

- Keep the codebase clean and componentized so real product data can be swapped in easily after client approval.

---

## Final Priority Order (if time/scope must be trimmed)

1. Flawless mobile responsiveness (nothing broken/overflowing) — highest priority, non-negotiable.

2. Hero section polish + entrance animation (this is the first-glance "wow" moment).

3. Product grid + quick view modal.

4. Scroll-reveal animations across sections.

5. Customization interactive preview.

6. Testimonials, Instagram strip, newsletter band, footer polish. Here is the Instagram account for the person the store we will build it for https://www.instagram.com/_indrajit_das_?stkn=Z2o2eWRjbWt4cmx4

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d5ad0a75-01a9-4497-adae-321adf79bb73).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
