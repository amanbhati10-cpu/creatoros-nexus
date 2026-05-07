import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 size-[600px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.25 265), transparent 60%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 size-[700px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.28 305), transparent 60%)" }}
        animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 size-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.2 200), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
