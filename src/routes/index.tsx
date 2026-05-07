import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Type,
  Hash,
  Image as ImageIcon,
  Film,
  Mic,
  Scissors,
  Music,
  Palette,
  BarChart3,
  Wand2,
  Star,
  Play,
} from "lucide-react";
import { FloatingNav } from "@/components/FloatingNav";
import { AuroraBackground } from "@/components/AuroraBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CreatorOS — The AI Operating System for Creators" },
      {
        name: "description",
        content:
          "CreatorOS is the futuristic AI workspace for creators. Generate captions, hashtags, hooks, thumbnails, voiceovers and edit reels — all in one premium dashboard.",
      },
      { property: "og:title", content: "CreatorOS — AI for Creators" },
      {
        property: "og:description",
        content: "The premium AI workspace for the next generation of creators.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Type, title: "AI Caption Generator", desc: "On-brand captions in seconds." },
  { icon: Hash, title: "AI Hashtag Generator", desc: "Trending tags tuned to your niche." },
  { icon: Sparkles, title: "AI Hook Generator", desc: "Scroll-stopping opening lines." },
  { icon: ImageIcon, title: "AI Thumbnail Generator", desc: "Click-magnet thumbnails." },
  { icon: Film, title: "AI Reel Cover Generator", desc: "Beautiful covers, every time." },
  { icon: Mic, title: "AI Voiceover Generator", desc: "Studio-grade voices in 30+ languages." },
  { icon: Scissors, title: "AI Video Editing", desc: "Cuts, captions, b-roll — automated." },
  { icon: Music, title: "Trending Music", desc: "Sounds blowing up right now." },
  { icon: Palette, title: "Auto Color Grading", desc: "Cinematic looks in one click." },
  { icon: BarChart3, title: "Creator Analytics", desc: "See what works. Do more of it." },
];

const testimonials = [
  {
    name: "Maya Chen",
    role: "2.4M followers · Lifestyle",
    quote:
      "CreatorOS replaced 6 different tools in my workflow. My captions, hooks and thumbnails went next-level overnight.",
  },
  {
    name: "Andre Costa",
    role: "Filmmaker · 890K subs",
    quote:
      "The auto color grading and AI editor cut my post-production time in half. It feels like the future.",
  },
  {
    name: "Priya Raman",
    role: "Beauty Creator · 1.2M",
    quote:
      "I post 3x more reels now. The hook generator alone is worth the entire subscription.",
  },
];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuroraBackground />
      <FloatingNav />

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="size-1.5 rounded-full bg-neon-cyan animate-pulse-glow" />
            Now in Public Beta · 10 AI tools, 1 workspace
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            The AI operating system <br />
            <span className="text-gradient animate-aurora">for creators.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Generate, edit, and ship content at the speed of thought. CreatorOS bundles 10 cinematic AI tools into one premium workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-purple transition-all duration-500"
            >
              Launch Workspace
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 glass hover:bg-white/[0.08] transition-colors">
              <Play className="size-4" />
              Watch the demo
            </button>
          </motion.div>

          {/* Product preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mt-20"
          >
            <div className="absolute -inset-4 bg-gradient-aurora opacity-30 blur-3xl animate-aurora rounded-[3rem]" />
            <div className="relative glass-strong rounded-3xl p-3 shadow-elevated">
              <div className="rounded-2xl bg-gradient-to-br from-card to-background overflow-hidden border border-white/10">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                  <div className="size-2.5 rounded-full bg-red-500/70" />
                  <div className="size-2.5 rounded-full bg-yellow-500/70" />
                  <div className="size-2.5 rounded-full bg-green-500/70" />
                  <div className="ml-3 text-xs text-muted-foreground">creatoros.app/workspace</div>
                </div>
                <div className="grid grid-cols-12 gap-3 p-4 min-h-[420px]">
                  <div className="col-span-3 space-y-2">
                    {["Caption", "Hashtag", "Hook", "Thumbnail", "Voice", "Editor"].map((t, i) => (
                      <motion.div
                        key={t}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        className="rounded-lg px-3 py-2 text-xs glass text-left"
                      >
                        {t}
                      </motion.div>
                    ))}
                  </div>
                  <div className="col-span-9 grid grid-cols-2 gap-3">
                    {features.slice(0, 4).map((f, i) => (
                      <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="relative glass rounded-xl p-4 overflow-hidden"
                      >
                        <div className="absolute -top-10 -right-10 size-32 rounded-full bg-gradient-aurora opacity-20 blur-2xl" />
                        <f.icon className="size-5 text-neon-cyan mb-3" />
                        <div className="text-sm font-medium">{f.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{f.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neon-cyan mb-4">
              <Wand2 className="size-3.5" /> The toolkit
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ten AI superpowers. <span className="text-gradient">One workspace.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Stop juggling tabs. Every tool you need to ideate, create, and analyze — beautifully integrated.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative glass rounded-2xl p-5 overflow-hidden hover:border-white/20 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-aurora opacity-0 group-hover:opacity-30 transition-opacity blur-xl" />
                <div className="relative">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center mb-4">
                    <f.icon className="size-5 text-neon-cyan" />
                  </div>
                  <div className="font-medium">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Loved by <span className="text-gradient">millions of creators</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="size-3.5 fill-neon-cyan text-neon-cyan" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 pt-5 border-t border-white/5">
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-aurora opacity-20 blur-3xl animate-aurora rounded-full" />
          <div className="relative glass-strong rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Build the <span className="text-gradient">creator economy</span><br />of tomorrow.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Free to start. No credit card. Cancel anytime.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-purple transition-all"
            >
              Start creating free
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-gradient-aurora" />
            <span>© 2026 CreatorOS. The future of creation.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
