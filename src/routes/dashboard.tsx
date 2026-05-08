import { useEffect } from "react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "@/firebase";

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Upload,
  TrendingUp,
  Eye,
  Heart,
  Users,
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
  Plus,
  Search,
  Bell,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AppShell } from "@/components/Sidebar";
import { AuroraBackground } from "@/components/AuroraBackground";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CreatorOS" },
      { name: "description", content: "Your AI creator command center." },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Views", value: "2.4M", change: "+18.2%", icon: Eye, color: "text-neon-cyan" },
  { label: "Engagement", value: "184K", change: "+12.4%", icon: Heart, color: "text-neon-purple" },
  { label: "Followers", value: "486K", change: "+9.1%", icon: Users, color: "text-neon-blue" },
  { label: "AI Credits", value: "8,240", change: "of 10,000", icon: Sparkles, color: "text-neon-cyan" },
];

const tools = [
  { tool: "caption", label: "Caption", icon: Type, desc: "On-brand copy" },
  { tool: "hashtag", label: "Hashtags", icon: Hash, desc: "Trending tags" },
  { tool: "hook", label: "Hooks", icon: Sparkles, desc: "Stop the scroll" },
  { tool: "thumbnail", label: "Thumbnail", icon: ImageIcon, desc: "Click magnets" },
  { tool: "reel", label: "Reel Cover", icon: Film, desc: "Cinematic covers" },
  { tool: "voice", label: "Voiceover", icon: Mic, desc: "Studio voices" },
  { tool: "editor", label: "Editor", icon: Scissors, desc: "AI cuts" },
  { tool: "music", label: "Music", icon: Music, desc: "Trending sounds" },
  { tool: "color", label: "Color", icon: Palette, desc: "Auto grading" },
  { tool: "analytics", label: "Analytics", icon: BarChart3, desc: "Insights" },
];

const chartData = Array.from({ length: 14 }, (_, i) => ({
  day: i + 1,
  views: Math.round(40 + Math.sin(i / 2) * 30 + i * 8 + Math.random() * 20),
  eng: Math.round(20 + Math.cos(i / 2) * 15 + i * 4 + Math.random() * 10),
}));

const projects = [
  { title: "Morning routine reel", type: "Reel", time: "2h ago", status: "Published" },
  { title: "Product launch teaser", type: "Video", time: "5h ago", status: "Editing" },
  { title: "Behind the scenes", type: "Carousel", time: "1d ago", status: "Draft" },
  { title: "Sunday vlog #42", type: "Video", time: "2d ago", status: "Published" },
];

