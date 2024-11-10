"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function SubscribeFeatured() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

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
        title: "You joined the Waitlist",
        description: `Thanks ${data.name}! You'll receive email when the cheatsheet is ready.`,
      });
      formRef.current?.reset();
    } else {
      toast({
        title: "Error",
        description:
          data.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div
      id="get-notified"
      className="mt-24  max-sm:rounded-none max-sm:-mx-4 my-12 bg-black text-white dark:bg-zinc-100 dark:text-black rounded-xl overflow-hidden ms:my:4"
    >
      <div className="p-14 flex items-center justify-center min-h-[400px] max-sm:p-6 max-sm:py-20">
        <div className="max-w-md w-full">
          <h2 className="text-6xl font-bold text-center mt-0 text-white dark:text-black mb-4">
            Launch Alert!
          </h2>

          <div className="text-center text-lg text-zinc-400 dark:text-zinc-600 mb-12">
            Don&apos;t miss out - subscribe to be notified when the full
            cheatsheet is available 🚀
          </div>
          <form onSubmit={handleSubmit} ref={formRef}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="my-2 bg-white/10 border-white/20 text-white placeholder:text-white/70 dark:border-black/20 dark:text-black dark:placeholder:text-black/70"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="my-2 bg-white/10 border-white/20 text-white placeholder:text-white/70 dark:border-black/20 dark:text-black dark:placeholder:text-black/70"
            />
            <Button
              type="submit"
              variant="outline"
              disabled={isLoading}
              size={"lg"}
              className="mt-6 w-full bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90 h-14 text-lg"
            >
              {isLoading ? "Joining..." : "Join the Waitlist"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
