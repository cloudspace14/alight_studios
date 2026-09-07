"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
<<<<<<< HEAD
import { Rocket, Palette, Mail, Send, ArrowRight } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export default function MainPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
=======
import { Globe, Layout, Smartphone, Zap, Rocket, DollarSign, Palette, TrendingUp, Mail, Send, ArrowRight, Star, Loader2, Check, Crown } from "lucide-react"
import { RatingInteraction } from "@/components/ui/emoji-rating"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "border border-white/[0.08]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function MainPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
<<<<<<< HEAD
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
=======
    setFormStatus("loading")
    
    try {
      // Simulate form submission - replace with actual API call
      await new Promise((_, reject) => setTimeout(() => reject(new Error("Failed")), 1500))
      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setFormStatus("error")
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
    }
  }

  return (
    <div className={`min-h-screen bg-[#030303] text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl pointer-events-none" />
      
      {/* Elegant floating shapes - z-0 keeps them behind content */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Cursor glow effect */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50" style={{
          background: "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(120, 119, 198, 0.15), transparent 80%)"
        }} />
      </div>

      {/* Mini Intro Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent" />
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Welcome to <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Alight Studios</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
            Check our recent projects down below!
          </p>
          <Link href="#projects">
            <LiquidButton size="lg" className="text-white border border-white/20 rounded-full">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </LiquidButton>
          </Link>
        </div>
      </section>

      {/* Projects Intro Section */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Our Projects</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-white/60">
            Android-only tools and games created by Alight Studios
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Rocket, title: "Looming Heights", desc: "A 2D mobile platformer set in the sky, where you solve challenging levels.", href: "/projects/looming-heights" },
              { icon: Palette, title: "Just Draw", desc: "A camera tracing tool that lets you place a photo on screen and draw over it.", href: "/projects/just-draw" },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <project.icon className="relative mb-4 h-10 w-10 text-violet-400 transition-transform group-hover:scale-110" />
                <h3 className="relative mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="relative text-sm text-white/60">{project.desc}</p>
                <Link href={project.href} className="relative mt-5 inline-block text-sm text-violet-300 hover:text-white">View project →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Pricing Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Simple Pricing</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-white/60">
            Transparent pricing with no hidden fees
          </p>
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {/* Basic Plan */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
              <h3 className="mb-2 text-xl font-semibold">Basic Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">₹250</span>
                <span className="text-white/60"> one-time</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white/40 flex-shrink-0" />
                  Subdomain only
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white/40 flex-shrink-0" />
                  Basic design
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white/40 flex-shrink-0" />
                  No database
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white/40 flex-shrink-0" />
                  Normal delivery speed
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white/40 flex-shrink-0" />
                  Mobile responsive (basic)
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white/40 flex-shrink-0" />
                  Up to 7 pages website
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full rounded-full border border-white/20 py-3 text-center font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan - Most Popular */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-500/50 bg-gradient-to-b from-blue-950/20 to-indigo-950/10 p-8 shadow-xl shadow-blue-500/10 transition-all duration-300 hover:border-blue-400/70 hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">Most Popular</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Pro Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">₹250</span>
                <span className="text-white/60"> + ₹75 first month</span>
                <p className="mt-1 text-sm text-white/50">₹60/month maintenance</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Custom domain support
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Database integration
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Faster delivery priority
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Professional design
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Up to 20 pages website
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Basic SEO setup
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Contact form integration
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Basic animations / transitions
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  1 revision after delivery
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Email support
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 py-3 text-center font-medium transition-all duration-300 hover:from-blue-400 hover:to-indigo-400 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Plan - Highlighted */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-violet-500/50 bg-gradient-to-b from-violet-950/30 to-fuchsia-950/10 p-8 lg:p-10 shadow-2xl shadow-violet-500/20 transition-all duration-300 hover:border-violet-400/70 hover:shadow-violet-500/30 hover:-translate-y-1 lg:scale-105">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-fuchsia-500/30 blur-3xl" />
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <Crown className="h-4 w-4 text-amber-400" />
                <span className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">Premium</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Premium Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">₹375</span>
                <span className="text-white/60">/month</span>
                <p className="mt-1 text-sm text-white/50">₹75/month maintenance</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Custom domain
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Advanced premium design
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Database support
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Highest priority delivery
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Unlimited pages website
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Advanced SEO optimization
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Login / signup system
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Performance optimization
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Custom animations & effects
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  E-commerce support (basic)
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  API integrations
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  3-5 revisions
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  24/7 priority support
                </li>
                <li className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  Free maintenance for 1 month
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 text-center font-medium transition-all duration-300 hover:from-violet-400 hover:to-fuchsia-400 hover:shadow-lg hover:shadow-violet-500/25"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
      {/* Portfolio Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Our Projects</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-white/60">
            A showcase of our recent projects
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
<<<<<<< HEAD
              { title: "Looming Heights", tag: "Android Game", color: "from-blue-500/20 to-cyan-500/20", href: "/projects/looming-heights" },
              { title: "Just Draw", tag: "Android Tool", color: "from-violet-500/20 to-fuchsia-500/20", href: "/projects/just-draw" },
=======
              { title: "Tech Startup", tag: "Startup", color: "from-blue-500/20 to-cyan-500/20", href: "/work/tech-startup" },
              { title: "Local Business", tag: "Business", color: "from-amber-500/20 to-orange-500/20", href: "/work/local-business" },
              { title: "Creative Portfolio", tag: "Portfolio", color: "from-violet-500/20 to-fuchsia-500/20", href: "/work/creative-portfolio" },
              { title: "E-Commerce Store", tag: "Business", color: "from-emerald-500/20 to-teal-500/20", href: "/work/e-commerce" },
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
            ].map((project, i) => (
              <Link
                key={i}
                href={project.href}
<<<<<<< HEAD
                className="group relative block aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
=======
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">{project.tag}</span>
                </div>
              </Link>
<<<<<<< HEAD
=======
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-white/60">
            What sets Alight Studios apart
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Rocket, title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
              { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates for every budget" },
              { icon: Palette, title: "Modern Design", desc: "Premium aesthetics that stand out" },
              { icon: TrendingUp, title: "Business Growth", desc: "Built to help your business succeed" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                  <item.icon className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-white/60">
            Ready to start your project? Contact us today.
          </p>
          <div className="mb-8 flex items-center justify-center gap-2 text-white/60">
            <Mail className="h-4 w-4" />
            <a href="mailto:cloudspace098@gmail.com" className="transition-colors hover:text-white">
              cloudspace098@gmail.com
            </a>
          </div>
          <form className="mx-auto max-w-lg space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
<<<<<<< HEAD
              required
=======
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
<<<<<<< HEAD
              required
=======
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
              required
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
<<<<<<< HEAD
              required
=======
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
              required
            />
            <LiquidButton
              type="submit"
<<<<<<< HEAD
              disabled={isSubmitting}
              size="lg"
              className="w-full text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Request"}
            </LiquidButton>
            {submitStatus === "success" && (
              <p className="text-center text-sm text-green-400">Message sent successfully! We&apos;ll get back to you soon.</p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-sm text-red-400">Failed to send message. Please try again or email us directly.</p>
=======
              disabled={formStatus === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 font-medium transition-all hover:from-violet-400 hover:to-fuchsia-400 hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Request
                </>
              )}
            </button>
            
            {/* Status messages */}
            {formStatus === "success" && (
              <p className="text-center text-sm text-emerald-400">
                Request sent successfully! We&apos;ll get back to you soon.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-center text-sm text-red-400">
                Failed to send request. Please try again or contact cloudspace098@gmail.com
              </p>
>>>>>>> 57a0d027608b33862857cf67d5229986c629c6e3
            )}
          </form>
          
          {/* How was your experience rating */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              How was your experience?
            </p>
            <RatingInteraction />
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-violet-600/20" />
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-violet-500/30 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-[100px]" />
        <div className="relative z-10 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Ready to explore our projects?</h2>
          <Link href="#contact">
            <LiquidButton size="xl" className="text-white border border-white/20 rounded-full">
              Start Now
              <ArrowRight className="h-4 w-4" />
            </LiquidButton>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm text-white/40">
            This website is created by Palla Sai Krishna (Owner)
          </p>
          <a href="mailto:cloudspace098@gmail.com" className="text-sm text-white/60 transition-colors hover:text-white">
            cloudspace098@gmail.com
          </a>
        </div>
      </footer>

      {/* Cursor effect script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('mousemove', (e) => {
              document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
              document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
            });
          `,
        }}
      />
    </div>
  )
}
