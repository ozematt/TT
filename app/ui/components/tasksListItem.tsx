import { Box, Grid, IconButton, ListItem, ListItemText, Stack, Typography, styled } from '@mui/material';
import {
  Delete as DeleteIcon,
  AccessTime as TimerIcon,
  Start as StartIcon,
  StopCircle as StopIcon,
} from '@mui/icons-material';
import React, { useState } from 'react'
import { STATUS } from '@/utils/types/status';
import { useTasksReducer } from '@/utils/reducers/tasks';
import { TimeList } from './timeList';
import { Task } from '@/utils/types/task';
import { Duration } from 'luxon';


const TaskListItem = styled(ListItem)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  ...theme.typography.body2,
  backgroundColor: theme.palette.background.paper,
  textAlign: 'left',
}));

type TasksListItemProps = {
  task: Task;
}

export const TasksListItem = ({ task }: TasksListItemProps) => {
  const [showTimes, setShowTimes] = useState(false)
  const { dispatch } = useTasksReducer()

  const startTask = (id: string) => {
    dispatch({ type: 'CHANGE_STATUS', taskId: id, status: STATUS.IN_PROGRESS })
  }

  const finishTask = (id: string) => {
    dispatch({ type: 'CHANGE_STATUS', taskId: id, status: STATUS.DONE })
  }

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', taskId: id })
  }

  const toggleShowTimes = () => {
    setShowTimes(!showTimes)
  }

  return (
    <TaskListItem>
      <Grid container>
        <Grid item xs={8}>
          <ListItemText
            primary={`${task.code} ::  ${task.title} ( ${Duration.fromMillis(task?.times?.reduce((acc, time) => acc + time.duration, 0) * 60 * 1000).toFormat("h'h' m'min'")} )`}
            secondary={`${task.description}`}
          />
        </Grid>
        {/* BUTTONS */}
        <Grid item xs={4} style={{ textAlign: 'right' }}>
          {
            task.status === STATUS.TODO &&
            <IconButton
              edge="end"
              aria-label="delete"
              style={{ margin: '0.5rem' }}
              title='Start'
              onClick={() => startTask(task.id)}
            >
              <StartIcon />
            </IconButton>
          }
          {
            [STATUS.IN_PROGRESS, STATUS.DONE].includes(task.status) &&
            <IconButton
              edge="end"
              aria-label="delete"
              style={{ margin: '0.5rem' }}
              title='Show Registered time'
              onClick={() => toggleShowTimes()}
            >
              <TimerIcon />
            </IconButton>
          }
          {
            task.status === STATUS.IN_PROGRESS &&
            <IconButton
              edge="end"
              aria-label="delete"
              style={{ margin: '0.5rem' }}
              title='Close task'
              onClick={() => finishTask(task.id)}
            >
              <StopIcon />
            </IconButton>
          }
          {
            task.status !== STATUS.IN_PROGRESS &&
            <IconButton
              edge="end"
              aria-label="delete"
              style={{ margin: '0.5rem' }}
              title='Delete task'
              onClick={() => deleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        </Grid>


        {showTimes && <Grid item xs={12}><TimeList times={task.times} taskId={task.id} /></Grid>}
      </Grid>
    </TaskListItem>

  )
}