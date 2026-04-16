"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, Palette, Sparkles, Award, Instagram, Twitter, Dribbble, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function CreativePortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-[#030303] text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-fuchsia-500/[0.03] pointer-events-none" />
      
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
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#030303]">
              <span className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">AK</span>
            </div>
          </motion.div>
          
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Aria Knight
            </span>
          </h1>
          <p className="mb-8 text-xl text-white/60">
            Visual Designer & Creative Director
          </p>
          
          <div className="flex justify-center gap-4">
            {[Instagram, Twitter, Dribbble].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-violet-500/50 hover:bg-white/10"
              >
                <Icon className="h-5 w-5 text-white/70" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <div>
              <h2 className="mb-6 text-3xl font-bold">About Me</h2>
              <p className="mb-4 text-white/60">
                With over 10 years of experience in visual design, I specialize in creating bold, memorable brand identities and digital experiences that captivate audiences.
              </p>
              <p className="text-white/60">
                My work has been featured in major design publications and I&apos;ve collaborated with brands ranging from startups to Fortune 500 companies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Camera, label: "Photography" },
                { icon: Palette, label: "Brand Design" },
                { icon: Sparkles, label: "UI/UX" },
                { icon: Award, label: "Art Direction" },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <skill.icon className="mb-3 h-8 w-8 text-violet-400" />
                  <span className="text-sm text-white/70">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Selected Work</h2>
            <p className="mx-auto max-w-2xl text-white/60">
              A curated collection of my favorite projects
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Nova Cosmetics", category: "Brand Identity", color: "from-pink-500/30 to-rose-500/30" },
              { title: "Mindful App", category: "UI/UX Design", color: "from-emerald-500/30 to-teal-500/30" },
              { title: "Velocity Motors", category: "Art Direction", color: "from-orange-500/30 to-red-500/30" },
              { title: "Bloom Festival", category: "Event Branding", color: "from-violet-500/30 to-purple-500/30" },
              { title: "Urban Eats", category: "Brand Identity", color: "from-amber-500/30 to-yellow-500/30" },
              { title: "TechFlow", category: "Web Design", color: "from-blue-500/30 to-cyan-500/30" },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="mt-2 text-sm text-white/70">{project.category}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "25+", label: "Awards Won" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-violet-500/30 bg-gradient-to-b from-violet-950/30 to-transparent p-8 md:p-12 text-center"
          >
            <Mail className="mx-auto mb-6 h-12 w-12 text-violet-400" />
            <h2 className="mb-4 text-3xl font-bold">Let&apos;s Create Together</h2>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              Have a project in mind? I&apos;d love to hear about it and explore how we can bring your vision to life.
            </p>
            <button className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25">
              Get in Touch
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
