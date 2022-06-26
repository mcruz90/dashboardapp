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
  createData('10:15AM', 'Create Cash Report', `Double-count tills in safe to $200 and safe to $500; print the previous day's cash reports from Positec and create delivery report from excel spreadsheet`, `cashprocedures.pdf | cashtemplates.pdf`), 
  createData('10:30AM', `Reconcile K&F OTC order / work on PH call list`, `Print invoices from K&F, reconcile order using scanner, receive order in Positec`, `k&f.pdf | positec.pdf | otc.pdf`),
  createData('11:30AM', 'Compile pending delivery list', 'Create list of pending deliveries and hand to closing pharmacist', `deliveries.pdf`),
  createData('12:00PM', 'LUNCH', 'Must go at 12PM if there are three merch techs, can go at 1PM if there are two'),
  createData('1:00PM', 'Deliveries', 'Continue to work on deliveries'),
  createData('2:00PM', 'Final check on and boxing of pending deliveries', 'Check outstanding deliveries with closing pharmacist; box any outstanding deliveries and remember to replenish fridges with gel packs for next day', 'deliveries.pdf'),
  createData('3:00PM', 'Create manifests', 'Deliveries should be completed by 3pm and manifests printed for ATS and Atripco; pickup for Purolator deliveries must also be submitted online', 'deliveries.pdf | purolator.pdf'),
  createData('3:30PM', 'Submit box orders', 'If box and gel pack supplies are low, submit order form via email to SHN', 'deliveries.pdf | orderingsupplies.pdf | SHNboxtemplate.pdf'),
  createData('4:00PM', 'Scan and submit OTC orders', 'Check the front shop and order items through appropriate vendors as needed', 'otcOrders.pdf | k&f.pdf | vendors.pdf, positecPO.pdf'),
  createData('5:00PM', `Work on next day's deliveries`, `Begin to work on the next day's deliveries`, 'deliveries.pdf'),
  createData('5:45PM', 'Begin closing procedures', `If patient flow is slow, begin closing off Till B: print details and summary report from POS machine and count float to $200, setting aside surplus amount in corner of till`, 'closing.pdf | positec.pdf'),
  createData('6:00PM', 'Close gates and finish closing', 'Close gates, close Till A, turn off lights, return Tills to safe', 'closing.pdf'),
  createData('6:15PM', 'GO HOME', 'punch out'),
];


const CloseShift = () => {
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

export default CloseShift