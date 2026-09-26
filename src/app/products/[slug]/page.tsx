import React from "react";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsDestinationsFilter from "@/components/products/ProductsDestinationsFilter";
import ProductsFilterBar from "@/components/products/ProductsFilterBar";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsWhyUsBanner from "@/components/products/ProductsWhyUsBanner";

export default async function ProductsBySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen pb-16 pt-6">
      {/* Hero Banner */}
      <ProductsHero />

      {/* Destinations Filter Bar */}
      <ProductsDestinationsFilter currentSlug={slug} />

      {/* Categories & Sort Controls Bar */}
      <ProductsFilterBar />

      {/* Trips Cards Grid */}
      <ProductsGrid />

      {/* Why Choose Us Banner */}
      <ProductsWhyUsBanner />
    </main>
  );
}