function Dashboard() {
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "/login";
    }
  });

  return () => unsubscribe();
}, []);
  const [drag, setDrag] = useState(false);

  return (
    <AppShell>
      <AuroraBackground />
      <div className="relative">
        {/* Top bar */}
        <div className="sticky top-0 z-30 backdrop-blur-xl bg-background/60 border-b border-white/5">
          <div className="flex items-center justify-between px-6 lg:px-10 py-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome back, Maya</h1>
              <p className="text-sm text-muted-foreground">Here's what's happening in your studio.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 glass rounded-xl px-3 py-2 w-72">
                <Search className="size-4 text-muted-foreground" />
                <input
                  className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground/70"
                  placeholder="Search projects, tools…"
                />
                <kbd className="text-[10px] text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd>
              </div>
              <button className="size-10 glass rounded-xl flex items-center justify-center hover:bg-white/[0.08] transition">
                <Bell className="size-4" />
              </button>
              <button
  onClick={async () => {
    await signOut(auth);
    window.location.href = "/login";
  }}
  className="px-4 py-2 rounded-xl bg-red-500/20 border border-red-500/20 text-red-400 text-sm hover:bg-red-500/30 transition"
>
  Logout
</button>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-10 py-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-5 relative overflow-hidden group"
              >
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-gradient-aurora opacity-10 group-hover:opacity-25 blur-2xl transition" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
                  <s.icon className={`size-4 ${s.color}`} />
                </div>
                <div className="mt-3 text-3xl font-bold tracking-tight">{s.value}</div>
                <div className="text-xs text-neon-cyan mt-1">{s.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Upload + Chart */}
          <div className="grid lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => { e.preventDefault(); setDrag(false); }}
              className={`relative glass rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[300px] border-2 border-dashed transition-all ${
                drag ? "border-primary shadow-glow" : "border-white/10"
              }`}
            >
              <div className="size-14 rounded-2xl bg-gradient-aurora flex items-center justify-center mb-4 shadow-glow animate-float">
                <Upload className="size-6 text-white" />
              </div>
              <div className="font-semibold">Drop your video, photo, or audio</div>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                Or click to browse. Up to 4GB. We'll auto-generate everything.
              </p>
              <button className="mt-5 px-5 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:shadow-glow-purple transition">
                Browse files
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">Performance</div>
                  <div className="text-xl font-semibold">Last 14 days</div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-neon-cyan" />Views</span>
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-neon-purple" />Engagement</span>
                </div>
              </div>
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.85 0.18 200)" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="oklch(0.85 0.18 200)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.65 0.27 305)" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="oklch(0.65 0.27 305)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke="oklch(0.55 0.03 270)" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="oklch(0.55 0.03 270)" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "oklch(0.18 0.025 270)",
                        border: "1px solid oklch(1 0 0 / 0.1)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Area type="monotone" dataKey="views" stroke="oklch(0.85 0.18 200)" strokeWidth={2} fill="url(#g1)" />
                    <Area type="monotone" dataKey="eng" stroke="oklch(0.65 0.27 305)" strokeWidth={2} fill="url(#g2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* AI Tools */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className="size-4 text-neon-cyan" /> AI Tools
              </h2>
              <Link to="/workspace" className="text-sm text-muted-foreground hover:text-foreground">
                Open workspace →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {tools.map((t, i) => (
                <motion.div
                  key={t.tool}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -3 }}
                >
                  <Link
                    to="/workspace"
                    className="group relative glass rounded-2xl p-4 block overflow-hidden hover:border-white/20 transition-all"
                  >
                    <div className="absolute -inset-px rounded-2xl bg-gradient-aurora opacity-0 group-hover:opacity-30 blur-xl transition" />
                    <div className="relative">
                      <div className="size-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center mb-3">
                        <t.icon className="size-5 text-neon-cyan" />
                      </div>
                      <div className="text-sm font-medium">{t.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t.desc}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects + Quick actions */}
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent projects</h2>
                <button className="text-xs text-muted-foreground hover:text-foreground">View all</button>
              </div>
              <div className="divide-y divide-white/5">
                {projects.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between py-3 hover:bg-white/[0.02] -mx-2 px-2 rounded-lg transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center">
                        <Film className="size-4 text-neon-cyan" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{p.title}</div>
                        <div className="text-xs text-muted-foreground">{p.type} · {p.time}</div>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border ${
                        p.status === "Published"
                          ? "border-neon-cyan/30 text-neon-cyan bg-neon-cyan/10"
                          : p.status === "Editing"
                          ? "border-neon-purple/30 text-neon-purple bg-neon-purple/10"
                          : "border-white/10 text-muted-foreground"
                      }`}
                    >
                      {p.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="size-4 text-neon-cyan" /> Quick actions
              </h2>
              <div className="space-y-2">
                {[
                  "Generate caption from last video",
                  "Find trending sounds in your niche",
                  "Create thumbnail variants (A/B)",
                  "Auto-edit latest reel",
                ].map((q, i) => (
                  <button
                    key={q}
                    className="w-full text-left flex items-center justify-between px-4 py-3 rounded-xl glass hover:bg-white/[0.08] hover:border-white/20 transition text-sm group"
                  >
                    <span className="text-foreground/90">{q}</span>
                    <Plus className="size-4 text-muted-foreground group-hover:text-neon-cyan group-hover:rotate-90 transition" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
