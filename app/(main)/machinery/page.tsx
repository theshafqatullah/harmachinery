"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  allMachinery,
  categories as allCategories,
  brands as allBrands,
} from "@/data/machinery";
import ContactSplit from "../_components/ContactSplit";

export default function MachineryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    let items = allMachinery;
    if (selectedCategory !== "All") {
      items = items.filter((m) => m.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.brand.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, selectedCategory]);

  const categoryOptions = ["All", ...allCategories];

  return (
    <>
      {/* Hero + Search */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Machinery &amp; Tools for Rent
          </h1>
          <p className="mt-3 max-w-xl text-zinc-600">
            {allMachinery.length} products across {allCategories.length}{" "}
            categories from {allBrands.length}+ brands. Same-day delivery
            across all UAE Emirates.
          </p>

          {/* Search bar */}
          <div className="relative mt-6 max-w-lg">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, brand, or category..."
              className="w-full rounded-lg border border-zinc-300 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4">
            {categoryOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-zinc-900"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-6 text-sm text-zinc-500">
            {filtered.length}{" "}
            {filtered.length === 1 ? "product" : "products"} found
          </p>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-zinc-900">
                No products found
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-sm font-semibold text-amber-600 hover:text-amber-500"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((machine) => (
                <Link
                  key={machine.slug}
                  href={`/machinery/${machine.slug}`}
                  className="group rounded-lg border border-zinc-200 bg-white transition-colors hover:border-amber-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-zinc-50">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="h-full w-full object-contain p-4"
                    />
                    {machine.available ? (
                      <span className="absolute left-2 top-2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                        Available
                      </span>
                    ) : (
                      <span className="absolute left-2 top-2 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700">
                        Rented Out
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-zinc-400">{machine.brand}</p>
                    <h3 className="mt-0.5 text-sm font-semibold text-zinc-900 group-hover:text-amber-600 line-clamp-2">
                      {machine.name}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      {machine.category}
                    </p>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-base font-bold text-amber-600">
                        AED {machine.price}
                      </span>
                      <span className="text-xs text-zinc-400">
                        /{machine.priceUnit}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900">
            Need Something Specific?
          </h2>
          <p className="mt-2 text-sm text-zinc-800">
            Can&apos;t find what you need? Contact us for custom solutions.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/request-quote"
              className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <ContactSplit />
    </>
  );
}
