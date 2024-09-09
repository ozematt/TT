'use client';
import { Box, Container, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useTasksReducer } from '../utils/reducers/tasks'
import { TasksList } from '@/ui/components/tasksList';
import { TaskForm } from '@/ui/components/taskForm';
import { Header } from '@/ui/components/header';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

export default function Home() {
  const { tasks } = useTasksReducer()
  const [newTaskFormVisible, setNewTaskFormVisible] = useState(false)

  const showAddTaskForm = () => setNewTaskFormVisible(true)
  const hideAddTaskForm = () => setNewTaskFormVisible(false)

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="pl">

      <Header showAddTaskButton={!newTaskFormVisible} addTaskAction={showAddTaskForm} />
      {newTaskFormVisible && <TaskForm hideTaskFormAction={hideAddTaskForm} />}
      <TasksList />

    </LocalizationProvider>
  )
}

