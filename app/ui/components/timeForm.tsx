import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { NewTime, NewTimeSchema } from '@/utils/types/time'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Stack, Typography } from '@mui/material'
import { TextInput } from './formFields/textInput'
import { DateTimeInput } from './formFields/dateInput'
import { DateTime, Interval } from 'luxon'
import { NumberInput } from './formFields/numberInput'
import { useTasksReducer } from '@/utils/reducers/tasks'

type TimeFormProps = {
  taskId: string
}

const date = DateTime.now()

export const TimeForm = ({ taskId }: TimeFormProps) => {

  const { dispatch } = useTasksReducer()
  const currentDate = DateTime.now()

  const formMethods = useForm<NewTime>({
    resolver: zodResolver(NewTimeSchema),
    defaultValues: {
      start: currentDate,
      duration: Interval.fromDateTimes(currentDate, currentDate.plus({ minutes: 60 })).length('minutes')
    },
  })

  const onSubmit = (taskId: string, data: NewTime) => {
    console.log('onSubmit')
    console.log(taskId, data)
    dispatch({ type: 'ADD_TIME', taskId, time: data })
    formMethods.reset()
  }

  return (
    <Card style={{ padding: '1rem', marginBottom: '2rem' }}>
      <Typography gutterBottom>
        Add Time
      </Typography>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(data => onSubmit(taskId, data))}>
          <Stack direction="row" spacing={2}>
            <DateTimeInput name="start" label="Start" />
            <NumberInput name="duration" label="Duration (minutes)" />
            <Button variant="contained" type='submit' size='small'>Add</Button>
          </Stack>
        </form>
      </FormProvider>
    </Card>
  )
}