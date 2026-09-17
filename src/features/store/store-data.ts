import jerseyBlue from "@/assets/jersey-blue.jpg";
import jerseyCrimson from "@/assets/jersey-crimson.jpg";
import jerseyGreen from "@/assets/jersey-green.jpg";
import jerseyKids from "@/assets/jersey-kids.jpg";
import jerseyRetro from "@/assets/jersey-retro.jpg";
import jerseyVolt from "@/assets/jersey-volt.jpg";

export type Product = {
  id: number;
  name: string;
  team: string;
  price: number;
  image: string;
  badge: string;
};

export const jerseyImages = {
  blue: jerseyBlue,
  crimson: jerseyCrimson,
  green: jerseyGreen,
  kids: jerseyKids,
  retro: jerseyRetro,
  volt: jerseyVolt,
};

export const categories = [
  { name: "Club jerseys", note: "Match-day icons", image: jerseyCrimson },
  { name: "National teams", note: "Wear your colors", image: jerseyGreen },
  { name: "Retro / vintage", note: "Legends never fade", image: jerseyRetro },
  { name: "Customized", note: "Made unmistakably yours", image: jerseyVolt },
  { name: "Kids jerseys", note: "For the next generation", image: jerseyKids },
  { name: "Training wear", note: "Built for every session", image: jerseyBlue },
];

export const products: Product[] = [
  { id: 1, name: "Nightstrike Elite", team: "Club Edition", price: 1899, image: jerseyVolt, badge: "Customise" },
  { id: 2, name: "Redline Home", team: "Club Edition", price: 1699, image: jerseyCrimson, badge: "Bestseller" },
  { id: 3, name: "Heritage '94", team: "Retro Collection", price: 2099, image: jerseyRetro, badge: "Limited" },
  { id: 4, name: "Royal Away", team: "Club Edition", price: 1799, image: jerseyBlue, badge: "Customise" },
  { id: 5, name: "Emerald XI", team: "National Team", price: 1899, image: jerseyGreen, badge: "New" },
  { id: 6, name: "Academy Volt", team: "Junior Edition", price: 1299, image: jerseyKids, badge: "Kids" },
  { id: 7, name: "Midnight Pro", team: "Player Edition", price: 2499, image: jerseyVolt, badge: "Pro fit" },
  { id: 8, name: "Crimson Cup", team: "Tournament Edition", price: 1999, image: jerseyCrimson, badge: "Customise" },
  { id: 9, name: "Sunday Classic", team: "Retro Collection", price: 2199, image: jerseyRetro, badge: "Limited" },
  { id: 10, name: "Blue Velocity", team: "Training Edition", price: 1499, image: jerseyBlue, badge: "New" },
];

export const testimonials = [
  { quote: "The fabric feels premium and the name print came out razor sharp.", name: "Arjun M.", detail: "Kolkata" },
  { quote: "Perfect fit, quick delivery, and the colors look even better in person.", name: "Rohit S.", detail: "Bengaluru" },
  { quote: "Our whole five-a-side team ordered together. Every jersey was spot on.", name: "Dev P.", detail: "Mumbai" },
  { quote: "The retro collection is unreal. Finally, a jersey that feels made to last.", name: "Ishaan K.", detail: "Delhi" },
];