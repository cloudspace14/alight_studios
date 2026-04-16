"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Phone, Star, Coffee, Cake, Heart, Leaf } from "lucide-react"
import { motion } from "framer-motion"

export default function LocalBusinessPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-[#030303] text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-orange-500/[0.03] pointer-events-none" />
      
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

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
          <div className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
            <Coffee className="h-4 w-4" />
            Artisan Bakery & Cafe
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Golden Crust
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60 md:text-xl">
            Handcrafted breads, pastries, and specialty coffee made fresh daily with locally sourced ingredients.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 font-medium transition-all hover:shadow-lg hover:shadow-amber-500/25">
              View Menu
            </button>
            <button className="rounded-full border border-white/20 px-8 py-3 font-medium transition-all hover:bg-white/10">
              Order Online
            </button>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10 mt-16 grid gap-4 md:grid-cols-3"
        >
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <MapPin className="h-5 w-5 text-amber-400" />
            <span className="text-sm text-white/70">123 Baker Street, Downtown</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <Clock className="h-5 w-5 text-amber-400" />
            <span className="text-sm text-white/70">Open 7am - 8pm Daily</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <Phone className="h-5 w-5 text-amber-400" />
            <span className="text-sm text-white/70">+1 (555) 123-4567</span>
          </div>
        </motion.div>
      </section>

      {/* Menu Highlights */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Specialties</h2>
            <p className="mx-auto mb-16 max-w-2xl text-white/60">
              Crafted with love and the finest ingredients
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cake, title: "Artisan Breads", desc: "Sourdough, baguettes, and rustic loaves baked fresh every morning", price: "From $4.99" },
              { icon: Coffee, title: "Specialty Coffee", desc: "Single-origin beans roasted in-house for the perfect cup", price: "From $3.99" },
              { icon: Heart, title: "Fresh Pastries", desc: "Croissants, danishes, and seasonal treats made daily", price: "From $2.99" },
              { icon: Leaf, title: "Organic Options", desc: "Vegan and gluten-free selections available", price: "From $5.99" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-amber-500/50 hover:bg-white/10"
              >
                <item.icon className="mb-4 h-10 w-10 text-amber-400" />
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="mb-4 text-sm text-white/60">{item.desc}</p>
                <span className="text-sm font-medium text-amber-400">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Sarah M.", text: "The best croissants in town! Perfectly flaky and buttery every single time.", rating: 5 },
              { name: "James L.", text: "My morning coffee ritual starts here. The baristas know exactly how I like it.", rating: 5 },
              { name: "Emily R.", text: "Love their sourdough bread. It's become a weekend tradition for our family.", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-4 text-white/70">&ldquo;{review.text}&rdquo;</p>
                <span className="text-sm font-medium text-white/50">{review.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-950/30 to-transparent p-8 md:p-12 text-center"
          >
            <Coffee className="mx-auto mb-6 h-12 w-12 text-amber-400" />
            <h2 className="mb-4 text-3xl font-bold">Visit Us Today</h2>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              Stop by for a fresh coffee and warm pastry. We can&apos;t wait to welcome you!
            </p>
            <button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-medium transition-all hover:shadow-lg hover:shadow-amber-500/25">
              Get Directions
            </button>
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
