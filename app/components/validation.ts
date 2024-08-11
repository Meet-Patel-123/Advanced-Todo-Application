import { z } from "zod";

export const macroMezzoGoalsSchema = z.object({
  fieldInput: z.string().trim(),
});

export const microTasksSchema = z.object({
  fieldInput: z.string().trim(),
  isTicked: z.boolean().default(false),
});

export const readingTaskSchema = z.object({
  reading: z.string().trim(),
});

export const reflectionSchema = z.object({
  fieldInput: z.string().trim(),
  isDone: z.boolean().default(false),
  isPending: z.boolean().default(false),
});

export const habitSchema = z.object({
  fieldInput: z.string().trim(),
});

export const scheduleSchema = z.object({
  id: z.number(),
  hr: z.number(),
  min: z.number(),
  period: z.string(),
  task: z.string().trim(),
  isImportant: z.string().trim(),
  isUrgent: z.string().trim(),
  isFocus: z.string().trim(),
});
