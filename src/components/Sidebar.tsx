import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Wand2,
  Hash,
  Type,
  Image as ImageIcon,
  Film,
  Mic,
  Scissors,
  Music,
  Palette,
  BarChart3,
  Settings,
  Sparkles,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/workspace", label: "Workspace", icon: Wand2 },
];

const aiTools = [
  { to: "/workspace?tool=caption", label: "Caption", icon: Type },
  { to: "/workspace?tool=hashtag", label: "Hashtags", icon: Hash },
  { to: "/workspace?tool=hook", label: "Hooks", icon: Sparkles },
  { to: "/workspace?tool=thumbnail", label: "Thumbnail", icon: ImageIcon },
  { to: "/workspace?tool=reel", label: "Reel Cover", icon: Film },
  { to: "/workspace?tool=voice", label: "Voiceover", icon: Mic },
  { to: "/workspace?tool=editor", label: "Video Editor", icon: Scissors },
  { to: "/workspace?tool=music", label: "Music", icon: Music },
  { to: "/workspace?tool=color", label: "Color Grading", icon: Palette },
  { to: "/workspace?tool=analytics", label: "Analytics", icon: BarChart3 },
];

const bottom = [
  { to: "/pricing", label: "Pricing", icon: CreditCard },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  const Item = ({ to, label, icon: Icon }: { to: string; label: string; icon: any }) => {
    const active = path === to.split("?")[0];
    return (
      <Link
        to={to.split("?")[0]}
        className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
          active
            ? "text-foreground bg-white/5"
            : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
        }`}
      >
        {active && (
          <motion.div
            layoutId="sidebar-active"
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/15 to-accent/15 border border-white/10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <Icon className="relative size-4" />
        <span className="relative">{label}</span>
      </Link>
    );
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-white/5 bg-sidebar/60 backdrop-blur-xl z-40">
      <div className="px-5 py-5 flex items-center gap-2 border-b border-white/5">
        <div className="size-8 rounded-lg bg-gradient-aurora animate-aurora flex items-center justify-center shadow-glow">
          <Sparkles className="size-4 text-white" />
        </div>
        <Link to="/" className="font-display font-semibold text-lg">
          Creator<span className="text-gradient">OS</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-6">
        <div className="space-y-0.5">
          {tools.map((t) => <Item key={t.to} {...t} />)}
        </div>
        <div>
          <div className="px-3 mb-2 text-[11px] uppercase tracking-wider text-muted-foreground/70">
            AI Tools
          </div>
          <div className="space-y-0.5">
            {aiTools.map((t) => <Item key={t.to} {...t} />)}
          </div>
        </div>
      </nav>
      <div className="p-3 border-t border-white/5 space-y-0.5">
        {bottom.map((t) => <Item key={t.to} {...t} />)}
      </div>
    </aside>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-64 min-h-screen">{children}</main>
    </div>
  );
}
