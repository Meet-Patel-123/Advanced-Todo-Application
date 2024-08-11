"use client";

import { TourProvider, useTour } from "@reactour/tour";
import React, { useEffect } from "react";
import { useStepContent } from "./lib/steps";
import {disableBodyScroll,enableBodyScroll} from 'body-scroll-lock'

function TutorialProvider({ children }: { children: React.ReactNode }) {
  const { steps } = useStepContent();
  const disableBody = (target:any) => disableBodyScroll(target);
  const enableBody = (target:any) => enableBodyScroll(target);
  const styles = {
    popover: (base: any) => ({
      ...base,
      color: "black",
      dark: "white",
      width: "auto",
      height: "auto",
      border: "1px solid black",
      paddingRight: "40px",
    }),
    close: (base: any) => ({
      ...base,
      width: "12px",
      hight: "12px",
    }),
  };

  const FirstVisit = () => {
    const { setIsOpen } = useTour();
    useEffect(() => {
      const isFirstVisit = localStorage.getItem("userfirstVisit");
      if (!isFirstVisit) {
        localStorage.setItem("userfirstVisit", "true");
        setIsOpen(true);
      }
    }, [setIsOpen]);

    return null;
  };

  return (
    <TourProvider
      steps={steps}
      afterOpen={disableBody}
      beforeClose={enableBody}
      padding={{
        mask: 8,
      }}
      showBadge={false}
      scrollSmooth
      styles={styles}
      onClickMask={({ setCurrentStep, currentStep, steps, setIsOpen }) => {
        if (steps) {
          if (currentStep === steps.length - 1) {
            setIsOpen(false);
          }
          setCurrentStep((s) => (s === steps.length - 1 ? 0 : s + 1));
        }
      }}
    >
      <FirstVisit />
      {children}
    </TourProvider>
  );
}

export default TutorialProvider;
