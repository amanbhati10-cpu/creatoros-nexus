import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { FloatingNav } from "@/components/FloatingNav";
import { AuroraBackground } from "@/components/AuroraBackground";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CreatorOS" },
      { name: "description", content: "Simple, premium pricing for creators of every stage." },
      { property: "og:title", content: "CreatorOS Pricing" },
      { property: "og:description", content: "Plans for creators of every stage." },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "For creators just getting started.",
    features: ["3 AI tools", "100 generations / month", "720p exports", "Community support"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Creator Pro",
    price: "$29",
    desc: "Everything you need to grow.",
    features: [
      "All 10 AI tools",
      "Unlimited captions, hashtags, hooks",
      "4K exports & auto color",
      "Trending music access",
      "Priority AI rendering",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$99",
    desc: "For teams, agencies & studios.",
    features: [
      "Everything in Pro",
      "5 team seats",
      "Brand kits & templates",
      "API access",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <FloatingNav />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="size-3 text-neon-cyan" /> Simple pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Choose your <span className="text-gradient">creator plan</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">
            Start free. Upgrade when you outgrow it. Cancel anytime — no questions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                p.highlighted
                  ? "glass-strong border-glow shadow-glow-purple"
                  : "glass"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full bg-gradient-aurora text-white shadow-glow">
                  Most popular
                </div>
              )}
              <div className="text-sm text-muted-foreground">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>

              <Link
                to="/signup"
                className={`mt-6 block text-center rounded-xl px-5 py-3 font-medium transition ${
                  p.highlighted
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-purple"
                    : "glass hover:bg-white/[0.08]"
                }`}
              >
                {p.cta}
              </Link>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 text-neon-cyan shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
