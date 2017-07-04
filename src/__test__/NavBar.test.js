import React from 'react';
import {render} from 'react-dom';
import NavBar from "../components/NavBar";

it("NavBar renders without crashing", ()=>{
   const div = document.createElement("div");
   render(<NavBar/>,div);
});