import React, { useState } from "react";
// import { Router } from 'react-router-dom';
import { Link } from "react-router-dom";

function About() {

  return (
   
     <div  className="top" style={{margin:"250px", backgroundColor:"red",}}>
        <h1>About</h1>
        <div >
        <p >Creating your own portfolio takes time. First you have to choose the technologies among the overwhelming amount of options we have. Am I going to go for React? Angular? PHP? Ruby? What about SEO? Should I try node? What them, where do I host? Once you decided and set everything up,
        you’ve got to list all your projects manually, add the descriptions, links, images and decide on a design that shows your very best. Suddenly, the simple task of creating a pretty portfolio is overwhelming.</p>
        </div>
        </div>
    
  );
}

export default About;
