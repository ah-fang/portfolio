import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
// import Style from './Contact.module.scss';
// import { Box } from '@mui/material';
// import classNames from 'classnames';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        } 
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (

        <section>
           
            <form id='contact-form' onSubmit={handleSubmit}> 
                <h1 >Contact me</h1>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} ></input>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label><br></br>
                    <textarea name='message' rows='5' cols='50' defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button id='contact-submit-button' type='submit'>Submit</button>
            </form>
        </section>
    );
};