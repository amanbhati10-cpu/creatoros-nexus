import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { User, Bell, Shield, Palette, CreditCard } from "lucide-react";
import { AppShell } from "@/components/Sidebar";
import { AuroraBackground } from "@/components/AuroraBackground";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — CreatorOS" },
      { name: "description", content: "Manage your CreatorOS account." },
    ],
  }),
  component: Settings,
});

const sections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
];

function Settings() {
  const [active, setActive] = useState("profile");
  return (
    <AppShell>
      <AuroraBackground />
      <div className="relative px-6 lg:px-10 py-8 max-w-6xl">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your studio, identity and preferences.</p>

        <div className="mt-8 grid lg:grid-cols-4 gap-6">
          <aside className="space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                  active === s.id
                    ? "bg-white/5 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                }`}
              >
                <s.icon className="size-4" />
                {s.label}
              </button>
            ))}
          </aside>

          <motion.section
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 glass rounded-2xl p-8"
          >
            {active === "profile" && (
              <>
                <h2 className="text-lg font-semibold">Profile</h2>
                <p className="text-sm text-muted-foreground">How you appear across CreatorOS.</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="size-20 rounded-2xl bg-gradient-aurora animate-aurora shadow-glow" />
                  <button className="px-4 py-2 rounded-xl glass hover:bg-white/[0.08] text-sm">Upload new photo</button>
                </div>
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <Input label="Display name" value="Maya Chen" />
                  <Input label="Username" value="@maya" />
                  <Input label="Email" value="maya@creator.com" />
                  <Input label="Niche" value="Lifestyle & wellness" />
                </div>
                <button className="mt-8 px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow">
                  Save changes
                </button>
              </>
            )}
            {active === "notifications" && (
              <>
                <h2 className="text-lg font-semibold">Notifications</h2>
                <p className="text-sm text-muted-foreground">Choose what you want to hear about.</p>
                <div className="mt-6 space-y-3">
                  {["Trending sounds in your niche", "Weekly performance digest", "AI render complete", "Product updates"].map((n) => (
                    <Toggle key={n} label={n} defaultOn />
                  ))}
                </div>
              </>
            )}
            {active === "appearance" && (
              <>
                <h2 className="text-lg font-semibold">Appearance</h2>
                <p className="text-sm text-muted-foreground">CreatorOS is designed dark-first for late-night sessions.</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Aurora", "Midnight", "Neon Sunset"].map((t, i) => (
                    <div key={t} className={`relative rounded-2xl p-4 cursor-pointer ${i === 0 ? "border-glow" : "glass"}`}>
                      <div className="h-20 rounded-lg bg-gradient-aurora animate-aurora mb-3" />
                      <div className="text-sm font-medium">{t}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {active === "security" && (
              <>
                <h2 className="text-lg font-semibold">Security</h2>
                <p className="text-sm text-muted-foreground">Keep your studio safe.</p>
                <div className="mt-6 space-y-4">
                  <Input label="Current password" type="password" value="" />
                  <Input label="New password" type="password" value="" />
                  <Toggle label="Two-factor authentication" defaultOn />
                </div>
              </>
            )}
            {active === "billing" && (
              <>
                <h2 className="text-lg font-semibold">Billing</h2>
                <p className="text-sm text-muted-foreground">You're on the Creator Pro plan.</p>
                <div className="mt-6 glass rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Creator Pro</div>
                    <div className="text-sm text-muted-foreground">$29 / month · Renews May 28, 2026</div>
                  </div>
                  <button className="px-4 py-2 rounded-xl glass hover:bg-white/[0.08] text-sm">Manage</button>
                </div>
              </>
            )}
          </motion.section>
        </div>
      </div>
    </AppShell>
  );
}

function Input({ label, value, type = "text" }: { label: string; value: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</span>
      <input
        defaultValue={value}
        type={type}
        className="w-full rounded-xl bg-input/40 border border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:shadow-glow transition"
      />
    </label>
  );
}

function Toggle({ label, defaultOn = false }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between glass rounded-xl px-4 py-3">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => setOn(!on)}
        className={`relative w-11 h-6 rounded-full transition ${on ? "bg-gradient-primary shadow-glow" : "bg-white/10"}`}
      >
        <motion.span
          animate={{ x: on ? 20 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-1 size-4 rounded-full bg-white"
        />
      </button>
    </div>
  );
}
