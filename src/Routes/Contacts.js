import * as React from 'react';
import {Box, Typography} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function createData(name, calories, fat, carbs, protein, deleteData) {
  return { name, calories, fat, carbs, protein, deleteData };
}

const rows = [
  createData('Agatha Christie', 'ATS', '416-888-8888', 'a@ats.com', <EditIcon />, <DeleteOutlineOutlinedIcon /> ),
  createData('James Peach', 'Atripco', '416-252-7721', 'crs@atripco.net', <EditIcon />, <DeleteOutlineOutlinedIcon />),
  createData('Alfalfa', 'SHN', '1-800-000-0000', 'orders@shn.ca', <EditIcon />, <DeleteOutlineOutlinedIcon />),
  createData('Jojo', 'Sigvaris', '416-888-8888', 'j@sigvaris.com', <EditIcon />, <DeleteOutlineOutlinedIcon />),
  createData('Kelly C.', 'A&D Medical', '416-555-5555 x 323', 'e@email.com', <EditIcon />, <DeleteOutlineOutlinedIcon />),
];

const Contacts = () => {
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Contacts</Typography>
      <Typography variant="subtitle">Welcome back! Here is your day at a glance</Typography>
      
      <TableContainer elevation={0} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">E-mail</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein} {row.deleteData}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </Box>
  )
}

export default Contacts