import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DeliveryDocuments from '../components/DeliveryDocuments';
import FormDocuments from '../components/FormDocuments';
import SupplyDocuments from '../components/SupplyDocuments';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Resources = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <Box flex={4} padding={3} bgcolor="#F4F4F4">
      <Typography variant="h5">Resources</Typography>
      <Typography variant="subtitle">Quick add</Typography>
    
    <Box><Typography variant="body">
      <li>Cash/Till Procedures (Daily Reports)</li>
      <li>Positec Reporting Procedures (requested by managers; Comp. stockings; AR listing)</li>
      <li>OTC Procedures</li>
      <li>Compression Stockings</li>
      <li>Month-end procedures</li>
      <li>Inventory management / Inventory Day</li>
      <li>Ordering supplies (boxes, special vnedors)</li>
      <li>ODSP procurement procedures</li>
    </Typography></Box>
      
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Deliveries" {...a11yProps(0)} />
          <Tab label="Positec" {...a11yProps(1)} />
          <Tab label="Kroll" {...a11yProps(2)} />
          <Tab label="Ordering Supplies" {...a11yProps(3)} />
          <Tab label="Forms/Templates" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DeliveryDocuments />
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
      <TabPanel value={value} index={2}>    
      </TabPanel>
      <TabPanel value={value} index={3}> 
        <SupplyDocuments />   
      </TabPanel>
      <TabPanel value={value} index={4}>  
        <FormDocuments />  
      </TabPanel>
    </Box>
    </Box>
  )
}

export default Resources