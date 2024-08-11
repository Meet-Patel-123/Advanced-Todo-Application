"use client";

import {
  DIGIT,
  DISTRACTED,
  FOCUSED,
  IS_IMPORTANT,
  IS_IT_IMPORTANT,
  IS_IT_NOT_IMPORTANT,
  IS_IT_NOT_URGENT,
  IS_IT_URGENT,
  IS_NOTIMPORTANT,
  IS_NOTURGENT,
  IS_URGENT,
  PARTIALLY_FOCUSED,
  SCHEDULE,
  WAS_I_FOCUSED,
} from "@/app/lib/constant";
import { ItemValue, ScheduleProps, Segments } from "@/app/lib/interface/types";
import DistractedBlue from "@/app/ui/assets/icons/distracted-blue";
import FocusedBlue from "@/app/ui/assets/icons/focused-blue";
import GridViewIcon from "@/app/ui/assets/icons/gridview-icon";
import ImportantBlack from "@/app/ui/assets/icons/important-black";
import ImportantBlue from "@/app/ui/assets/icons/important-blue";
import InfoIcon from "@/app/ui/assets/icons/info-icon";
import UnFocus from "@/app/ui/assets/icons/unfocus";
import UrgentBlack from "@/app/ui/assets/icons/urgent-black";
import UrgentBlue from "@/app/ui/assets/icons/urgent-blue";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip/tooltip";
import { Input } from "../ui/input/input";
import { scheduleSchema } from "../validation";

