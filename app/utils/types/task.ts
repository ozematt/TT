import { z } from 'zod';
import { STATUS } from './status'
import { TimeSchema } from './time';
import { Time } from './time'; // Import the missing Time type

/**
 * Used to create new task
 */
export const NewTaskSchema = z.object({
  code: z.string(),
  title: z.string(),
  description: z.string().optional(),
})

export type NewTask = z.infer<typeof NewTaskSchema>;


/**
 * Used to create new task
 */
export const TaskSchema = NewTaskSchema.merge(z.object({
  id: z.string(),
  status: z.nativeEnum(STATUS),
  times: z.array(TimeSchema),
}))

export type Task = Omit<z.infer<typeof TaskSchema>, 'times'> & {
  times: Time[];
}

