import { getUserLocale } from "@/locale";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextIntlProvider from "./nextIntl-provider";
import { ThemeProvider } from "./theme-provider";
import TutorialLanguageWrapper from "./tutorial-language-wrapper";
import TutorialProvider from "./tutorial-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habit Matrix AI",
  description:
    "Habit Matrix AI is a habit tracking app that uses AI to help you build better habits.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlProvider locale={locale}>
            <TutorialProvider>
              <TutorialLanguageWrapper>{children}</TutorialLanguageWrapper>
            </TutorialProvider>
          </NextIntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
