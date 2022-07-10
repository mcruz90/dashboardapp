import React, { useState } from "react";
import { useNavigate } from "react-router";
import {Box, Typography, List, Button } from '@mui/material' 
import TextField from '@mui/material/TextField';

export default function CreateShift() {
 const [form, setForm] = useState({
   time: "",
   title: "",
   subtitle: "",
   resource: "",
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
 
   await fetch("http://localhost:5000/sched/add", {
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
 
   setForm({ time: "", title: "", subtitle: "", resource: "", });
   navigate("/schedule");
 }

  const handleClear = () => {
    setForm({ time: "", title: "", subtitle: "", resource: "", })
  }
 
 // This following section will display the form that takes the input from the user.
 return (
  <Box flex={4} padding={3} bgcolor="#F4F4F4">
    
    <Typography variant="h5" style={{paddingBottom: '10px'}}>Create Schedule Task</Typography>

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
          id="resources"
          label="Resources"
          multiline
          rows={2}
          value={form.resource}
          defaultValue="Default Value"
          onChange={(e) => updateForm({ resource: e.target.value })}
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