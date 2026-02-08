"use client"

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HHeroSection() {
  return (
    <>
      <main className="[--color-primary:var(--color-indigo-500)]">
        <section className="overflow-hidden">
          <div className="py-20 md:pb-6 md:p ">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <div className="relative text-center">
                <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl">
                  Explore premium properties designed for modern living
                </h1>

                <p className="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl">
                  From luxury villas to stylish apartments and office spaces, find homes that match your lifestyle and goals.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 *:w-full sm:flex-row sm:*:w-auto">
                  <Button asChild size="lg" className="bg-neutral-900 rounded-full text-white h-14">
                    <Link href="#link">
                      <span className="text-nowrap  ">View properties</span>
                    </Link>
                  </Button>
                  <Button key={2} asChild size="lg" variant="outline" className="rounded-full h-14">
                    <Link href="#link">
                      <span className="text-nowrap">Contact us</span>
                    </Link>
                  </Button>
                </div>
              </div>

           
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
              