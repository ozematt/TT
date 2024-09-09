import { Time } from '@/utils/types/time'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { DateTime, Duration } from 'luxon'
import React from 'react'
import { TimeForm } from './timeForm'

type TimeListProps = {
  taskId: string,
  times: Time[]
}


export const TimeList = ({ taskId, times }: TimeListProps) => {
  return (
    <>
      <TimeForm taskId={taskId} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {times.map(time => (
              <TableRow
                key={time.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{time.start.toFormat("yyyy-mm-dd hh:mm:ss")}</TableCell>
                < TableCell >{time.start.plus({ minutes: time.duration }).toFormat("yyyy-mm-dd hh:mm:ss")}</TableCell>
                <TableCell>{Duration.fromMillis(time.duration * 60 * 1000).toFormat("h'h' m'min'")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}