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
  createData('10:15AM', 'cash reporting', 'counts and report'),
  createData('11:30AM', 'collect pending delivery list', 'give to closing pharmacist'),
  createData('1:00PM', 'call for desferal', 'call IVads x3467'),
  createData('3:00PM', 'create manifests', 'print ats and atripco'),
  createData('6:15PM', 'GO HOME', 'punch out'),
];


const CloseShift = () => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TIME</TableCell>
            <TableCell align="left">Task</TableCell>
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

export default CloseShift