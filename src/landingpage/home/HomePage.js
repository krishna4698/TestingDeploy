import React from "react";
import Hero from "./Hero";
import Awards from './Awards';
import Pricing from "./Pricing";
import Education from "./Education";
import Footer from '../Footer'
import Navbar from "../Navbar";
export default function Homepage(){
return (
    <div>
       
   <Hero/>
   <Awards></Awards>
   <Pricing></Pricing>
   <Education></Education>
  
       </div>
)
}