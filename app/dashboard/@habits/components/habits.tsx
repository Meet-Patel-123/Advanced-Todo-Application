"use client";

import {
  BAD_HABITS,
  BADHABIT,
  ELEVENTHSTEP,
  GOOD_HABITS,
  GOODHABIT,
  TENTHSTEP,
} from "@/app/lib/constant";
import CrossBlackIcon from "@/app/ui/assets/icons/cross-black-icon";
import InfoIcon from "@/app/ui/assets/icons/info-icon";
import TickedBlackIcon from "@/app/ui/assets/icons/ticked-black-icon";
import { Checkbox } from "@/app/ui/check-box/check-box";
import { UnCheckbox } from "@/app/ui/cross-check-box/cross-check-box";
import { Input } from "@/app/ui/input/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/ui/form/form";
import { habitSchema } from "@/app/components/validation";

const Habits = ({ type, margin }: { type: string; margin: string }) => {
  const t = useTranslations("habits");
  const d = useTranslations("stepcontent");

  const formSchema = z.object({
    items: z.array(habitSchema).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [
        {
          fieldInput: "",
        },
        {
          fieldInput: "",
        },
        {
          fieldInput: "",
        },
      ],
    },
    mode: "all",
  });

  const { control } = form;

  const { fields } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <Form {...form}>
      <div
        className="w-full"
        data-tut={
          type === GOODHABIT
            ? "tenth-step"
            : type === BADHABIT
            ? "eleventh-step"
            : undefined
        }
      >
        <FormLabel
          className={`flex justify-start items-center gap-3 pb-2 pl-1 ${margin}`}
        >
          {type === GOODHABIT ? (
            <TickedBlackIcon className="bg-inherit" />
          ) : false || type === BADHABIT ? (
            <CrossBlackIcon className="bg-inherit" />
          ) : (
            ""
          )}
          <span className="font-bold text-sm text-muted">
            {type === GOODHABIT ? (
              <div className="flex items-center justify-center gap-3">
                <span className="font-bold text-sm text-muted">
                  {t(GOOD_HABITS)}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center">
                      <InfoIcon width={13} height={13} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white dark:bg-black max-w-60 m-2">
                      {d(TENTHSTEP)}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ) : false || type === BADHABIT ? (
              <div className="flex items-center justify-center gap-3">
                <span className="font-bold text-sm text-muted">
                  {t(BAD_HABITS)}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center">
                      <InfoIcon width={13} height={13} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white dark:bg-black max-w-60 m-2">
                      {d(ELEVENTHSTEP)}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ) : (
              ""
            )}
          </span>
        </FormLabel>
        <div className="border-t-[2.5px] border-t-light-gray outline-none border-e-muted-foreground">
          {fields.map((item, index) => {
            return (
              <div className={margin} key={item.id}>
                <FormField
                  control={form.control}
                  name={`items.${index}.fieldInput`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center justify-center h-14 pl-1 gap-3 focus-within:bg-input-focus-color border-b-2 border-b-light-gray">
                          {type == GOODHABIT ? (
                            <Checkbox
                              className="border-gray-300"
                              data-tut="twelfth-step"
                            />
                          ) : false || type == BADHABIT ? (
                            <UnCheckbox
                              className="border-gray-300"
                              data-tut="thirteenth-step"
                            />
                          ) : (
                            ""
                          )}
                          <Input className="text-primary text-sm font-semibold outline-none border-none flex justify-center items-center h-full focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Form>
  );
};

export default Habits;
