"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Zap, Shield, Cloud, BarChart3, Users, Code, Cpu, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function TechStartupPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-[#030303] text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.03] pointer-events-none" />
      
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
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Zap className="h-4 w-4" />
            SaaS Platform
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              NexusAI
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60 md:text-xl">
            Next-generation artificial intelligence platform for enterprise automation and intelligent decision making.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
              Start Free Trial
            </button>
            <button className="rounded-full border border-white/20 px-8 py-3 font-medium transition-all hover:bg-white/10">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute left-[10%] top-[30%] rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <Cpu className="h-6 w-6 text-blue-400" />
          </div>
          <div className="absolute right-[15%] top-[25%] rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <Cloud className="h-6 w-6 text-cyan-400" />
          </div>
          <div className="absolute left-[20%] bottom-[25%] rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <Shield className="h-6 w-6 text-blue-400" />
          </div>
          <div className="absolute right-[10%] bottom-[30%] rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <BarChart3 className="h-6 w-6 text-cyan-400" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Powerful Features</h2>
            <p className="mx-auto mb-16 max-w-2xl text-white/60">
              Everything you need to transform your business with AI
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Cpu, title: "Machine Learning", desc: "Advanced ML models trained on your data for precise predictions" },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Scalable cloud architecture that grows with your needs" },
              { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption" },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards with actionable insights" },
              { icon: Users, title: "Team Collaboration", desc: "Built for teams with role-based access control" },
              { icon: Code, title: "API Integration", desc: "RESTful APIs for seamless integration" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-blue-500/50 hover:bg-white/10"
              >
                <feature.icon className="mb-4 h-10 w-10 text-blue-400" />
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "500+", label: "Enterprise Clients" },
              { value: "10M+", label: "API Calls/Day" },
              { value: "< 50ms", label: "Response Time" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/30 to-transparent p-8 md:p-12 text-center"
          >
            <Globe className="mx-auto mb-6 h-12 w-12 text-blue-400" />
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mx-auto mb-8 max-w-xl text-white/60">
              Join 500+ enterprises already using NexusAI to automate workflows and make data-driven decisions.
            </p>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
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
