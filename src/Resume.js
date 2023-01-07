import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
// import { Router } from 'react-router-dom';


function Resume() {
    

    const [viewList, setViewList] = useState(false);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    

  return (
    <div className='top'>
      
        <h1>Resume</h1>
     
        <Document file="Resume-Palraj" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

        </div>
  )
}

export default Resume