import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "@/components/AuthCard";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — CreatorOS" },
      { name: "description", content: "Join CreatorOS and start creating with AI." },
    ],
  }),
  component: () => <AuthCard mode="signup" />,
});
