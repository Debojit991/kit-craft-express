# Premium Jersey Store Demo

## Goal
Build a complete, mobile-first single-page jersey storefront at `/` that feels like a premium sportswear campaign while remaining easy to browse and customize on phones.

## Build
- Establish a charcoal, off-white, and electric-green design system with bold condensed display type, restrained grain, sharp imagery, and athletic motion.
- Create reusable sections for the floating navigation, full-screen hero, trust strip, categories, product catalog, personalization preview, testimonials, social gallery, call-to-action band, and footer.
- Generate a cohesive set of original jersey and sportswear visuals for the hero, category cards, products, personalization preview, and social gallery.
- Add a mobile bottom-sheet/desktop dialog product quick view with swipeable images, sizes, name/number fields, add-to-cart confirmation, and all expected close behaviors.
- Add the live name-and-number jersey preview, mobile navigation, scrolling section links, newsletter demo response, and Instagram link supplied in the brief.
- Keep all commerce actions demo-only; no payments, accounts, database, or real order processing.

## Motion and Loading
- Reserve every image area with a fixed aspect ratio and use responsive image sizing, lazy loading below the fold, skeleton/blur-up transitions, and cover cropping.
- Add one-time scroll reveals, staggered hero entrance, subtle transform-only hero movement, press feedback, and reduced-motion fallbacks.
- Use scroll snapping for narrow trust and testimonial rows without trapping touch gestures.

## Quality Checks
- Verify the complete experience at 320, 375, 414, 768, 1024, and 1920 pixels wide.
- Check for horizontal overflow, clipped copy, image distortion, inaccessible controls, dialog behavior, and console errors.
- Add unique home-page title, description, Open Graph, and Twitter metadata.

## Technical Notes
- Use the existing TanStack Start and Tailwind v4 setup, semantic theme tokens, and existing interface controls.
- Keep product and category data separate from presentation components so real inventory can replace demo content later.
- Use transform and opacity for motion, 44px minimum touch targets, responsive `sizes`, fixed aspect ratios, and accessible labels throughout.
