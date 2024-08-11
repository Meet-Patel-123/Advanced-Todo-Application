"use client";

import {
  AM,
  DURATION,
  LANGUAGE,
  PM,
  SETTING,
  START_TIME,
  THEME,
} from "@/app/lib/constant";
import { ChangeLanguage } from "@/locale";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select/select";

function FlotingMenu({
  isModelOpen,
  modelHide,
  setStartTime,
  startTime,
  setDuration,
}: {
  isModelOpen: boolean;
  modelHide: () => void;
  setStartTime: (startTime: string) => void;
  startTime: string;
  setDuration: (duration: string) => void;
}) {
  const locale = useLocale();
  const { setTheme, theme } = useTheme();
  const t = useTranslations("flotingMenu");
  const LANGUAGES = [
    { value: "en", label: "English (English)" },
    { value: "es", label: "Spanish (Española)" },
    { value: "hi", label: "Hindi (हिंदी)" },
    { value: "de", label: "German (Deutsch)" },
    { value: "fr", label: "French (Français)" },
    { value: "gu", label: "Gujarati (ગુજરાતી)" },
  ];

  const [selectedLanguageObject] = LANGUAGES.filter(
    (language) => language.value === locale
  );
  const { label: showLanguage } = selectedLanguageObject || {};

  return (
    <div className="right-3 bottom-14">
      <Dialog open={isModelOpen} onOpenChange={modelHide}>
        <DialogContent className="text-white dark:bg-black bg-white w-2/4 border-2 p-3 py-4">
          <DialogHeader>
            <DialogTitle className="uppercase text-base text-muted dark:text-white font-medium tracking-wide text-center border-b-2 pb-4 mx-3">
              {t(SETTING)}
            </DialogTitle>
            <div className="flex flex-col pt-2 items-center">
              <div className="flex w-full justify-end gap-3 items-center">
                <p className="uppercase text-muted dark:text-white text-xs font-bold tracking-wide">
                  {t(START_TIME)}
                </p>
                <Select
                  onValueChange={(value) => setStartTime(value)}
                  value={startTime}
                >
                  <SelectTrigger className="w-[240px] text-secondary text-xs font-bold border-none">
                    <SelectValue placeholder="12AM" />
                  </SelectTrigger>
                  <SelectContent className="text-secondary dark:bg-black bg-white font-bold border border-light-gray">
                    {[...Array(24)].map((_, index) => {
                      const hour = index % 12 === 0 ? 12 : index % 12;
                      const period = index < 12 ? AM : PM;
                      const displayValue = `${hour}${period}`;
                      return (
                        <SelectItem
                          key={index}
                          className="hover:bg-secondary hover:text-white hover:font-bold p-1 text-xs"
                          value={displayValue}
                        >
                          {displayValue}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full my-3 justify-end gap-3 items-center">
                <p className="uppercase text-muted dark:text-white text-xs font-bold tracking-wide">
                  {t(DURATION)}
                </p>
                <Select onValueChange={(value) => setDuration(value)}>
                  <SelectTrigger className="w-[240px] text-secondary text-xs font-bold border-none">
                    <SelectValue placeholder="13H" />
                  </SelectTrigger>
                  <SelectContent className="text-secondary dark:bg-black bg-white font-bold border border-light-gray">
                    {[...Array(12)].map((_, index) => {
                      const hour = index + 13;
                      const displayValue = `${hour}H`;

                      return (
                        <SelectItem
                          key={index}
                          className="hover:bg-secondary hover:text-white hover:font-bold p-1 text-xs"
                          value={displayValue}
                        >
                          {displayValue}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full justify-end gap-3 items-center">
                <p className="uppercase text-muted dark:text-white text-xs font-bold tracking-wide">
                  {t(LANGUAGE)}
                </p>
                <Select
                  onValueChange={(value) => {
                    modelHide();
                    ChangeLanguage(value);
                  }}
                >
                  <SelectTrigger className="w-[240px] text-secondary text-xs font-bold border-none">
                    <SelectValue placeholder={showLanguage || "English"} />
                  </SelectTrigger>
                  <SelectContent className="text-secondary dark:bg-black bg-white font-bold border border-light-gray">
                    {LANGUAGES.map((language, index) => (
                      <SelectItem
                        key={index}
                        className="hover:bg-secondary hover:text-white hover:font-bold p-1 text-xs"
                        value={language.value}
                      >
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FlotingMenu;
