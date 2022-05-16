import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { Box } from '@mui/material';



const Calendar = () => {
    const [value, setValue] = React.useState(new Date());

    return (
      <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateTimePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          readOnly={true}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      
      </Box>
    );
  }

export default Calendar