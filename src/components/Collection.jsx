import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'ONYX Signature Crew',
    color: 'Jet Black',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'ONYX Supima Pro',
    color: 'Graphite',
    price: '$220',
    image: 'https://images.unsplash.com/photo-1669028991839-0eec010aba9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPTllYJTIwU3VwaW1hJTIwUHJvfGVufDB8MHx8fDE3NjM2NTI3OTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'ONYX Luxe Tee',
    color: 'Obsidian',
    price: '$260',
    image: 'https://images.unsplash.com/photo-1602810318383-8a6f9678a802?q=80&w=1600&auto=format&fit=crop'
  },
]

export default function Collection() {
  return (
    <section id="collection" className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#f59e0b11,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">This Season's Drop</h2>
          <a href="#shop" className="text-sm font-semibold text-amber-300 hover:text-amber-200">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href="#shop"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm text-zinc-400">{p.color}</p>
                  <p className="text-lg font-medium text-white">{p.name}</p>
                </div>
                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300 ring-1 ring-amber-300/30">{p.price}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
