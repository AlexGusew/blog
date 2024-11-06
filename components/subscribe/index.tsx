"use client";

import { useFormStatus } from "react-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { subscribeUser } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outline"
      disabled={pending}
      className="w-full bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90"
    >
      {pending ? "Subscribing..." : "Notify Me"}
    </Button>
  );
}

export default function SubscribeFeatured() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData) {
    const result = await subscribeUser(formData);
    if (result.success) {
      toast({
        title: "Subscription Confirmed!",
        description: `Thanks ${result.name}! We'll notify you when the cheatsheet is ready.`,
      });
      formRef.current?.reset();
    } else {
      toast({
        title: "Error",
        description:
          result.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="my-12 bg-black text-white dark:bg-white dark:text-black rounded-xl overflow-hidden">
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-2 text-center">Stay Informed</h2>
          <p className="text-lg mb-6 text-center">
            Get notified when our comprehensive cheatsheet is complete. Be the
            first to access this valuable resource!
          </p>
          <form action={clientAction} ref={formRef} className="space-y-4">
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
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}
