import {
  EMAIL_IS_NOT_VALID,
  EMAIL_IS_REQUIRED,
  EMAIL_MUST_BE_LESS_THAN_OR_EQUAL_TO_132_CHARACTERS,
  EMAIL_REGEX,
  PASSWORD_MUST_BE_8_64_CHARACTERS_LONG_AND_INCLUDE_AT_LEAST_ONE_UPPERCASE_LETTER_ONE_LOWERCASE_LETTER_ONE_NUMBER_ONE_SPECIAL_CHARACTER,
  PASSWORD_MUST_BE_AT_LEAST_8_CHARECTERS,
  PASSWORD_REGEX,
  PASSWORD_SHOULD_BE_A_MAXIMUM_OF_64_CHARACTERS
} from "@/app/lib/constant";
import { z } from "zod";

export const createLoginFormSchema = (
  t: (key: string) => string
): z.ZodObject<
  {
    email: z.ZodString;
    password: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    email: string;
    password: string;
  },
  {
    email: string;
    password: string;
  }
> =>
  z.object({
    email: z
      .string()
      .min(1, {
        message: t(EMAIL_IS_REQUIRED),
      })
      .max(132, {
        message: t(EMAIL_MUST_BE_LESS_THAN_OR_EQUAL_TO_132_CHARACTERS),
      })
      .regex(EMAIL_REGEX, {
        message: t(EMAIL_IS_NOT_VALID),
      })
      .trim(),
    password: z
      .string()
      .min(8, {
        message: t(PASSWORD_MUST_BE_AT_LEAST_8_CHARECTERS),
      })
      .max(64, {
        message: t(PASSWORD_SHOULD_BE_A_MAXIMUM_OF_64_CHARACTERS),
      })
      .regex(PASSWORD_REGEX, {
        message: t(
          PASSWORD_MUST_BE_8_64_CHARACTERS_LONG_AND_INCLUDE_AT_LEAST_ONE_UPPERCASE_LETTER_ONE_LOWERCASE_LETTER_ONE_NUMBER_ONE_SPECIAL_CHARACTER
        ),
      })
      .trim(),
  });
