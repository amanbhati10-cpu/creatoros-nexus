import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function FloatingNav() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/pricing", label: "Pricing" },
  ];
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,980px)]"
    >
      <div className="glass-strong rounded-2xl px-4 py-2.5 flex items-center justify-between shadow-elevated">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative size-8 rounded-lg bg-gradient-aurora animate-aurora flex items-center justify-center shadow-glow">
            <Sparkles className="size-4 text-white" />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">
            Creator<span className="text-gradient">OS</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              activeProps={{ className: "px-4 py-1.5 rounded-lg text-sm text-foreground bg-white/5" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
          >
            Get started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
