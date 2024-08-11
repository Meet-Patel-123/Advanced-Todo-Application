"use client";

import { EIGTHSTEP, READING, READING_TASK } from "@/app/lib/constant";
import InfoIcon from "@/app/ui/assets/icons/info-icon";
import { Input } from "@/app/ui/input/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../ui/form/form";
import { readingTaskSchema } from "../../../components/validation";

export default function ReadingTask({ type }: { type: string }) {
  const t = useTranslations("readingtask");
  const d = useTranslations("stepcontent");

  const formSchema = readingTaskSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
    mode: "all",
  });

  return (
    <Form {...form}>
      <form autoComplete="off">
        <div className="w-full flex flex-col gap-2" data-tut="eigth-step">
          <FormLabel className="flex font-bold text-sm text-muted">
            {type === READING ? (
              <div className="flex items-center justify-center gap-3">
                <span>{t(READING_TASK)}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center">
                      <InfoIcon width={13} height={13} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white dark:bg-black max-w-60 m-2">
                      {d(EIGTHSTEP)}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ) : (
              ""
            )}
          </FormLabel>
          <div className="border-[2.5px] border-light-gray outline-none">
            <div>
              <div className="flex items-center justify-center gap-3 h-14 p-1 focus-within:bg-input-focus-color">
                <FormField
                  control={form.control}
                  name="reading"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          className="w-full text-primary  text-sm font-semibold outline-none border-none flex justify-center items-center h-14 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
