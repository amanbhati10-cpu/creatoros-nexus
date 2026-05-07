import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Type,
  Hash,
  Sparkles,
  Image as ImageIcon,
  Film,
  Mic,
  Scissors,
  Music,
  Palette,
  BarChart3,
  Wand2,
  Loader2,
  Copy,
} from "lucide-react";
import { AppShell } from "@/components/Sidebar";
import { AuroraBackground } from "@/components/AuroraBackground";

export const Route = createFileRoute("/workspace")({
  head: () => ({
    meta: [
      { title: "Workspace — CreatorOS" },
      { name: "description", content: "Your AI creator workspace." },
    ],
  }),
  component: Workspace,
});

const tools = [
  { id: "caption", label: "Caption", icon: Type },
  { id: "hashtag", label: "Hashtags", icon: Hash },
  { id: "hook", label: "Hook", icon: Sparkles },
  { id: "thumbnail", label: "Thumbnail", icon: ImageIcon },
  { id: "reel", label: "Reel Cover", icon: Film },
  { id: "voice", label: "Voiceover", icon: Mic },
  { id: "editor", label: "Editor", icon: Scissors },
  { id: "music", label: "Music", icon: Music },
  { id: "color", label: "Color", icon: Palette },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

const sampleOutputs: Record<string, string[]> = {
  caption: [
    "POV: you finally found the workflow that ships content while you sleep ✨",
    "3 things changed everything for me this month →",
    "If your reels aren't doing this, you're leaving views on the table.",
  ],
  hashtag: ["#creatoreconomy #aiforcreators #contentstrategy #reelsviral #grow2026 #creatorhacks #studiosetup #contentcreator"],
  hook: [
    "Stop scrolling. This will change how you create forever.",
    "I tested 47 AI tools so you don't have to.",
    "The 5-second rule that 10x'd my engagement.",
  ],
  thumbnail: ["Generating cinematic thumbnails…"],
  reel: ["Designing reel covers in your brand style…"],
  voice: ["Synthesizing voiceover in 'Aurora — soft female'…"],
  editor: ["Auto-cutting silences, adding b-roll, syncing beats…"],
  music: ["▲ 'Midnight Drive' — used in 12.4K reels this week", "▲ 'Neon Skyline' — trending in your niche"],
  color: ["Applying 'Cinematic Teal & Orange' grade…"],
  analytics: ["Best post time: Thu 7:30PM · Top format: Reels (84% reach)"],
};

function Workspace() {
  const [active, setActive] = useState("caption");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string[] | null>(null);
  const [prompt, setPrompt] = useState("");

  const generate = () => {
    setLoading(true);
    setOutput(null);
    setTimeout(() => {
      setOutput(sampleOutputs[active] ?? ["Generated."]);
      setLoading(false);
    }, 900);
  };

  const ActiveIcon = tools.find((t) => t.id === active)?.icon ?? Wand2;

  return (
    <AppShell>
      <AuroraBackground />
      <div className="relative px-6 lg:px-10 py-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-10 rounded-xl bg-gradient-aurora flex items-center justify-center shadow-glow">
            <Wand2 className="size-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">AI Workspace</h1>
            <p className="text-sm text-muted-foreground">Pick a tool. Describe what you want. Watch it happen.</p>
          </div>
        </div>

        {/* Tool tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tools.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => { setActive(t.id); setOutput(null); }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground glass"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="ws-tab"
                    className="absolute inset-0 rounded-xl bg-gradient-primary shadow-glow"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <t.icon className="relative size-4" />
                <span className="relative">{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid lg:grid-cols-5 gap-4">
          {/* Input */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <ActiveIcon className="size-4 text-neon-cyan" />
              <span>Tell the AI what you need</span>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={6}
              placeholder="e.g. A 15-second reel about morning routines for solopreneurs, tone: warm and energetic."
              className="w-full rounded-xl bg-input/40 border border-white/10 p-4 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:shadow-glow transition"
            />

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              {["Casual", "Professional", "Witty", "Cinematic"].map((tone) => (
                <button
                  key={tone}
                  className="px-3 py-2 rounded-lg glass hover:bg-white/[0.08] transition"
                >
                  {tone}
                </button>
              ))}
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-purple transition disabled:opacity-70"
            >
              {loading ? (
                <><Loader2 className="size-4 animate-spin" />Generating…</>
              ) : (
                <><Sparkles className="size-4" />Generate</>
              )}
            </button>
          </div>

          {/* Output */}
          <div className="lg:col-span-3 glass rounded-2xl p-6 min-h-[420px] relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-gradient-aurora opacity-10 blur-3xl animate-aurora" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-muted-foreground">Output</div>
                <div className="text-xs text-muted-foreground">Powered by CreatorOS AI</div>
              </div>

              <AnimatePresence mode="wait">
                {loading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-16 rounded-xl glass animate-pulse-glow" />
                    ))}
                  </motion.div>
                )}
                {!loading && output && (
                  <motion.div
                    key="output"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    {output.map((o, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="group relative glass rounded-xl p-4 flex items-start justify-between gap-4 hover:border-white/20 transition"
                      >
                        <p className="text-sm text-foreground/95 leading-relaxed">{o}</p>
                        <button
                          onClick={() => navigator.clipboard?.writeText(o)}
                          className="opacity-0 group-hover:opacity-100 transition p-1.5 rounded-lg hover:bg-white/10"
                        >
                          <Copy className="size-3.5 text-muted-foreground" />
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                {!loading && !output && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="size-16 rounded-2xl bg-gradient-aurora flex items-center justify-center shadow-glow animate-float mb-4">
                      <Sparkles className="size-7 text-white" />
                    </div>
                    <p className="font-medium">Ready when you are.</p>
                    <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                      Describe what you want and hit generate. Results appear here in seconds.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
