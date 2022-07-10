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

const Contact = (props) => (
  
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography variant="body1">{props.contact.name}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body2">{props.contact.company}</Typography>
        </TableCell>
        <TableCell align="left">
        <Typography variant="body1">{props.contact.position}</Typography>
        </TableCell>
        <TableCell align="left">
        <Typography variant="body1">{props.contact.phone}</Typography>
        </TableCell>
        <TableCell align="left">
        <Typography variant="body1">{props.contact.email}</Typography>
        </TableCell>
        
      <TableCell align="right">
                  
        <IconButton
          aria-label="edit"
          component={Link}
          to={`/editcontact/${props.contact._id}`}>
          <EditIcon  />
        </IconButton>
  
        <IconButton
          aria-label="delete"
          onClick={() => {
            props.deleteSched(props.contact._id);
            }}>
              <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  
  );
  
export default function ContactList() {
    const [contact, setContact] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
     async function getContact() {
       const response = await fetch(`http://localhost:5000/contact/`);
   
       if (!response.ok) {
         const message = `An error occurred: ${response.statusText}`;
         window.alert(message);
         return;
       }
   
       const contacts = await response.json();
       setContact(contacts);
     }
   
     getContact();
   
     return;
   }, [contact.length]);
   
   // This method will delete a record
   async function deleteContact(id) {
     await fetch(`http://localhost:5000/contact/${id}`, {
       method: "DELETE"
     });
   
     const newRecords = contact.filter((el) => el._id !== id);
     setContact(newRecords);
   }
   
   // This method will map out the records on the table
   function contactList() {
    return contact.map((contact) => {
      return (
        <Contact
          contact={contact}
          deleteContact={() => deleteContact(contact._id)}
          key={contact._id}
        />
      );
    });
  }
  
   
     
 // This following section will display the table with the records of individuals.
 return (

     <div>
    {contact.length > 0 ?
     <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead>
          <TableRow>
          <TableCell>NAME</TableCell>
            <TableCell align="left">COMPANY</TableCell>
            <TableCell align="left">POSITION</TableCell>
            <TableCell align="left">PHONE NUMBER</TableCell>
            <TableCell align="left">EMAIL</TableCell>
            <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>
       <TableBody>{contactList()}</TableBody>
     </Table>
     </TableContainer> : <Typography variant="body1">No contacts! </Typography>
     }
   </div>

);
}