import React, { useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import './App.module.scss';
import './App.css';
import Style from './App.module.scss'
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }
   return (
      <div>
         <HashRouter>
         <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Nav darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'/contact'} element={<Contact/>}/>
                  <Route exact path={'/resume'} element={<Resume />}/>
               </Routes>
            </Grid>
         </Grid>     
         <Footer />
      </Box>
         </HashRouter>
      </div>
   );
}

export default App;
