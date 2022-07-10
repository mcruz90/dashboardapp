import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Box from '@mui/material/Box';
import {Typography, List, Button } from '@mui/material' 
import TextField from '@mui/material/TextField';
 
export default function EditShift() {
 const [form, setForm] = useState({
   time: "",
   title: "",
   subtitle: "",
   resource: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/sched/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/schedule")
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
     time: form.time,
     title: form.title,
     subtitle: form.subtitle,
     resource: form.resource
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/schedupdate/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedRecord),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/schedule");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <Box flex={4} padding={3} bgcolor="#F4F4F4">
     <Typography variant="h5" style={{paddingBottom: '10px'}}>Edit Schedule Task</Typography>
     
     <List sx={{ width: '95%', bgcolor: 'background.paper', borderRadius: '15px', padding: '20px'}}>

     <form onSubmit={onSubmit}>

       <div className="form-group" style={{paddingBottom: '15px'}}>

       <TextField fullWidth required id="time" label="Time" variant="outlined" value={form.time}
           onChange={(e) => updateForm({ time: e.target.value })} />
       </div>

       <div className="form-group" style={{paddingBottom: '15px'}}>
        
       <TextField fullWidth required id="title" label="Task Title (e.g. Pick up order from in-patient)" variant="outlined" value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })} />
       </div>
       
       <div className="form-group">
       <TextField
        fullWidth
        required
          id="subtitle"
          label="Task Description"
          multiline
          rows={4}
          value={form.subtitle}
          defaultValue="Default Value"
          onChange={(e) => updateForm({ subtitle: e.target.value })}
        />

       </div>

       <div className="form-group" style={{paddingTop: '15px'}}>
       <TextField
        fullWidth
          id="resource"
          label="Resources"
          multiline
          rows={2}
          value={form.resource}
          onChange={(e) => updateForm({ resource: e.target.value })}
        />

       </div>
 
       <div className="form-group" style={{paddingTop: '15px'}}>
        <Button variant="contained" disableElevation type="submit">Submit</Button> 
       </div>
     </form>
     
     </List>

   </Box>
   
 );
}