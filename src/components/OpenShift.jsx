import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function createData(time, task, description, documentResources) {
  return { time, task, description, documentResources};
}

const rows = [
  createData('8:00AM', 'Opening Procedures', 'open gates with key, turn on lights, count float and take out two tills from safe, take POS machines off standalone mode', 'opening.pdf'),
  createData('8:30AM', `Check staff notes, emails, missing rx images, same-day deliveries`, `Read notes from staff, check emails for any delivery issues, check kroll 'missing rx images' report, check for any same-day deliveries to be boxed by 12pm; (MONDAYS ONLY: fax PH refill requests)`, 'opening.pdf | phmeds.pdf | kroll.pdf | deliveries.pdf'),
  createData('9:00AM', 'Create delivery labels / work on PH call list', 'Charge rx co-pays and create atripco, ats and purolator waybills; if most deliveries have been completed, work through the PH call list', 'waybills.pdf | logins.pdf | troubleshoot.pdf | PHmeds.pdf'),
  createData('10:30AM', 'Double-count cash', 'Double-count floats in till, completing cash report and drop-off to the cash office', 'cashtemplates.pdf | cashprocedures.pdf'),
  createData('11:00AM', 'LUNCH', 'Must go at 11am if there are three merch techs, but may go at 12pm if only two or if it is Friday', ''),
  createData('12:00PM', 'Deliveries and front shop', 'Continue to work through deliveries and handle front shop (cash out OTCs and rx pickups); if most deliveries are done, continue to work on PH call list', 'frontshop.pdf | waybills.pdf | troubleshoot.pdf | PHmeds.pdf'),
  createData('1:00PM', 'Pick up desferal', 'Call IVads to check if desferals are ready to be picked up', 'desferal.pdf'),
  createData('2:00PM', 'Final check on pending deliveries', 'Check outstanding deliveries with closing pharmacist', 'deliveries.pdf'),
  createData('3:00PM', 'Create manifests', 'Deliveries should be completed by 3pm and manifests printed for ATS and Atripco; pickup for Purolator deliveries must also be submitted online', 'deliveries.pdf | purolator.pdf'),
  createData('3:30PM', 'Mark deliveries as shipped', `Mark the day's deliveries as shipped in Kroll`, 'deliveries.pdf | kroll.pdf'),
  createData('4:00PM', 'GO HOME', 'punch out', ''),
];

const OpenShift = () => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TIME</TableCell>
            <TableCell align="left">TASK</TableCell>
            <TableCell>RESOURCES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.time}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography variant="body1">{row.time}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body2" sx={{fontweight: 'bold'}}>{row.task}</Typography>
                <Typography variant="subtitle2">{row.description}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{row.documentResources}</Typography>
              </TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OpenShift