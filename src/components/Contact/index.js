import React from "react";
import { info } from '../../info/Info';
// import Style from './Contact.module.scss';
// import { Box } from '@mui/material';
// import classNames from 'classnames';

export default function Contact() {
    return (
        <form className="contact-form" style={{color: info.baseColor}}>
            <input type="text" name='name' placeholder="name" />
            <input type="email" name='email' placeholder='Email' />
            <input type="text" name='message' placeholder='Message' />
            <button type="submit">Send</button>
        </form>
 
    );
};