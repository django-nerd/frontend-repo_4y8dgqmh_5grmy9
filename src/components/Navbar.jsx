import { useState } from 'react'
import { Menu, X, Crown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Collection', href: '#collection' },
    { label: 'Craft', href: '#craft' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 blur"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black ring-1 ring-white/10">
                  <Crown className="h-6 w-6 text-amber-300" />
                </div>
              </div>
              <span className="text-xl font-semibold tracking-widest text-white">ONYX</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#shop"
                className="rounded-full bg-gradient-to-r from-zinc-200 to-white px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:shadow-amber-400/30"
              >
                Shop Now
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#shop"
                  className="mt-2 rounded-lg bg-gradient-to-r from-zinc-200 to-white px-3 py-2 text-center text-sm font-semibold text-black"
                  onClick={() => setOpen(false)}
                >
                  Shop Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
