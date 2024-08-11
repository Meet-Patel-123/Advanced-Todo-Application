"use client";

import {
  MICROTASKS,
  MICRO_TASKS,
  SEVENTHSTEP,
  TODAY,
} from "@/app/lib/constant";
import InfoIcon from "@/app/ui/assets/icons/info-icon";
import TickedBlueIcon from "@/app/ui/assets/icons/ticked-blue-icon";
import TickedGreyIcon from "@/app/ui/assets/icons/ticked-grey-icon";
import { Input } from "@/app/ui/input/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../ui/form/form";
import { microTasksSchema } from "../../../components/validation";

const MicrotTasks = ({
  type,
  duration,
}: {
  type: string;
  duration: string;
}) => {
  const t = useTranslations("microttasks");
  const d = useTranslations("stepcontent");

  const formSchema = z.object({
    items: z.array(microTasksSchema).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [
        {
          fieldInput: "",
          isTicked: false,
        },
        {
          fieldInput: "",
          isTicked: false,
        },
        {
          fieldInput: "",
          isTicked: false,
        },
      ],
    },
    mode: "all",
  });

  const { control } = form;

  useEffect(() => {
    const hours = parseInt(duration);
    const defaultItems = 2;
    const numItems = hours > 12 ? hours - 12 : hours;

    const totalItems = defaultItems + numItems;

    const currentItems = form.getValues("items");
    const currentItemsLength = currentItems ? currentItems.length : 0;

    if (currentItemsLength > totalItems) {
      const newItems = currentItems ? currentItems.slice(0, totalItems) : [];
      form.reset({ items: newItems });
    } else {
      form.reset({
        items: Array.from({ length: totalItems }, (_, index) => ({
          fieldInput: "",
          isTicked: false,
        })),
      });
    }
  }, [duration, form]);

  const { fields } = useFieldArray({
    control: form.control,
    name: "items",
  });

  return (
    <Form {...form}>
      <form autoComplete="off">
        <div className="w-full" data-tut="seventh-step">
          <FormLabel className="flex justify-between">
            <div className="flex items-center justify-center gap-3 font-bold text-sm pb-2 text-muted">
              <span className="">
                {type === MICROTASKS ? <span>{t(MICRO_TASKS)}</span> : ""}
              </span>
              <span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center">
                      <InfoIcon width={13} height={13} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white dark:bg-black max-w-60 m-2">
                      {d(SEVENTHSTEP)}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
            </div>
            <span className="text-xs font-bold text-muted-foreground">
              {t(TODAY)}
            </span>
          </FormLabel>
          <div className="border-[2.5px] border-light-gray outline-none w-full">
            {fields.map((item, index) => {
              const number = index + 1 + ".";
              return (
                <div
                  className="border-b-[2.5px] border-b-light-gray-high-opecity last:border-b-0"
                  key={item.id}
                >
                  <FormField
                    control={form.control}
                    name={`items.${index}`}
                    render={({ field: { value, onChange } }) => (
                      <div
                        className={`flex items-center gap-3 h-14 pl-6 focus-within:bg-input-focus-color 
                        ${value.isTicked ? " text-muted-foreground " : ""}
                        `}
                      >
                        <span>{number}</span>
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              className={`text-primary text-sm font-semibold outline-none border-none flex h-14 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent mt-0
                            ${
                              value.isTicked
                                ? "line-through text-primary-foreground"
                                : ""
                            }
                            `}
                              value={value?.fieldInput || ""}
                              onChange={(e: any) =>
                                onChange({
                                  ...value,
                                  fieldInput: e.target.value,
                                })
                              }
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            {value?.isTicked ? (
                              <div
                                className="h-full p-5 flex justify-center items-center border-l-2 border-l-light-gray-high-opecity cursor-pointer"
                                onClick={() =>
                                  onChange({
                                    ...value,
                                    isTicked: false,
                                  })
                                }
                              >
                                <TickedBlueIcon
                                  className="bg-inherit"
                                  height={18}
                                  width={18}
                                  color="#759ef7"
                                />
                              </div>
                            ) : (
                              <div
                                className="h-full p-5 flex justify-center items-center border-l-2 border-l-light-gray-high-opecity cursor-pointer"
                                onClick={() =>
                                  onChange({
                                    ...value,
                                    isTicked: true,
                                  })
                                }
                              >
                                <TickedGreyIcon
                                  className="bg-inherit"
                                  height={18}
                                  width={18}
                                />
                              </div>
                            )}
                          </FormControl>
                        </FormItem>
                      </div>
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
};

export default MicrotTasks;
