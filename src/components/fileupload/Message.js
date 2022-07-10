import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const Message = ({ msg }) => {
  const [open, setOpen] = React.useState(true);

  return (
    
    <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
           {msg} 
      
        </Alert>
      </Collapse>
     
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;