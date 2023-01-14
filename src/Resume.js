
import React, { useState } from 'react';
import resume from "./resume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
 



function Resume (){
 


  


  

  return (
<div className="top">
  <h1>Resume</h1>
{/* 
	<center>
<Document
        file="http://www.pdf995.com/samples/pdf.pdf"
		onLoadError={console.error}
        onLoadSuccess={onDocumentLoadSuccess}>
			
			{Array.from (new Array(numPages), (el,index) => (
				 <Page 
				 key={`page_${index+1}`} 
				 pageNumber={index+1}
				 />
			))}
       
      </Document>
	  </center>
	   */}


<a href={resume}> <p>Link to My Resume</p></a>



</div>
   
  );
};


export default Resume