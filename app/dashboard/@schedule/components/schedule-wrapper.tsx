"use client";

import GridView from "@/app/components/grid-view/gridView";
import Schedule from "@/app/components/schedule/schedule";
import { ItemValue } from "@/app/lib/interface/types";
import React, { useState } from "react";

export default function ScheduleWrapper() {
  const [isScheduleShow, setIsScheduleShow] = useState(true);
  const [itemValue, setItemValue] = useState<ItemValue[]>([] as ItemValue[]);
  return (
    <div>
      {isScheduleShow ? (
        <Schedule
          startTime="6AM"
          duration="13H"
          setIsScheduleShow={setIsScheduleShow}
          setItemValue={setItemValue}
          itemValue={itemValue}
        />
      ) : (
        <GridView setIsScheduleShow={setIsScheduleShow} itemValue={itemValue} />
      )}
    </div>
  );
}
