import { Stack, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type DateTimeInputProps = {
  name: string;
  label: string;
}

export const DateTimeInput = ({ name, label }: DateTimeInputProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={(
        {
          field: { onChange, value },
          fieldState: { error },
          formState,
        }
      ) => (
        <Stack>
          <DateTimePicker
            value={value}
            label={label}
            onChange={(e) => { console.log(e); onChange(e); }}
          />
          {error && <Typography color='error'>{error.message}</Typography>}
        </Stack>
      )
      }
    />
  )
}