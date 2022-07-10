import React from 'react';
import FileViewer from 'react-file-viewer';


const file = 'https://picsum.photos/500/600.jpg'
const type = 'jpg'

const DocView = () => {
  return (
    <div style={{ height: '100%' }}>
        <FileViewer
        fileType={type}
        filePath={file}/ >
    </div>
    
    );

    
  }
 
export default DocView