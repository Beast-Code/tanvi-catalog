export interface Product {
  id: string;
  code: string;
  name: string;
  category: "kurti" | "suit";
  fabric: string;
  color: string;
  description: string;
  setInfo: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "tk-101",
    code: "TK-101",
    name: "Floral Cotton Kurti Set",
    category: "kurti",
    fabric: "Pure Cotton",
    color: "Soft Pink",
    description:
      "Elegant floral printed cotton kurti set in soft pink and white. Perfect for daily and semi-casual wear. Breathable fabric with beautiful print work.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-101.png"],
  },
  {
    id: "tk-102",
    code: "TK-102",
    name: "Festive Designer Suit Set",
    category: "suit",
    fabric: "Georgette",
    color: "Maroon & Gold",
    description:
      "Rich maroon festive designer salwar suit with exquisite gold embroidery. Ideal for festive seasons and special occasions. Premium stitching and finish.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-102.png"],
  },
  {
    id: "tk-103",
    code: "TK-103",
    name: "Printed Daily Wear Kurti",
    category: "kurti",
    fabric: "Cotton Blend",
    color: "Teal Blue",
    description:
      "Comfortable printed daily wear kurti in teal blue paired with white palazzo pants. Easy to maintain, wrinkle-free fabric perfect for everyday elegance.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-103.png"],
  },
  {
    id: "tk-104",
    code: "TK-104",
    name: "Chanderi Silk Kurti Set",
    category: "kurti",
    fabric: "Chanderi Silk",
    color: "Lavender Purple",
    description:
      "Graceful chanderi silk kurti set in lavender purple with delicate hand embroidery. Premium silk texture with a luxurious drape, ideal for celebrations.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-104.png"],
  },
  {
    id: "tk-105",
    code: "TK-105",
    name: "Rayon Embroidered Kurti",
    category: "kurti",
    fabric: "Rayon",
    color: "Mustard Yellow",
    description:
      "Stunning rayon kurti in mustard yellow with intricate mirror work and printed dupatta. Eye-catching design with premium craftsmanship throughout.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-105.png"],
  },
  {
    id: "tk-106",
    code: "TK-106",
    name: "Georgette Anarkali Suit",
    category: "suit",
    fabric: "Georgette",
    color: "Deep Green",
    description:
      "Gorgeous georgette anarkali suit in deep green with golden zari work. Flowing silhouette with premium finish. A showstopper for any festive occasion.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-106.png"],
  },
  {
    id: "tk-107",
    code: "TK-107",
    name: "Block Print Cotton Kurti",
    category: "kurti",
    fabric: "Pure Cotton",
    color: "Indigo Blue",
    description:
      "Traditional Rajasthani block print cotton kurti in indigo blue and white with matching palazzo. Handcrafted print with natural dyes, breathable and stylish.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-107.png"],
  },
  {
    id: "tk-108",
    code: "TK-108",
    name: "Chiffon Palazzo Suit Set",
    category: "suit",
    fabric: "Chiffon",
    color: "Peach Coral",
    description:
      "Elegant chiffon palazzo suit set in peach coral with delicate lace detailing. Lightweight and flowy, perfect for summer festivities and gatherings.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-108.png"],
  },
  {
    id: "tk-109",
    code: "TK-109",
    name: "Straight Cut Viscose Kurti",
    category: "kurti",
    fabric: "Viscose",
    color: "Dusty Rose",
    description:
      "Modern straight cut viscose kurti in dusty rose with minimal golden buttons and an elegant neckline. Contemporary design meets traditional comfort.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-109.png"],
  },
  {
    id: "tk-110",
    code: "TK-110",
    name: "Net Sharara Suit Set",
    category: "suit",
    fabric: "Net",
    color: "Royal Blue",
    description:
      "Stunning net sharara suit in royal blue with silver sequin embroidery. A glamorous party-wear piece that guarantees attention and compliments.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-110.png"],
  },
  {
    id: "tk-111",
    code: "TK-111",
    name: "A-Line Ethnic Print Kurti",
    category: "kurti",
    fabric: "Cotton",
    color: "Olive Green",
    description:
      "Casual A-line cotton kurti in olive green with traditional ethnic print and tassel detailing. Relaxed fit with a boho-chic vibe for everyday wear.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-111.png"],
  },
  {
    id: "tk-112",
    code: "TK-112",
    name: "Modern Pant Style Suit",
    category: "suit",
    fabric: "Cotton Silk",
    color: "Off-White & Beige",
    description:
      "Minimalist modern pant-style suit in off-white and beige with subtle thread embroidery. Sophisticated silhouette for the contemporary woman.",
    setInfo: "Set of 4 sizes (S, M, L, XL)",
    images: ["/products/tk-112.png"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
