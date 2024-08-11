"use client"
import { DISTRACTED, FOCUSED, PARTIALLY_FOCUSED, UNFOCUS, WAS_I_FOCUSED } from "@/app/lib/constant";
import { ItemValue } from "@/app/lib/interface/types";
import DistractedBlue from "@/app/ui/assets/icons/distracted-blue";
import FocusedBlue from "@/app/ui/assets/icons/focused-blue";
import UnFocus from "@/app/ui/assets/icons/unfocus";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/ui/tooltip/tooltip";
import { useTranslations } from "next-intl";
import React from "react";

export default function ViewBox({ item }: { item: ItemValue }) {
    const t = useTranslations("Schedule");
    const {hr,id,isFocus,isImportant,isUrgent,min,period,task} = item || {}
  return (
    <div className="border-[2.5px] border-light-gray" key={id}>
      <div className="p-2 flex justify-between -center border-b-2 border-light-gray-high-opecity">
        <p>
          {hr}:{min}
          {period}
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span>
                {isFocus === FOCUSED ? (
                  <UnFocus />
                ) : isFocus === PARTIALLY_FOCUSED ? (
                  <FocusedBlue />
                ) : isFocus === DISTRACTED ? (
                  <DistractedBlue />
                ) : (
                  <UnFocus />
                )}
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black">
              {isFocus=== FOCUSED ? (
                <span>{t(UNFOCUS)}</span>
              ) : isFocus === PARTIALLY_FOCUSED ? (
                <span>{t(FOCUSED)}</span>
              ) : isFocus === DISTRACTED ? (
                <span>{t(DISTRACTED)}</span>
              ) : (
                <span>{t(UNFOCUS)}</span>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="p-2">{task}</div>
    </div>
  );
}