export default function Schedule({
  startTime,
  duration,
  itemValue,
  setIsScheduleShow,
  setItemValue,
}: ScheduleProps) {
  const t = useTranslations("Schedule");
  const d = useTranslations("stepcontent");
  const initData = [] as ItemValue[];

  let durationHr = duration;
  let numericDuration = parseInt(durationHr.replace(DIGIT, ""));

  let startTimeHr = startTime;
  let numericStartTime = parseInt(startTimeHr.replace(DIGIT, ""));
  let startPeriod = startTime.includes("PM") ? "P" : "A";

  let currentHour = numericStartTime;
  let currentMinute = 0;
  let currentPeriod = startPeriod;

  const [inputs, setInputs] = useState(Array(numericDuration * 2).fill(false));
  const [lineSegments, setLineSegments] = useState<Segments[]>(
    [] as Segments[]
  );

  useEffect(() => {
    form.reset({ items: initData });
    setInputs(Array(numericDuration * 2).fill(false));
  }, [startTime, duration, numericDuration]);

  for (let index = 0; index < numericDuration * 2; index++) {
    const hr = currentHour;
    const min = currentMinute;
    const period = currentPeriod;

    const initTimeData = {
      id: index + 1,
      hr,
      min,
      period,
      task: "",
      isImportant: IS_NOTIMPORTANT,
      isUrgent: IS_NOTURGENT,
      isFocus: FOCUSED,
    };
    initData.push(initTimeData);

    currentMinute += 3;
    if (currentMinute >= 6) {
      currentMinute = 0;
      currentHour += 1;
    }
    if (currentHour > 12) {
      currentHour = 1;
      currentPeriod = currentPeriod === "A" ? "P" : "A";
    }
  }

  const formSchema = z.object({
    items: z.array(scheduleSchema).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      items: initData,
    },
    mode: "all",
  });
  const { control, setValue } = form;

  const { fields, update } = useFieldArray({
    control,
    name: "items",
  });

  const handleChange = (index: number, temp: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = !!value;
    setInputs(newInputs);

    const segments: Segments[] = [];
    let start = null;

    for (let i = 0; i <= newInputs.length; i++) {
      if (newInputs[i]) {
        if (start !== null) {
          segments.push({ start, end: i });
          start = null;
        }
        segments.push({ start: i, end: i });
      } else {
        if (start === null && i < newInputs.length) {
          start = i;
        }
      }
    }

    if (start !== null) {
      segments.push({ start, end: newInputs.length });
    }

    setLineSegments(segments);
  };

  const handleOnClickGridView = () => {
    const item = form.getValues("items");
    setIsScheduleShow(false);
    if (item?.length) {
      setItemValue(item);
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center pb-2 border-b-2 border-light-gray-high-opecity">
        <span>{t(SCHEDULE)}</span>
        <span
          onClick={() => {
            handleOnClickGridView();
          }}
        >
          <GridViewIcon />
        </span>
      </div>
      <div>
        <Form {...form}>
          <form>
            {fields.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="grid grid-cols-12 gap-2 border-b-2 border-light-gray-high-opecity">
                    <span className="col-span-1 flex items-center text-sm font-medium text-black dark:text-white">
                      {item.hr}:{item.min}
                      {item.period}
                    </span>
                    <div className="col-span-10 border-r-2 border-light-gray">
                      <div>
                        <div className="flex focus-within:bg-input-focus-color">
                          <div className="w-full flex-col relative">
                            <div className="flex">
                              <div className="w-full pl-1">
                                <FormField
                                  name={`items.${index}.task`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            className="w-full rounded-none h-7 border-0 text-primary font-semibold focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                                            {...field}
                                            onChange={(e: any) => {
                                              setValue(
                                                `items.${index}.task`,
                                                (item.task = e.target.value)
                                              );
                                              handleChange(
                                                index,
                                                1,
                                                e.target.value
                                              );
                                            }}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    );
                                  }}
                                />
                              </div>
                              <div className="absolute">
                                {lineSegments.map((segment, segmentIndex) => {
                                  return (
                                    <div key={segmentIndex}>
                                      {index === segment.start && (
                                        <motion.div
                                          key={segmentIndex}
                                          initial={{ height: 0 }}
                                          animate={{
                                            height: `${
                                              (segment.end - segment.start) *
                                              32.3
                                            }px`,
                                          }}
                                          transition={{ duration: 1 }}
                                          className="absolute left-1.5 w-[2px] bg-blue-300"
                                        >
                                          {segment.end - segment.start !==
                                            0 && (
                                            <div className="text-xs pl-1 text-blue-300 font-semibold">
                                              {(segment.end -
                                                segment.start +
                                                1) *
                                                0.5}
                                              h
                                            </div>
                                          )}
                                          {segment.end - segment.start !==
                                            0 && (
                                            <div className="h-1.5 w-1.5 bg-blue-300 absolute rounded-full -top-px -left-0.5"></div>
                                          )}
                                          {segment.end - segment.start !==
                                            0 && (
                                            <div className="absolute -bottom-[1px] -left-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-blue-300"></div>
                                          )}
                                        </motion.div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              <FormField
                                name={`items.${index}.isImportant`}
                                control={control}
                                render={({ field }) => {
                                  return (
                                    <FormItem>
                                      <FormControl>
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger>
                                              <span
                                                onClick={() => {
                                                  update(index, {
                                                    ...item,
                                                    isImportant:
                                                      item.isImportant ===
                                                      IS_NOTIMPORTANT
                                                        ? IS_IMPORTANT
                                                        : IS_NOTIMPORTANT,
                                                  });
                                                }}
                                                {...field}
                                              >
                                                {field.value ===
                                                IS_IMPORTANT ? (
                                                  <ImportantBlue />
                                                ) : (
                                                  <ImportantBlack />
                                                )}
                                              </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white text-black">
                                              {field.value === IS_IMPORTANT ? (
                                                <span>
                                                  {t(IS_IT_IMPORTANT)}
                                                </span>
                                              ) : (
                                                <span>
                                                  {t(IS_IT_NOT_IMPORTANT)}
                                                </span>
                                              )}
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  );
                                }}
                              />
                              <FormField
                                name={`items.${index}.isUrgent`}
                                control={control}
                                render={({ field }) => {
                                  return (
                                    <FormItem>
                                      <FormControl>
                                        <TooltipProvider>
                                          <Tooltip>
                                            <TooltipTrigger>
                                              <span
                                                onClick={() => {
                                                  update(index, {
                                                    ...item,
                                                    isUrgent:
                                                      item.isUrgent ===
                                                      IS_NOTURGENT
                                                        ? IS_URGENT
                                                        : IS_NOTURGENT,
                                                  });
                                                }}
                                                {...field}
                                              >
                                                {field.value === IS_URGENT ? (
                                                  <UrgentBlue />
                                                ) : (
                                                  <UrgentBlack />
                                                )}
                                              </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white text-black">
                                              {field.value === IS_NOTURGENT ? (
                                                <span>{t(IS_IT_URGENT)}</span>
                                              ) : (
                                                <span>
                                                  {t(IS_IT_NOT_URGENT)}
                                                </span>
                                              )}
                                            </TooltipContent>
                                          </Tooltip>
                                        </TooltipProvider>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  );
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      <div className="flex gap-1 items-center">
                        <FormField
                          name={`items.${index}.isFocus`}
                          control={control}
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormControl>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <span
                                          onClick={() => {
                                            update(index, {
                                              ...item,
                                              isFocus:
                                                item.isFocus === FOCUSED
                                                  ? PARTIALLY_FOCUSED
                                                  : item.isFocus ===
                                                    PARTIALLY_FOCUSED
                                                  ? DISTRACTED
                                                  : item.isFocus === DISTRACTED
                                                  ? FOCUSED
                                                  : FOCUSED,
                                            });
                                          }}
                                          {...field}
                                        >
                                          {field.value === FOCUSED ? (
                                            <UnFocus />
                                          ) : field.value ===
                                            PARTIALLY_FOCUSED ? (
                                            <FocusedBlue />
                                          ) : field.value === DISTRACTED ? (
                                            <DistractedBlue />
                                          ) : (
                                            <UnFocus />
                                          )}
                                        </span>
                                      </TooltipTrigger>
                                      <TooltipContent className="bg-white text-black">
                                        {field.value === FOCUSED ? (
                                          <span>{t(WAS_I_FOCUSED)}</span>
                                        ) : field.value ===
                                          PARTIALLY_FOCUSED ? (
                                          <span>{t(FOCUSED)}</span>
                                        ) : field.value === DISTRACTED ? (
                                          <span>{t(DISTRACTED)}</span>
                                        ) : (
                                          <span>{t(WAS_I_FOCUSED)}</span>
                                        )}
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </form>
        </Form>
      </div>
    </div>
  );
}
