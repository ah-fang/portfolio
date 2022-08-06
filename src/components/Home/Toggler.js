import React from 'react';
import { Box } from "@mui/material";
import Style from './Home.module.scss';

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         <p onClick={handleClick}>
            <span 
            id='lightmode' 
            style={{color: Style}} 
            >
               Light Mode 
            </span>

            <span 
            id='darkmode' 
            style={{color: Style.dark}}
            > 
               Dark Mode
            </span>
         </p>
      </Box>
   )
}