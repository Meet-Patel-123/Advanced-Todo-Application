"use client";

import SettingIcon from "@/app/ui/assets/icons/setting-icon";
import { useState } from "react";
import FlotingMenu from "../floting-menu";

export default function FloatingMenuWrapper() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [startTime, setStartTime] = useState("6AM");
  const [duration, setDuration] = useState("13H");

  const toggleModel = () => {
    setIsModelOpen((state) => !state);
  };

  return (
    <div>
      <div
        className="fixed right-1 bottom-2 cursor-pointer"
        onClick={toggleModel}
      >
        <div className="p-2 border-2 rounded-full dark:hover:bg-black hover:bg-gray-100">
          <SettingIcon className="h-6 w-6" />
        </div>
      </div>
      {isModelOpen && (
        <FlotingMenu
          isModelOpen={isModelOpen}
          modelHide={toggleModel}
          setStartTime={setStartTime}
          setDuration={setDuration}
          startTime={startTime}
        />
      )}
    </div>
  );
}
