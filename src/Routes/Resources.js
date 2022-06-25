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
      <Typography variant="subtitle">View documents/templates/procedures for all merch tasks</Typography>
    
      
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Deliveries" {...a11yProps(0)} />
          <Tab label="Positec" {...a11yProps(1)} />
          <Tab label="Kroll" {...a11yProps(2)} />
          <Tab label="Ordering Supplies" {...a11yProps(3)} />
          <Tab label="Forms/Templates" {...a11yProps(4)} />
          <Tab label="Procedures" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DeliveryDocuments />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>Ordering OTC -- PO and Receiving</p>
      </TabPanel>
      <TabPanel value={value} index={2}>    
      </TabPanel>
      <TabPanel value={value} index={3}> 
        <SupplyDocuments />   
      </TabPanel>
      <TabPanel value={value} index={4}>  
        <FormDocuments />  
      </TabPanel>
      <TabPanel value={value} index={5}>  
        <p>Cash/Till Procedures / Opening / Closing Procedures</p>
        <p>Reporting Procedures (daily cash/month-end/manager-requested reports)</p>
        <p>Inventory Day</p>
      </TabPanel>
    </Box>
    </Box>
  )
}

export default Resources