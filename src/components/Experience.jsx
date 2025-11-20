import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <img
              src="https://images.unsplash.com/photo-1614854262344-1b794ae1b67f?q=80&w=1600&auto=format&fit=crop"
              alt="Tailoring"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-white">The Onyx Experience</h3>
            <p className="mt-4 text-lg text-zinc-300">
              Your tee should feel like power. We obsess over fabric tension, cut and collar structure, then finish with a velvet‑matte hand for that unmistakable premium touch.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Lifetime Stitch", "Color‑Lock Dye", "Wrinkle‑Resist", "Breathable Density"].map((f) => (
                <div key={f} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
