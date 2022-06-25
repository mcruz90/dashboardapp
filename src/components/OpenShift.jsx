import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function createData(time, task, description) {
  return { time, task, description};
}

const rows = [
  createData('8:00AM', 'open gates', 'use key'),
  createData('9:00AM', 'create waybills', 'atripco and ats'),
  createData('10:00AM', 'cash', 'reporting and counting'),
  createData('11:00AM', 'lunch', '1 hour break'),
  createData('4:00PM', 'GO HOME', 'punch out'),
];

const OpenShift = () => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TIME</TableCell>
            <TableCell align="left">TASK</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.time}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="left">
                <Typography variant="body1">{row.task}</Typography>
                <Typography variant="subtitle">{row.description}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OpenShift