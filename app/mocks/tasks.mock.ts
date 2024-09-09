import { STATUS } from '@/utils/types/status';
import { DateTime, Duration } from 'luxon';
import { v4 as uuid } from 'uuid';

export const tasks = [
  {
    id: uuid(),
    code: 'task-1',
    title: 'Write tests for the app',
    description: 'Write tests for the app using Jest and React Testing Library',
    status: STATUS.TODO,
    times: [],
  },
  {
    id: uuid(),
    code: 'task-2',
    title: 'Create design for the app',
    description: 'Create a design for the app using Figma',
    status: STATUS.IN_PROGRESS,
    times: [
      {
        id: uuid(),
        start: DateTime.fromISO('2021-10-02T08:00:00Z'),
        end: DateTime.fromISO('2021-10-02T09:00:00Z'),
        duration: Duration.fromObject({ hours: 1 }).as('minutes'),
      },
      {
        id: uuid(),
        start: DateTime.fromISO('2021-10-03T10:00:00Z'),
        end: DateTime.fromISO('2021-10-03T11:00:00Z'),
        duration: Duration.fromObject({ hours: 1 }).as('minutes'),
      },
    ],
  },
  {
    id: uuid(),
    code: 'task-3',
    title: 'Setup development environment',
    description: 'Setup development environment using Docker',
    status: STATUS.DONE,
    times: [
      {
        id: uuid(),
        start: DateTime.fromISO('2021-10-01T08:00:00Z'),
        end: DateTime.fromISO('2021-10-01T09:00:00Z'),
        duration: Duration.fromObject({ hours: 1 }).as('minutes'),
      },
      {
        id: uuid(),
        start: DateTime.fromISO('2021-10-01T10:00:00Z'),
        end: DateTime.fromISO('2021-10-01T11:00:00Z'),
        duration: Duration.fromObject({ hours: 1 }).as('minutes'),
      },
    ],
  },
]