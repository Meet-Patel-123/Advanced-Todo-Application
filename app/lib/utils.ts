import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const FORMATEDATE = (date: Date, locale: string) => {
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  const dateLanguage = (key: string) => {
    switch (locale) {
      case "fr":
        return {
          today: "aujourd'hui",
          tomorrow: "demain",
          yesterday: "hier",
        }[key];
      case "en":
        return {
          today: "Today",
          tomorrow: "Tomorrow",
          yesterday: "Yesterday",
        }[key];
      case "de":
        return {
          today: "Heute",
          tomorrow: "morgen",
          yesterday: "gestern",
        }[key];
      case "es":
        return {
          today: "hoy",
          tomorrow: "mañana",
          yesterday: "ayer",
        }[key];
      case "gu":
        return {
          today: "આજે",
          tomorrow: "આવતીકાલે",
          yesterday: "ગઇકાલે",
        }[key];
      case "hi":
        return {
          today: "आज",
          tomorrow: "कल",
          yesterday: "पिछले दिन",
        }[key];
      default:
        return {
          today: "Today",
          tomorrow: "Tomorrow",
          yesterday: "Yesterday",
        }[key];
    }
  };

  if (isSameDate(date, currentDate)) {
    return `${dateLanguage("today")}`;
  } else if (isSameDate(date, tomorrowDate)) {
    return `${dateLanguage("tomorrow")}`;
  } else if (isSameDate(date, yesterdayDate)) {
    return `${dateLanguage("yesterday")}`;
  } else {
    return `${date.toLocaleString(locale, {
      weekday: "short",
    })} -  ${date.toLocaleString(locale, {
      month: "short",
      day: "numeric",
    })}, ${date.getFullYear()}`;
  }
};

const isSameDate = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const renderDate = (
  locale: string,
  type: string,
  MACROGOALS: string,
  MEZZOGOALS: string
) => {
  const date = new Date();
  const localStringandMonth = date
    .toLocaleDateString(locale, { month: "short" })
    .toUpperCase();
  const newDateIncrement = new Date(date.getFullYear(), date.getMonth() + 2)
    .toLocaleDateString(locale, { month: "short" })
    .toUpperCase();
  if (type === MACROGOALS) {
    return localStringandMonth + " - " + newDateIncrement;
  } else if (type === MEZZOGOALS) {
    return localStringandMonth;
  } else {
    return "";
  }
};
