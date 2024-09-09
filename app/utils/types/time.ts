import { z } from "zod";
import { DateTime } from 'luxon';
import { start } from 'repl';

type Minutes = number

/**
 * Used to store new time information
 * @param start - start time
 * @param duration - duration in minutes
 * @returns NewTime
 */
export const NewTimeSchema = z.object({
  start: z.unknown().refine(val => val instanceof DateTime, {
    message: 'start must be a DateTime',
  }),
  duration: z.number()
})

export type NewTime = Omit<z.infer<typeof NewTimeSchema>, 'start'> & {
  start: DateTime
}

/**
 * Used to store time information
 * @param id - time id
 * @param start - start time
 * @param duration - duration in minutes
 */
export const TimeSchema = NewTimeSchema.merge(z.object({
  id: z.string().uuid(),
}))

export type Time = Omit<z.infer<typeof TimeSchema>, 'start'> & {
  start: DateTime
}
