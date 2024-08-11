import { LOGIN_NOW } from "@/app/lib/constant";
import { Button } from "@/app/ui/button/button";
import { useTranslations } from "next-intl";
import React from "react";

export default function LoginButton() {
  const t = useTranslations("Auth");
  return (
    <Button
      className="text-white bg-black hover:bg-black rounded-none dark:text-white text-xs font-bold"
      type="submit"
    >
      {t(LOGIN_NOW)}
    </Button>
  );
}
