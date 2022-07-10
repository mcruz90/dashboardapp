import React from "react";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import SchedList from "./schedList";
import { Button } from "@mui/material";
import { Link} from "react-router-dom";

const OpenShift = () => {

  return (
    <div>
    <TableContainer component={Paper} elevation={0}>

      <SchedList />

      
    </TableContainer>

      <div align="right" style={{marginTop: '15px'}}> 
        <Button variant="contained" disableElevation component={Link} to={'/createshift'}>Add Task</Button>
      </div>
    </div>
  )
}

export default OpenShift