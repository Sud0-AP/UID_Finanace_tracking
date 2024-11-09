"use client"; // Add this to mark the component as a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
