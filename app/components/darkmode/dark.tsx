"use client";

import { DARK, LIGHT, SYSTEM } from "@/app/lib/constant";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Moon } from "../../ui/assets/icons/moon";
import { Sun } from "../../ui/assets/icons/sun";
import { Button } from "../../ui/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu/dropdown";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("modetoggle");
  const THEME_CLASS = {
    dark: "dark",
    light: "light",
    system: "system",
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-none border-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === THEME_CLASS.dark ? <Moon /> : <Sun />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-black" align="end">
        <DropdownMenuItem onClick={() => setTheme(THEME_CLASS.light)}>
          {t(LIGHT)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(THEME_CLASS.dark)}>
          {t(DARK)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(THEME_CLASS.system)}>
          {t(SYSTEM)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
