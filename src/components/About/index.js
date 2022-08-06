import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { data } from "../../data/Data";
import classNames from 'classnames';
import me from '../../img/profile-photo.png';

export default function About() {
    const firstName = data.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: data.baseColor}}>{firstName}{data.lastName.toLowerCase()} $</span> cat 
                about{firstName} </p>
            <p><span style={{color: data.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {data.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: data.baseColor}}>{firstName}{data.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span className={Style.green}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: data.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {data.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: data.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {data.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>         
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'profile picture'} style={{background: data.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
            <Box>
                <h1>Hi, I'm <span>{data.firstName + ' ' + data.lastName}</span>
                </h1>
                <h2>I'm {data.position}.</h2>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
                {/* {data.socials.map((social, index) => (
                    <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                ))} */}
                </Box>
            </Box>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
        </Box>
    )
}