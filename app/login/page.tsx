import { useTranslations } from "next-intl";
import Link from "next/link";
import { ModeToggle } from "../components/darkmode/dark";
import {
  GOOGLE,
  IF_YOU_DONT_HAVE_AN_ACCOUNT_PLEASE,
  LOGIN,
  LOGIN_WITH,
  OR,
  SIGN_UP,
} from "../lib/constant";
import GoogleIcon from "../ui/assets/icons/google-icon";
import { Button } from "../ui/button/button";
import { Card, CardContent } from "../ui/card/card";
import LoginForm from "./components/login-form";

function Login() {
  const t = useTranslations("Auth");
  return (
    <Card className="border-0 h-screen grid place-content-center">
      <CardContent className="h-full p-0">
        <div className="flex items-center justify-center">
          <div className="w-80 text-center flex flex-col gap-5">
            <h1 className="text-3xl font-bold capitalize">{t(LOGIN)}</h1>
            <LoginForm />
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
                  {t(LOGIN_WITH)}
                  <Link className="font-bold" href={"https://www.google.com/"}>
                    &nbsp;{t(GOOGLE)}
                  </Link>
                </li>
              </Button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              {t(IF_YOU_DONT_HAVE_AN_ACCOUNT_PLEASE)}&nbsp;
              <Link className="text-blue-500 hover:underline" href="/signup">
                {t(SIGN_UP)}
              </Link>
            </p>
          </div>
        </div>
        <div className="fixed right-3 bottom-4 cursor-pointer">
          <div className="border-2 rounded-full dark:hover:bg-black hover:bg-gray-100">
            <ModeToggle />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Login;
