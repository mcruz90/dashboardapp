import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from "@mui/material";

const Sched = (props) => (
  
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography variant="body1">{props.scheds.time}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body2">{props.scheds.title}</Typography>
        <Typography variant="subtitle2">{props.scheds.subtitle}</Typography>
        </TableCell>
        <TableCell align="left">
        <Typography variant="subtitle2">{props.scheds.resource}</Typography>
        </TableCell>
      <TableCell align="right">
                  
        <IconButton
          aria-label="edit"
          component={Link}
          to={`/schedupdate/${props.scheds._id}`}>
          <EditIcon  />
        </IconButton>
  
        <IconButton
          aria-label="delete"
          onClick={() => {
            props.deleteSched(props.scheds._id);
            }}>
              <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  
  );
  
export default function SchedList() {
    const [sched, setSched] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
     async function getSched() {
       const response = await fetch(`http://localhost:5000/sched/`);
   
       if (!response.ok) {
         const message = `An error occurred: ${response.statusText}`;
         window.alert(message);
         return;
       }
   
       const schedule = await response.json();
       setSched(schedule);
     }
   
     getSched();
   
     return;
   }, [sched.length]);
   
   // This method will delete a record
   async function deleteSched(id) {
     await fetch(`http://localhost:5000/sched/${id}`, {
       method: "DELETE"
     });
   
     const newRecords = sched.filter((el) => el._id !== id);
     setSched(newRecords);
   }
   
   // This method will map out the records on the table
   function scheduleList() {
    return sched.map((scheds) => {
      return (
        <Sched
          scheds={scheds}
          deleteSched={() => deleteSched(scheds._id)}
          key={scheds._id}
        />
      );
    });
  }
  
   
     
 // This following section will display the table with the records of individuals.
 return (

     <div>
    {sched.length > 0 ?
     <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead>
          <TableRow>
          <TableCell>TIME</TableCell>
            <TableCell align="left">TASK</TableCell>
            <TableCell align="left">RESOURCES</TableCell>
            <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>
       <TableBody>{scheduleList()}</TableBody>
     </Table>
     </TableContainer> : <Typography variant="body1">Empty Schedule! </Typography>
     }
   </div>

);
}