import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Craft from './components/Craft'
import Experience from './components/Experience'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <Craft />
        <Experience />
        <section id="contact" className="bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h3 className="text-3xl font-semibold tracking-tight">Join the Onyx Circle</h3>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-400">Early access to drops, limited colors, and private fittings. For men who prefer premium.</p>
            <form className="mx-auto mt-8 flex max-w-md items-center gap-3">
              <input type="email" placeholder="Enter your email" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-zinc-400 focus:border-amber-300 focus:outline-none" />
              <button className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-200 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-amber-500/30">Notify Me</button>
            </form>
            <p className="mt-6 text-xs text-zinc-500">By subscribing you agree to Onyx’s terms & privacy.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Onyx. All rights reserved.
      </footer>
    </div>
  )
}

export default App
