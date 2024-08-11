"use client";

import { DATE } from "@/app/lib/constant";
import { FORMATEDATE } from "@/app/lib/utils";
import LeftArrow from "@/app/ui/assets/icons/left-arrow";
import RightArrow from "@/app/ui/assets/icons/right-arrow";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./date-filter.css";

function DateFilter() {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const locale = useLocale();
  const calendarRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("datefilter");

  const decreaseDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
  };

  const increaseDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
  };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
    setShowCalendar(false);
  };

  const checkLanguage = () => {
    switch (locale) {
      case "fr":
        return "fr";
      case "en":
        return "en";
      case "de":
        return "de";
      case "es":
        return "es";
      case "gu":
        return "gu";
      case "hi":
        return "hi";
      default:
        return "en";
    }
  };

  return (
    <div>
      <div className="flex gap-1">
        <span>{t(DATE)}</span>
        <span className="ml-5 flex justify-center items-center">
          <LeftArrow
            onClick={decreaseDate}
            color="lightgreen"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </span>
        <span className="relative" ref={calendarRef}>
          <span
            className="cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <button className="min-w-40 w-auto">
              {FORMATEDATE(date, locale)}
            </button>
          </span>
          {showCalendar && (
            <div className="absolute top-10 z-10 date-filter">
              <Calendar
                locale={checkLanguage()}
                onChange={handleDateChange}
                value={date}
                className="cursor-pointer dark:bg-black"
              />
            </div>
          )}
        </span>
        <span className="flex justify-center items-center">
          <RightArrow
            color="lightgreen"
            onClick={increaseDate}
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
}

export default DateFilter;
