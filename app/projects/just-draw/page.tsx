import Link from "next/link"
import { ArrowLeft, Download, Smartphone } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export default function JustDrawPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <Link href="/main" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to projects</Link>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-violet-300">Alight Studios project</p>
          <h1 className="mb-5 text-4xl font-bold md:text-6xl">Just Draw</h1>
          <p className="mb-8 text-lg leading-8 text-white/65">A creative tracing tool developed by Alight Studios. Add a photo on your screen, position it with your camera, and trace it out with confidence.</p>
          <div className="mb-8 flex items-center gap-2 text-sm text-white/50"><Smartphone className="h-4 w-4" /> Available for Android mobiles only</div>
          <a href="https://mediafire.com/file/4v303oljudjldok/Just+Draw_1.0.apk/file" target="_blank" rel="noreferrer"><LiquidButton size="xl" className="text-white border border-white/20 rounded-full"><Download className="h-4 w-4" /> Download APK</LiquidButton></a>
        </section>
      </div>
    </main>
  )
}
