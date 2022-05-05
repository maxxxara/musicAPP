import React from 'react';
import {
  Link
} from "react-router-dom";

const About = () => {
  return(
  	<div className="container">
  		<h1>About</h1>
      <p className="margin30">The page is in preparation</p>
      <Link to="/">Redirect me on main page</Link>
  	</div>
  )
};


export default About;
