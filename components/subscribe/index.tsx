"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function SubscribeFeatured() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: "Subscription Confirmed!",
        description: `Thanks ${data.name}! We'll notify you when the cheatsheet is ready.`,
      });
      event.currentTarget.reset();
    } else {
      toast({
        title: "Error",
        description: data.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="my-12 bg-black text-white dark:bg-white dark:text-black rounded-xl overflow-hidden">
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-2 text-center">Stay Informed</h2>
          <p className="text-lg mb-6 text-center">
            Get notified when our comprehensive cheatsheet is complete. Be the
            first to access this valuable resource!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 dark:bg-black/10 dark:border-black/20 dark:text-black dark:placeholder:text-black/70"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 dark:bg-black/10 dark:border-black/20 dark:text-black dark:placeholder:text-black/70"
            />
            <Button
              type="submit"
              variant="outline"
              disabled={isLoading}
              className="w-full bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90"
            >
              {isLoading ? "Subscribing..." : "Notify Me"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
