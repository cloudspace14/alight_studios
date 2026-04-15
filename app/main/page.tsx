"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Globe, Layout, Smartphone, Zap, Rocket, DollarSign, Palette, TrendingUp, Mail, Send, ArrowRight, Star } from "lucide-react"

export default function MainPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
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
            We build professional websites for businesses that want to grow online.
          </p>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">What We Offer</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-white/60">
            Comprehensive web solutions tailored to your business needs
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe, title: "Full Website Creation", desc: "Complete end-to-end website development from concept to launch" },
              { icon: Layout, title: "Business Websites", desc: "Professional sites that establish credibility and drive conversions" },
              { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts that work flawlessly on all devices" },
              { icon: Zap, title: "Performance Optimization", desc: "Lightning-fast load times for better user experience and SEO" },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <service.icon className="relative mb-4 h-10 w-10 text-violet-400 transition-transform group-hover:scale-110" />
                <h3 className="relative mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="relative text-sm text-white/60">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Simple Pricing</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-white/60">
            Transparent pricing with no hidden fees
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20">
              <h3 className="mb-2 text-xl font-semibold">Basic Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹250</span>
                <span className="text-white/60"> one-time</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  Subdomain only
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  Basic design
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  No database
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  Normal delivery speed
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full rounded-full border border-white/20 py-3 text-center font-medium transition-all hover:bg-white/10"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20">
              <h3 className="mb-2 text-xl font-semibold">Pro Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹250</span>
                <span className="text-white/60"> + ₹75 first month</span>
                <p className="mt-1 text-sm text-white/50">₹60/month maintenance</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Custom domain support
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Database integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Faster delivery priority
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Professional design
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full rounded-full border border-white/20 py-3 text-center font-medium transition-all hover:bg-white/10"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-violet-500/50 bg-gradient-to-b from-violet-950/30 to-violet-950/10 p-8 shadow-xl shadow-violet-500/20 transition-all hover:border-violet-400/70 hover:shadow-violet-500/30">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="mb-4 flex items-center gap-2">
                <h3 className="text-xl font-semibold">Premium Plan</h3>
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-300">Popular</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹375</span>
                <span className="text-white/60"> + ₹80 first month</span>
                <p className="mt-1 text-sm text-white/50">₹75/month maintenance</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Star className="h-3 w-3 text-violet-400" />
                  Custom domain
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-3 w-3 text-violet-400" />
                  Advanced premium design
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-3 w-3 text-violet-400" />
                  Database support
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-3 w-3 text-violet-400" />
                  Highest priority delivery
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 text-center font-medium transition-all hover:from-violet-400 hover:to-fuchsia-400 hover:shadow-lg hover:shadow-violet-500/25"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Our Work</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-white/60">
            A showcase of our recent projects
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tech Startup", tag: "Startup", color: "from-blue-500/20 to-cyan-500/20" },
              { title: "Local Business", tag: "Business", color: "from-amber-500/20 to-orange-500/20" },
              { title: "Creative Portfolio", tag: "Portfolio", color: "from-violet-500/20 to-fuchsia-500/20" },
              { title: "E-Commerce Store", tag: "Business", color: "from-emerald-500/20 to-teal-500/20" },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">{project.tag}</span>
                </div>
              </div>
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
          <form className="mx-auto max-w-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 font-medium transition-all hover:from-violet-400 hover:to-fuchsia-400 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <Send className="h-4 w-4" />
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-violet-600/20" />
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-violet-500/30 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-[100px]" />
        <div className="relative z-10 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Ready to Build Your Website?</h2>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-violet-500/25"
          >
            Start Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm text-white/40">
            This website is created by Palla Sai Krishna (Developer) and Vakkalagedda Pardhu (Entrepreneur)
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
