import { z } from "zod";
import { EMAIL_IS_NOT_VALID,
EMAIL_IS_REQUIRED,
EMAIL_MUST_BE_LESS_THAN_OR_EQUAL_TO_132_CHARACTERS,
FIRST_NAME_IS_REQUIRED,
FIRST_NAME_MUST_BE_LESS_THAN_OR_EQUAL_TO_132_CHARACTERS,
LAST_NAME_IS_REQUIRED,
LAST_NAME_MUST_BE_LESS_THAN_OR_EQUAL_TO_132_CHARACTERS,
PASSWORD_MUST_BE_8_64_CHARACTERS_LONG_AND_INCLUDE_AT_LEAST_ONE_UPPERCASE_LETTER_ONE_LOWERCASE_LETTER_ONE_NUMBER_ONE_SPECIAL_CHARACTER,
PASSWORD_MUST_BE_AT_LEAST_8_CHARECTERS,
PASSWORD_SHOULD_BE_A_MAXIMUM_OF_64_CHARACTERS,
} from "../lib/constant";

export const signupFormSchema = (
  t: (key: string) => string
): z.ZodObject<
  {
    email: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    password: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
  },
  {
    email: string;
    first_name: string;
    last_name: string;
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
      .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
        message: t(EMAIL_IS_NOT_VALID),
      })
      .trim(),
    first_name: z
      .string()
      .trim()
      .min(1, { message: t(FIRST_NAME_IS_REQUIRED) })
      .max(132, {
        message: t(FIRST_NAME_MUST_BE_LESS_THAN_OR_EQUAL_TO_132_CHARACTERS),
      }),
    last_name: z
      .string()
      .trim()
      .min(1, { message: t(LAST_NAME_IS_REQUIRED) })
      .max(132, {
        message: t(LAST_NAME_MUST_BE_LESS_THAN_OR_EQUAL_TO_132_CHARACTERS),
      }),
    password: z
      .string()
      .min(8, {
        message: t(PASSWORD_MUST_BE_AT_LEAST_8_CHARECTERS),
      })
      .max(64, {
        message: t(PASSWORD_SHOULD_BE_A_MAXIMUM_OF_64_CHARACTERS),
      })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
        {
          message: t(
            PASSWORD_MUST_BE_8_64_CHARACTERS_LONG_AND_INCLUDE_AT_LEAST_ONE_UPPERCASE_LETTER_ONE_LOWERCASE_LETTER_ONE_NUMBER_ONE_SPECIAL_CHARACTER
          ),
        }
      )
      .trim(),
  });
