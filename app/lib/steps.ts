import { StepType } from "@reactour/tour";
import { useTranslations } from "next-intl";
import {
  FIRSTSTEP,
  SECONDSTEP,
  THIRDSTEP,
  FORTHSTEP,
  FIFTHSTEP,
  SIXTHSTEP,
  SEVENTHSTEP,
  EIGTHSTEP,
  NINTHSTEP,
  TENTHSTEP,
  ELEVENTHSTEP,
  TWELFTHSTEP,
  THIRTEENTHSTEP,
  FOURTEENSTEP,
} from "./constant";
import { useMemo } from "react";

export const useStepContent = () => {
  const t = useTranslations("stepcontent");
  const steps: StepType[] = useMemo(
    () => [
      {
        selector: '[data-tut="first-step"]',
        content: `${t(FIRSTSTEP)}`,
      },
      {
        selector: '[data-tut="second-step"]',
        content: t(SECONDSTEP),
      },
      {
        selector: '[data-tut="third-step"]',
        content: t(THIRDSTEP),
      },
      {
        selector: '[data-tut="forth-step"]',
        content: t(FORTHSTEP),
      },
      {
        selector: '[data-tut="fifth-step"]',
        content: t(FIFTHSTEP),
      },
      {
        selector: '[data-tut="sixth-step"]',
        content: t(SIXTHSTEP),
      },
      {
        selector: '[data-tut="seventh-step"]',
        content: t(SEVENTHSTEP),
      },
      {
        selector: '[data-tut="eigth-step"]',
        content: t(EIGTHSTEP),
      },
      {
        selector: '[data-tut="ninth-step"]',
        content: t(NINTHSTEP),
      },
      {
        selector: '[data-tut="tenth-step"]',
        content: t(TENTHSTEP),
      },
      {
        selector: '[data-tut="eleventh-step"]',
        content: t(ELEVENTHSTEP),
      },
      {
        selector: '[data-tut="twelfth-step"]',
        content: t(TWELFTHSTEP),
      },
      {
        selector: '[data-tut="thirteenth-step"]',
        content: t(THIRTEENTHSTEP),
      },
      {
        selector: '[data-tut="fourteen-step"]',
        content: t(FOURTEENSTEP),
      },
    ],
    [t]
  );

  return { steps };
};
