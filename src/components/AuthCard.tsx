import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/firebase";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, User, ArrowRight } from "lucide-react";
import { AuroraBackground } from "./AuroraBackground";

export function AuthCard({ mode }: { mode: "login" | "signup" }) {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const isSignup = mode === "signup";
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <AuroraBackground />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute -inset-4 bg-gradient-aurora opacity-30 blur-3xl rounded-3xl animate-aurora" />
        <div className="relative glass-strong rounded-3xl p-8 shadow-elevated">
          <Link to="/" className="flex items-center gap-2 mb-8 justify-center">
            <div className="size-9 rounded-lg bg-gradient-aurora animate-aurora flex items-center justify-center shadow-glow">
              <Sparkles className="size-4 text-white" />
            </div>
            <span className="font-display font-semibold text-xl">
              Creator<span className="text-gradient">OS</span>
            </span>
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-center">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-sm text-muted-foreground text-center mt-2">
            {isSignup ? "Start creating in seconds." : "Sign in to your workspace."}
          </p>

          <form
            className="mt-8 space-y-3"
            onSubmit={async (e) => {
             e.preventDefault();

             try {
              if (isSignup) {
               await createUserWithEmailAndPassword(
                auth, 
                email,
                password
               );

               alert("Account created 🚀");
             } else {
               await signInWithEmailAndPassword(
                auth,
                email,
                password
               );

               alert("Login successful 🚀");
              }

              window.location.href = "/dashboard";
             } catch (error: any) {
              alert(error.message);
             }
            }}
          >
            {isSignup && (
              <Field
  icon={User}
  type="text"
  placeholder="Full name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
            )}
            <Field
  icon={Mail}
  type="email"
  placeholder="you@creator.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
            <Field
  icon={Lock}
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

            <button
              type="submit"
              className="group w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-purple transition-all"
            >
              {isSignup ? "Create account" : "Sign in"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-white/10" /> OR <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-xl px-4 py-2.5 glass hover:bg-white/[0.08] transition text-sm">
              Google
            </button>
            <button className="rounded-xl px-4 py-2.5 glass hover:bg-white/[0.08] transition text-sm">
              Apple
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {isSignup ? "Already a creator? " : "New to CreatorOS? "}
            <Link
              to={isSignup ? "/login" : "/signup"}
              className="text-foreground hover:text-gradient"
            >
              {isSignup ? "Sign in" : "Create an account"}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Field({
  icon: Icon,
  ...props
}: { icon: any } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <input
        {...props}
        className="w-full rounded-xl glass pl-10 pr-3 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:shadow-glow transition-all"
      />
    </div>
  );
}
