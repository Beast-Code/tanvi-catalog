"use client";

import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Section header */}
      <div className="mb-8 sm:mb-12">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2C2420] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Collection
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#A69882] max-w-xl">
          Premium wholesale ethnic wear — curated for retailers who value quality and style.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-[#8B7D6B]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EBE3]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4956A]" />
            {products.length} Designs
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EBE3]">
            Set of 4 Sizes Each
          </span>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-[fadeUp_0.5s_ease_both]"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
