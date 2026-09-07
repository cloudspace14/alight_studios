"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Truck, Shield, CreditCard, Star, Heart, Filter, Search } from "lucide-react"
import { motion } from "framer-motion"

export default function ECommercePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-[#030303] text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-teal-500/[0.03] pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030303]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/main" className="flex items-center gap-2 text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="text-sm text-white/40">Example Project</span>
        </div>
      </nav>

      {/* Store Header */}
      <header className="pt-24 pb-8 px-6 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold"
            >
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                VERDANT
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10">
                <Search className="h-5 w-5 text-white/70" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10">
                <Heart className="h-5 w-5 text-white/70" />
              </button>
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10">
                <ShoppingBag className="h-5 w-5 text-white/70" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-medium">3</span>
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950/50 to-teal-950/50 p-8 md:p-16"
          >
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-500/20 blur-[80px]" />
            
            <div className="relative z-10 max-w-xl">
              <span className="mb-4 inline-block rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-300">New Collection</span>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Sustainable Fashion for Everyone</h2>
              <p className="mb-8 text-white/60">Discover eco-friendly clothing made with organic materials. Good for you, good for the planet.</p>
              <button className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/25">
                Shop Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
              { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
              { icon: CreditCard, title: "Easy Returns", desc: "30-day return policy" },
              { icon: Star, title: "Premium Quality", desc: "Certified organic materials" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <feature.icon className="h-8 w-8 text-emerald-400" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-xs text-white/60">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:bg-white/10">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Organic Cotton Tee", price: "$45", rating: 4.8, reviews: 124, color: "from-emerald-500/20 to-emerald-600/20" },
              { name: "Hemp Blend Hoodie", price: "$89", rating: 4.9, reviews: 89, color: "from-teal-500/20 to-teal-600/20" },
              { name: "Recycled Denim Jacket", price: "$125", rating: 4.7, reviews: 56, color: "from-cyan-500/20 to-cyan-600/20" },
              { name: "Bamboo Fiber Pants", price: "$68", rating: 4.8, reviews: 203, color: "from-green-500/20 to-green-600/20" },
              { name: "Linen Summer Dress", price: "$95", rating: 4.9, reviews: 167, color: "from-emerald-500/20 to-teal-500/20" },
              { name: "Cork Leather Bag", price: "$145", rating: 4.6, reviews: 78, color: "from-amber-500/20 to-orange-500/20" },
              { name: "Organic Wool Sweater", price: "$110", rating: 4.8, reviews: 92, color: "from-rose-500/20 to-pink-500/20" },
              { name: "Recycled Sneakers", price: "$85", rating: 4.7, reviews: 234, color: "from-violet-500/20 to-purple-500/20" },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className={`relative mb-4 aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${product.color}`}>
                  <button className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 opacity-0 transition-all group-hover:opacity-100">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="h-12 w-12 text-white/20" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform group-hover:translate-y-0">
                    <button className="w-full rounded-full bg-white py-2 text-sm font-medium text-black transition-all hover:bg-white/90">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="mb-1 font-medium">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-emerald-400">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-white/60">{product.rating} ({product.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="rounded-full border border-white/20 px-8 py-3 font-medium transition-all hover:bg-white/10">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 to-transparent p-8 md:p-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Join the Movement</h2>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              Subscribe to our newsletter for exclusive deals, new arrivals, and sustainability tips.
            </p>
            <div className="mx-auto flex max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none"
              />
              <button className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-white/40">
            Made by <span className="text-white/60">Alight Studio</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
