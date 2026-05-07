import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "@/components/AuthCard";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — CreatorOS" },
      { name: "description", content: "Sign in to your CreatorOS workspace." },
    ],
  }),
  component: () => <AuthCard mode="login" />,
});
