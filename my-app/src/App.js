import { BrowserRouter, Route, Routes } from "react-router-dom"
import Data from "./Routing/Data"
import './App.css';
import Content from "./Routing/Content";
import Update from "./Routing/Update";
// import { Express } from "express";
// import axios from "axios";


function App() {
 
  return (
    <div>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Content></Content>}></Route>
            <Route path="/Data" element={<Data></Data>}></Route>
            <Route path="/Update" element={<Update></Update>}></Route>
           </Routes>
        </BrowserRouter>
     </div>   
  );
}

export default App;
