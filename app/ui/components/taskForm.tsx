import { Button, Card, Stack, TextField, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import React, { FormEvent } from 'react'
import { NewTask, NewTaskSchema } from '@/utils/types/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from './formFields/textInput';
import { useTasksReducer } from '@/utils/reducers/tasks';


type TaskFormProps = {
  hideTaskFormAction: () => void;
}
export const TaskForm = ({ hideTaskFormAction }: TaskFormProps) => {

  const { dispatch } = useTasksReducer()

  const formMethods = useForm<NewTask>({
    resolver: zodResolver(NewTaskSchema),
  })

  const onSubmit = (data: NewTask) => {
    dispatch({ type: 'ADD_TASK', task: data })
    formMethods.reset()
    hideTaskFormAction()
  }

  const onCancelClick = (e: FormEvent) => {
    e.preventDefault()
    hideTaskFormAction()
  }

  return (
    <Card style={{ padding: '1rem', marginBottom: '2rem' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        New task
      </Typography>
      <FormProvider {...formMethods}>
        <form style={{ textAlign: 'right' }} onSubmit={formMethods.handleSubmit(onSubmit)}>

          {formMethods.formState.errors.code && <Typography color='error'>{formMethods.formState.errors.code.message}</Typography>}

          <TextInput name="code" label="Code" />
          <TextInput name="title" label="Title" />
          <TextInput name="description" label="Description" />

          <Button
            variant="contained"
            onClick={onCancelClick}
            style={{ marginRight: '1rem' }}
          >
            Cancel
          </Button>
          <Button variant="contained" type='submit'>Add</Button>
        </form>
      </FormProvider>
    </Card>
  )
}