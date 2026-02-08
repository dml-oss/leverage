"use client";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import React from "react";

interface SessionProviderProps {
  children: React.ReactNode;
  session?: Session | null;
}

export default function SessionProviderComp({ children, session }: SessionProviderProps) {
  return (
    <>
      <SessionProvider session={session}>{children}</SessionProvider>
    </>
  );
}
