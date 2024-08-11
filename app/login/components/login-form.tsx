"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EMAIL, PASSWORD, USERNAME } from "../../lib/constant";
import PasswordIcon from "../../ui/assets/icons/password-icon";
import VectorIcon from "../../ui/assets/icons/vector-icon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form/form";
import { Input } from "../../ui/input/input";
import LoginButton from "./login-button";
import { createLoginFormSchema } from "./validation";

function LoginForm() {
  const t = useTranslations("Auth");
  const router = useRouter();

  const formSchema = createLoginFormSchema(t);
  type ValidationSchema = z.infer<typeof formSchema>;

  const initialState = {
    email: "",
    password: "",
  };

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: initialState,
    mode: "all",
  });

  function onSubmit(values: ValidationSchema) {
    router.push("/");
  }

  const { control, handleSubmit } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex gap-1 dark:bg-transparent items-center border-2 px-3 bg-light-slate">
                  <VectorIcon className="bg-inherit" />
                  <Input
                    className="text-primary text-sm font-semibold outline-none border-none flex h-12 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent mt-0"
                    placeholder={t(EMAIL)}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex gap-1 dark:bg-transparent items-center border-2 px-3 bg-light-slate">
                  <PasswordIcon />
                  <Input
                    className="text-primary text-sm font-semibold outline-none border-none flex h-12 focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent mt-0"
                    placeholder={t(PASSWORD)}
                    type="password"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoginButton />
      </form>
    </Form>
  );
}

export default LoginForm;
