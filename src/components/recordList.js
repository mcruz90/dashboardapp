import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Record = (props) => (
  <TableRow>
   <TableCell component="th" scope="row">
                {props.record.name}
              </TableCell>
              <TableCell align="left">{props.record.note}</TableCell>
              <TableCell align="right"><Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
              <Button variant="outlined" startIcon={<DeleteIcon />}
                onClick={() => {
                  props.deleteRecord(props.record._id);
                }}
              >
              </Button>
              </TableCell>
              <Outlet />
              </TableRow>

);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div style={{ paddingLeft: 20 }}>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead>
          <TableRow>
          <TableCell>Staff Name</TableCell>
            <TableCell align="left">Note</TableCell>
            <TableCell align="right">Action</TableCell>
            </TableRow>
        </TableHead>
       <TableBody>{recordList()}</TableBody>
     </Table>
     </TableContainer>
   </div>
 );
}