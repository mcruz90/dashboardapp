import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Box from '@mui/material/Box';
import {Typography, List, Button } from '@mui/material' 
import TextField from '@mui/material/TextField';
 
export default function EditContact() {
 const [form, setForm] = useState({
    name: "",
    company: "",
    position: "",
    phone: "",
    email: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/contact/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/contacts")
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedRecord = {
     name: form.name,
     company: form.company,
     position: form.position,
     phone: form.phone,
     email: form.email,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/editcontact/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedRecord),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/contacts");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <Box flex={4} padding={3} bgcolor="#F4F4F4">
     <Typography variant="h5" style={{paddingBottom: '10px'}}>Edit Contact</Typography>
     
     <List sx={{ width: '95%', bgcolor: 'background.paper', borderRadius: '15px', padding: '20px'}}>

     <form onSubmit={onSubmit}>
       <div className="form-group" style={{paddingBottom: '15px'}}>

       <TextField fullWidth required id="name" label="Name" variant="outlined" value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })} />
       </div>

       <div className="form-group" style={{paddingBottom: '15px'}}>
        
       <TextField fullWidth required id="company" label="Company" variant="outlined" value={form.company}
           onChange={(e) => updateForm({ company: e.target.value })} />
       </div>

       <div className="form-group" style={{paddingBottom: '15px'}}>

       <TextField fullWidth required id="position" label="Position" variant="outlined" value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })} />
       </div>

       <div className="form-group" style={{paddingBottom: '15px'}}>

       <TextField fullWidth required id="phone" label="Phone Number" variant="outlined" value={form.phone}
           onChange={(e) => updateForm({ phone: e.target.value })} />
       </div>

       <div className="form-group" style={{paddingBottom: '15px'}}>

       <TextField fullWidth required id="email" label="E-mail" variant="outlined" value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })} />
       </div>
       
       <div className="form-group" style={{paddingTop: '15px'}}>
       <Button variant="contained" disableElevation type="submit">Submit</Button> 
       </div>
     </form>
     
     </List>

   </Box>
   
 );
}