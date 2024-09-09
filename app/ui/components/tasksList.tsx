import { useTasksReducer } from '@/utils/reducers/tasks';
import { ThemeContext } from '@emotion/react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import React from 'react';
import { TasksListItem } from './tasksListItem';

export const TasksList = () => {
  const { tasks } = useTasksReducer()

  return (
    <List>
      {tasks.map(task => <TasksListItem key={task.id} task={task} />)}
    </List>
  )

}