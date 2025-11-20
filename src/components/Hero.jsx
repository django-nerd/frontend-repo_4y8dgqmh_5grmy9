import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Golden aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-200/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-400/10 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-semibold tracking-tight text-white md:text-6xl"
          >
            Onyx • Luxury Menswear
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300"
          >
            Premium, precision-crafted T‑shirts for men. Minimal. Powerful. Built for those who command attention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#shop" className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-200 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-amber-500/30 transition hover:shadow-amber-400/50">
              Shop the Drop
            </a>
            <a href="#craft" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5">
              Our Craft
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-10 flex items-center gap-6 text-zinc-400"
          >
            <div className="text-amber-300">★★★★★</div>
            <p className="text-sm">Trusted by discerning men worldwide</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-square w-full"
        >
          {/* 3D Scene via Spline (fallback gradient sphere) */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl ring-1 ring-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f59e0b22,transparent_60%),radial-gradient(circle_at_70%_80%,#fde68a22,transparent_60%)]" />
            <div className="absolute inset-0">
              {/* If the 3D scene fails to load, the gradient stays elegant */}
              <Spline scene="https://prod.spline.design/6K9M3k-Placeholder/scene.splinecode" />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400/10 via-transparent to-yellow-200/10 blur" />
        </motion.div>
      </div>
    </section>
  )
}
