"use client";

import {
  MACRO_GOALS,
  MACROGOALS,
  MEZZO_MILESTONES,
  MEZZOGOALS,
  SECONDSTEP,
  SIXTHSTEP,
} from "@/app/lib/constant";
import { renderDate } from "@/app/lib/utils";
import CashIcon from "@/app/ui/assets/icons/cash-icon";
import ClockIcon from "@/app/ui/assets/icons/clock-icon";
import InfoIcon from "@/app/ui/assets/icons/info-icon";
import SmileIcon from "@/app/ui/assets/icons/smile-icon";
import { Input } from "@/app/ui/input/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../ui/form/form";
import { macroMezzoGoalsSchema } from "../../../components/validation";

export default function MacroMezzoGoals({ type }: { type: string }) {
  const locale = useLocale();
  const t = useTranslations("macromezzogoals");
  const d = useTranslations("stepcontent");

  const formSchema = z.object({
    items: z.array(macroMezzoGoalsSchema).optional(),
  });

  type ValidationSchema = z.infer<typeof formSchema>;
  const form = useForm<ValidationSchema>({
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
      <form autoComplete="off">
        <div
          className="w-full"
          data-tut={
            type === MACROGOALS
              ? "second-step"
              : type === MEZZOGOALS
              ? "sixth-step"
              : undefined
          }
        >
          <FormLabel className="flex justify-between pb-2">
            <div className="flex items-center justify-center gap-3 font-bold text-sm text-muted">
              <span>
                {type === MACROGOALS ? (
                  <span>{t(MACRO_GOALS)}</span>
                ) : false || type === MEZZOGOALS ? (
                  <span>{t(MEZZO_MILESTONES)}</span>
                ) : null}
              </span>
              <span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center">
                      <InfoIcon width={13} height={13} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white dark:bg-black max-w-60 m-2">
                      {type === MACROGOALS
                        ? d(SECONDSTEP)
                        : false || type === MEZZOGOALS
                        ? d(SIXTHSTEP)
                        : null}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
            </div>
            <span className="text-xs font-bold text-muted-foreground">
              {renderDate(locale, type, MACROGOALS, MEZZOGOALS)}
            </span>
          </FormLabel>
          <div className="border-[2.5px] border-light-gray outline-none w-full">
            {fields.map((item, index) => {
              return (
                <div
                  className="flex items-center h-14 pl-6 focus-within:bg-input-focus-color border-b-[2.5px] border-b-light-gray-high-opecity last:border-b-0"
                  key={item.id}
                  data-tut={
                    index === 0
                      ? "third-step"
                      : index === 1
                      ? "forth-step"
                      : index === 2
                      ? "fifth-step"
                      : undefined
                  }
                >
                  {index === 0 && (
                    <ClockIcon className="bg-inherit" height={18} width={18} />
                  )}
                  {index === 1 && (
                    <SmileIcon className="bg-inherit" height={18} width={18} />
                  )}
                  {index === 2 && (
                    <CashIcon className="bg-inherit" height={18} width={18} />
                  )}
                  <FormField
                    control={control}
                    name={`items.${index}.fieldInput`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            className="text-primary text-sm font-semibold outline-none border-none flex justify-center items-center h-14 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent pl-6"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </Form>
  );
}
