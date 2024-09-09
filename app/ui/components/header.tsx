import React, { FormEvent } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

type HeaderProps = {
  showAddTaskButton: boolean;
  addTaskAction: (value: boolean) => void;
}

export const Header = ({ showAddTaskButton, addTaskAction }: HeaderProps) => {

  const onAddTaskButtonClick = (e: FormEvent) => {
    e.preventDefault()
    addTaskAction(true)
  }

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            DevNotes.it - Time Tracker
          </Typography>
        </Grid>
        <Grid item lg={4} style={{ textAlign: 'right' }}>
          {
            showAddTaskButton &&
            <Button variant="contained" color="primary" onClick={onAddTaskButtonClick}>Add task</Button>
          }
        </Grid>
      </Grid>
    </Box>
  )

}