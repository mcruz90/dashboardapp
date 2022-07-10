import Message from './Message';
import Progress from './Progress';
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import { Grid } from '@mui/material';

const FileUpload = () => {

    const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:7000/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');

    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
            <Grid item xs={12} md={2}>
                <Button type='submit' variant="contained" component="label">
                <input
                    type='file'
                    hidden
                    onChange={onChange}
                />Browse files
                </Button>
            </Grid>
            <Grid item xs={12} md={10} sx={{marginTop: 1}}>
            <label className='custom-file-label' htmlFor='customFile'>
                {filename}
            </label>
            </Grid>
        </Grid>
      

        

        <Progress percentage={uploadPercentage} />

        <label htmlFor="contained-button-file">
            
            <Button type='submit' variant="contained" component="span">
                <Input sx={{color: 'white'}} value='UPLOAD' disableUnderline type='submit' />
            </Button>
            </label>
        
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
             
          </div>
        </div>
      ) : null}
    </Fragment>
  )
}

export default FileUpload