"use client";
import {
  IMPORTANT,
  IS_IMPORTANT,
  IS_NOTIMPORTANT,
  IS_NOTURGENT,
  IS_URGENT,
  NO_DATA_FOUND,
  NOT,
  NOT_URGENT,
  SCHEDULE,
  URGENT,
} from "@/app/lib/constant";
import { ItemValue } from "@/app/lib/interface/types";
import ListView from "@/app/ui/assets/icons/listview-icon";
import { useTranslations } from "next-intl";
import ViewBox from "./viewBox";

export default function GridView({
  setIsScheduleShow,
  itemValue,
}: {
  setIsScheduleShow: (isScheduleShow: boolean) => void;
  itemValue: ItemValue[];
}) {
  const t = useTranslations("Schedule");

  const filteredItems = itemValue.filter(
    (item) => item.task && item.task.trim() !== ""
  );

  const important_urgent = filteredItems.filter(
    (item) => item.isImportant === IS_IMPORTANT && item.isUrgent === IS_URGENT
  );
  const important_notUrgent = filteredItems.filter(
    (item) => item.isImportant === IS_IMPORTANT && item.isUrgent === IS_NOTURGENT
  );
  const notImportant_urgent = filteredItems.filter(
    (item) => item.isImportant === IS_NOTIMPORTANT && item.isUrgent === IS_URGENT
  );
  const notImportant_notUrgent = filteredItems.filter(
    (item) =>
      item.isImportant === IS_NOTIMPORTANT && item.isUrgent === IS_NOTURGENT
  );
  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center pb-2 border-b-2 border-light-gray-high-opecity">
        <span>{t(SCHEDULE)}</span>
        <span
          onClick={() => {
            setIsScheduleShow(true);
          }}
        >
          <ListView />
        </span>
      </div>
      {filteredItems.length > 0 ? (
        <div className="py-4">
          <div className="flex justify-evenly">
            <span>{t(URGENT)}</span>
            <span>{t(NOT_URGENT)}</span>
          </div>
          <div className="flex flex-col">
            <div className="gap-2 w-full flex">
              <div className="flex w-1/12 items-center">
                <span className="-rotate-90">{t(IMPORTANT)}</span>
              </div>
              {/* //------------------ urgent + important------------------- */}
              <div className="flex flex-col w-7/12 gap-2 px-2 py-8">
                {important_urgent.map((item) => {
                  return <ViewBox item={item} key={item.id} />;
                })}
              </div>
              {/* //------------------  NotUrgent + important------------------- */}
              <div className="border"/>
              <div className="flex flex-col w-7/12 gap-2 px-2 py-8">
                {important_notUrgent.map((item) => {
                  return <ViewBox item={item} key={item.id} />;
                })}
              </div>
            </div>
            <div className="border"/>
            {/* //------------------  Urgent + Not important------------------- */}
            <div className="flex w-full gap-2">
              <div className="flex w-1/12 flex-col-reverse gap-9 justify-center items-center">
                <span className="-rotate-90">{t(NOT)}</span>
                <span className="-rotate-90">{t(IMPORTANT)}</span>
              </div>
              <div className="flex flex-col w-7/12 gap-2 px-2 py-8">
                {notImportant_urgent.map((item) => {
                  return <ViewBox item={item} key={item.id} />;
                })}
              </div>
              {/* //------------------ Not Urgent + Not important------------------- */}
              <div className="border"/>
              <div className="flex flex-col w-7/12 gap-2 px-2 py-8">
                {notImportant_notUrgent.map((item) => {
                  return <ViewBox item={item} key={item.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100dvh)] text-2xl font-semibold">
          {t(NO_DATA_FOUND)}
        </div>
      )}
    </div>
  );
}
