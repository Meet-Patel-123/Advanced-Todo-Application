"use client";

import { NextIntlClientProvider } from "next-intl";
import React from "react";
import deMessage from "./locale/de.json";
import enMessage from "./locale/en.json";
import esMessage from "./locale/es.json";
import frMessage from "./locale/fr.json";
import guMessage from "./locale/gu.json";
import hiMessage from "./locale/hi.json";

function NextIntlProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}): React.JSX.Element {
  const messages = React.useMemo(() => {
    switch (locale) {
      case "fr":
        return frMessage;
      case "es":
        return esMessage;
      case "gu":
        return guMessage;
      case "hi":
        return hiMessage;
      case "de":
        return deMessage;
      case "en":
      default:
        return enMessage;
    }
  }, [locale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Asia/Kolkata"
    >
      {children}
    </NextIntlClientProvider>
  );
}

export default NextIntlProvider;
