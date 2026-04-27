import { products, getProductById } from "@/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductPageContent from "@/components/ProductPageContent";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} (${product.code}) | Tanvi Wholesale`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductPageContent product={product} />;
}
