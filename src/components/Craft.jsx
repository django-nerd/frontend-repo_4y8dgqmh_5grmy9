import { motion } from 'framer-motion'

export default function Craft() {
  const features = [
    {
      title: 'Italian Supima Cotton',
      desc: 'Ultra‑long staple fibers spun for density, drape and longevity.',
    },
    {
      title: 'Hand‑Finished',
      desc: 'Edge binding, collar retention and micro stitch precision by artisans.',
    },
    {
      title: 'Engineered Fit',
      desc: 'Masculine lines that broaden the shoulders and taper the waist.',
    },
  ]

  return (
    <section id="craft" className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          The Craft
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-xl font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
