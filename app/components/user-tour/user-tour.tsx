"use client";

import { USER_GIUDE } from "@/app/lib/constant";
import TourIcon from "@/app/ui/assets/icons/tour-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip/tooltip";
import { useTour } from "@reactour/tour";
import { useTranslations } from "next-intl";

function UserTour() {
  const { setIsOpen } = useTour();
  const t = useTranslations("user-tour");
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex justify-center items-center">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              <TourIcon />
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-white dark:bg-black max-w-60 m-3">
            <p>{t(USER_GIUDE)}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default UserTour;
