import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { FloatingMenuProvider } from "./floatingmenu-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habit Matrix AI",
  description:
    "Habit Matrix AI is a habit tracking app that uses AI to help you build better habits.",
};

export default async function RootLayout({
  schedule,
  reflectiontask,
  readingtask,
  macromezzogoals,
  microtasks,
  habits,
}: Readonly<{
  schedule: React.ReactNode;
  reflectiontask: React.ReactNode;
  readingtask: React.ReactNode;
  macromezzogoals: React.ReactNode;
  microtasks: React.ReactNode;
  habits: React.ReactNode;
}>) {
  return (
    <FloatingMenuProvider>
      <section className="w-full flex justify-between gap-12 p-5 px-14 pt-32">
        <div className="flex flex-col w-full">{schedule}</div>
        <div className="w-full flex flex-col justify-between">
          {macromezzogoals}
          {microtasks}
          {readingtask}
        </div>
      </section>
      <section className="w-full flex justify-between gap-12 mt-14 px-14">
        <div className="flex w-full" data-tut="ninth-step">
          {habits}
        </div>
        <div className="w-full">{reflectiontask}</div>
      </section>
    </FloatingMenuProvider>
  );
}
