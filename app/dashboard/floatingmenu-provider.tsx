"use server";

import * as React from "react";
import UserTour from "../components/user-tour/user-tour";
import DateFilter from "../components/date-filter/date-filter";
import CurruentDaySelection from "../components/current-day-selection/current-day-selection";
import { ModeToggle } from "../components/darkmode/dark";
import FloatingMenuWrapper from "../components/floting-menu/components/floating-menu-wrapper";
import { getTranslations } from "next-intl/server";
import { HABIT_MATRIX_AI } from "../lib/constant";

export async function FloatingMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations("home");
  return (
    <>
      <main className="flex flex-col items-center justify-between p-2 w-full pt-0">
        <header className="w-full p-4 fixed border-b-2 border-light-gray bg-white dark:bg-background-header z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold w-full flex justify-center">
              {t(HABIT_MATRIX_AI)}
            </h1>
            <div className="ml-4">
              <UserTour />
            </div>
          </div>
          <div className="flex justify-between px-10">
            <DateFilter />
            <CurruentDaySelection />
          </div>
        </header>
        {children}
        <div className="fixed right-1 bottom-16 cursor-pointer rounded-full border-2 dark:hover:bg-black hover:bg-gray-100">
          <ModeToggle />
        </div>
        <FloatingMenuWrapper />
      </main>
    </>
  );
}
