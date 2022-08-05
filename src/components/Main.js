import React, { useState } from 'react';
import Style from './Main.module.scss'
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from './Contact';
import Resume from './Resume';
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function Main() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
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
      </Box>
   )
}

