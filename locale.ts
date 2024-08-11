"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "language";

export async function getUserLocale(): Promise<string> {
  const defaultLocale = "en";
  const cookieValue = cookies().get(COOKIE_NAME)?.value;
  return cookieValue || defaultLocale;
}

export async function ChangeLanguage(language: string): Promise<void> {
  cookies().set(COOKIE_NAME, language);
}
