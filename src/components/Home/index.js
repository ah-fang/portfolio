import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/profile-photo.png';
import classNames from 'classnames';
import { Box } from "@mui/material";
import { data } from "../../data/Data";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'profile picture'} style={{background: data.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span>{data.firstName + ' ' + data.lastName}</span>
            </h1>
            <h2>I'm {data.position}.</h2>
         </Box>
      </Box>
   )
}