import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'Inventory audits',
    description: `Take advantage of down periods to audit our OTC on-hands
    to make sure our inventory and pricing is up-to-date.`,
    buttonLabel: <Button disableElevation variant="contained">More info</Button>,
  },
  {
    label: 'Calendar review',
    description:
      `Review the calendar weekly to check for RiTux/Truxima/Ruxience
      prescriptions that need to be brought down to the in-patient pharmacy`,
      buttonLabel: <Button disableElevation variant="contained">More Info</Button>,
  },
  {
    label: 'CoaguChek strips',
    description: `Don't forget to check our stock regularly! Order directly from
            Roche before 4pm; ETA is roughly 3 business days so plan accordingly. `,
    buttonLabel: <Button disableElevation variant="contained">More Info</Button>,
  },
  {
    label: 'Need a refresher?',
    description: `Can't remember the Purolator login? Deliveries sent to the wrong address?
    Visit the 'Resources' page to review procedures.
         `,
    buttonLabel: <Button disableElevation variant="contained">More Info</Button>,
  },
];

export default function InfoCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{mt: 1, background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', borderRadius: '10px' }}>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'transparent',
          
        }}
      >
        <Typography sx={{ color: 'white'}} variant="h6">{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 100, p: 2}}>
        <Typography variant="body1" sx={{ color: 'white',}}>{steps[activeStep].description}</Typography>
        <div align="right" style={{paddingTop: 10, paddingRight: 20, paddingBottom: 10}}>{steps[activeStep].buttonLabel}</div>
      </Box>
      <MobileStepper
        variant="text"
        sx={{ borderRadius: '10px', 
        bgcolor: 'transparent',}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
