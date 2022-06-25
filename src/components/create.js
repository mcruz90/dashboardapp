import React, { useState } from "react";
import { useNavigate } from "react-router";
import {Box, Typography, List, Button } from '@mui/material' 
import TextField from '@mui/material/TextField';

export default function Create() {
 const [form, setForm] = useState({
   name: "",
   note: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newRecord = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRecord),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", note: "" });
   navigate("/");
 }

  const handleClear = () => {
    setForm({ name: "", note: "" })
  }
 
 // This following section will display the form that takes the input from the user.
 return (
  <Box flex={4} padding={3} bgcolor="#F4F4F4">
    
    <Typography variant="h5" style={{paddingBottom: '10px'}}>Create New Message</Typography>

    <List sx={{ width: '95%', bgcolor: 'background.paper', borderRadius: '15px', padding: '20px'}}>
      

     <form onSubmit={onSubmit}>
       <div className="form-group" style={{paddingBottom: '15px'}}>
       <TextField fullWidth required id="name" label="Staff Name" variant="outlined" value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })} />
       </div>

       <div className="form-group">
       <TextField
        fullWidth
        required
          id="note"
          label="Message"
          multiline
          rows={4}
          value={form.note}
          defaultValue="Default Value"
          onChange={(e) => updateForm({ note: e.target.value })}
        />

       </div>
       
       <div className="form-group" style={{paddingTop: '15px'}}>
       <Button variant="contained" disableElevation type="submit">Submit</Button> 
       <Button style={{marginLeft: '10px' }} variant="outlined" color="error" onClick={handleClear}>Clear</Button>
       </div>
     </form>
     
     </List>
   </Box>
 );
}