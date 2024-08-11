"use client";

import { FOURTEENSTEP, REFLECTION, REFLECTION_TASK } from "@/app/lib/constant";
import CrossBlueIcon from "@/app/ui/assets/icons/cross-blue-icon";
import CrossGreyIcon from "@/app/ui/assets/icons/cross-grey-icon";
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
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../ui/form/form";
import { reflectionSchema } from "../../../components/validation";

export default function ReflectionTask({ type }: { type: string }) {
  const t = useTranslations("reflectiontask");
  const d = useTranslations("stepcontent");

  const formSchema = z.object({
    items: z.array(reflectionSchema).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [
        {
          fieldInput: "",
          isDone: false,
          isPending: false,
        },
        {
          fieldInput: "",
          isDone: false,
          isPending: false,
        },
        {
          fieldInput: "",
          isDone: false,
          isPending: false,
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
        <div className="mb-5 w-full" data-tut="fourteen-step">
          <FormLabel>
            <div className="flex justify-between">
              <span className="font-bold text-sm pb-2 text-muted">
                {type === REFLECTION ? (
                  <div className="flex items-center justify-center gap-3">
                    <span>{t(REFLECTION_TASK)}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex justify-center items-center">
                          <InfoIcon width={13} height={13} />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white dark:bg-black max-w-60 m-2">
                          {d(FOURTEENSTEP)}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>
          </FormLabel>
          <div className="border-[2.5px] border-light-gray outline-none w-full">
            {fields.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-center gap-3 h-14 pl-4 focus-within:bg-input-focus-color border-b-[2.5px] border-b-light-gray-high-opecity last:border-b-0"
                >
                  <FormField
                    control={form.control}
                    name={`items.${index}`}
                    render={({ field: { value, onChange } }) => (
                      <>
                        {value.isDone ? (
                          <TickedBlueIcon
                            className="bg-inherit cursor-pointer"
                            width={16}
                            height={16}
                            color="#759ef7"
                            onClick={() =>
                              onChange({
                                ...value,
                                isDone: true,
                                isPending: false,
                              })
                            }
                          />
                        ) : (
                          <TickedGreyIcon
                            className="bg-inherit cursor-pointer"
                            width={16}
                            height={16}
                            onClick={() =>
                              onChange({
                                ...value,
                                isDone: true,
                                isPending: false,
                              })
                            }
                          />
                        )}
                        {value.isPending ? (
                          <CrossBlueIcon
                            className="bg-inherit cursor-pointer"
                            width={16}
                            height={16}
                            onClick={() =>
                              onChange({
                                ...value,
                                isDone: false,
                                isPending: true,
                              })
                            }
                            color="#759ef7"
                          />
                        ) : (
                          <CrossGreyIcon
                            className="bg-inherit cursor-pointer"
                            width={16}
                            height={16}
                            onClick={() =>
                              onChange({
                                ...value,
                                isDone: false,
                                isPending: true,
                              })
                            }
                          />
                        )}
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              className="text-primary text-sm font-semibold outline-none border-none flex justify-center items-center h-full focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                              value={value?.fieldInput || ""}
                              onChange={(e: any) => {
                                onChange({
                                  ...value,
                                  fieldInput: e.target.value,
                                });
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      </>
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
