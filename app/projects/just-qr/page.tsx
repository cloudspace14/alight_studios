import Link from "next/link"
import { ArrowLeft, Download, Smartphone, QrCode } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export default function JustQrPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <Link href="/main" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-violet-300">Alight Studios project</p>
          <div className="mb-5 flex items-center gap-3">
            <QrCode className="h-10 w-10 text-violet-300" />
            <h1 className="text-4xl font-bold md:text-6xl">Just QR</h1>
          </div>
          <p className="mb-8 text-lg leading-8 text-white/65">
            An all-in-one Android QR creator, designer, and camera scanner. Customize QR codes with your logo, colors, and module shapes, export them in high resolution, scan codes with your camera, and revisit your creation history.
          </p>
          <div className="mb-8 flex items-center gap-2 text-sm text-white/50">
            <Smartphone className="h-4 w-4" /> Available for Android mobiles only
          </div>
          <a href="https://mediafire.com/file/bblxrs5zr0f14v9/J-QR_1.0.apk/file" target="_blank" rel="noreferrer">
            <LiquidButton size="xl" className="text-white border border-white/20 rounded-full">
              <Download className="h-4 w-4" /> Download APK
            </LiquidButton>
          </a>
        </section>
      </div>
    </main>
  )
}
