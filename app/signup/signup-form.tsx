"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ModeToggle } from "../components/darkmode/dark";
import {
  EMAIL,
  FIRST_NAME,
  GOOGLE,
  LAST_NAME,
  OR,
  PASSWORD,
  SIGN_UP,
  SIGN_UP_NOW,
  SIGN_UP_WITH,
} from "../lib/constant";
import GoogleIcon from "../ui/assets/icons/google-icon";
import { Button } from "../ui/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form/form";
import { Input } from "../ui/input/input";
import { signupFormSchema } from "./validation";

function SignUpForm() {
  const t = useTranslations("Auth");

  const formSchema = signupFormSchema(t);
  type ValidationSchema = z.infer<typeof formSchema>;

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const { control } = form;

  function onSubmit(values: ValidationSchema) {    
    console.log(values); 
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-96 text-center flex flex-col gap-5">
          <h1 className="text-3xl font-bold capitalize">{t(SIGN_UP)}</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-3">
                <FormField
                  control={control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col items-start">
                        <FormLabel className="text-gray-400 text-sm font-semibold">
                          {t(FIRST_NAME)}
                        </FormLabel>
                        <FormControl>
                          <div className="flex gap-1 dark:bg-transparent items-center border-2 px-3 bg-light-slate w-full">
                            <Input
                              className="text-primary text-sm font-semibold outline-none border-none flex h-12 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent mt-0"
                              placeholder="Enter Your First Name"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col items-start">
                        <FormLabel className="text-gray-400 text-sm font-semibold">
                          {t(LAST_NAME)}
                        </FormLabel>
                        <FormControl>
                          <div className="flex gap-1 dark:bg-transparent items-center border-2 px-3 bg-light-slate w-full">
                            <Input
                              className="text-primary text-sm font-semibold outline-none border-none flex h-12 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent mt-0"
                              placeholder="Enter Your Last Name"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col items-start">
                      <FormLabel className="text-gray-400 text-sm font-semibold">
                        {t(EMAIL)}
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-1 dark:bg-transparent items-center border-2 px-3 bg-light-slate w-full">
                          <Input
                            className="text-primary text-sm font-semibold outline-none border-none flex h-12 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent mt-0"
                            placeholder="Enter Your Email"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col items-start">
                      <FormLabel className="text-gray-400 text-sm font-semibold">
                        {t(PASSWORD)}
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-1 dark:bg-transparent items-center border-2 px-3 bg-light-slate w-full">
                          <Input
                            className="text-primary text-sm font-semibold outline-none border-none flex h-12 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent mt-0"
                            placeholder="Enter Your Password"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button
                  className="bg-black hover:bg-black rounded-none text-xs text-white font-bold dark:bg-white dark:text-black"
                  type="submit"
                >
                  {t(SIGN_UP_NOW)}
                </Button>
              </div>
            </form>
          </Form>
          <div className="flex justify-center gap-2">
            <div className="border-t-2 border-muted-500 w-full mt-3" />
            <li className="list-none text-base font-bold uppercase w-max">
              {t(OR)}
            </li>
            <div className="border-t-2 border-muted-500 w-full mt-3" />
          </div>
          <div className="flex flex-col">
            <Button className="bg-transparent hover:bg-transparent dark:text-white text-black flex gap-2 rounded-none border-2 p-6">
              <GoogleIcon />
              <li className="list-none text-xs">
                {t(SIGN_UP_WITH)}
                <Link className="font-bold" href={"https://www.google.com/"}>
                  &nbsp;{t(GOOGLE)}
                </Link>
              </li>
            </Button>
          </div>
        </div>
      </div>
      <div className="fixed right-3 bottom-4 cursor-pointer">
        <div className="border-2 rounded-full dark:hover:bg-black hover:bg-gray-100">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
