import React from "react";
import classNames from 'classnames';
import { Box } from '@mui/material';

export default function Resume () {
    const icon = "fa fa-arrow-circle-o-down fa-lg";
    return (
        <Box width={'100%'} className='download-box'>
            <a href="AFangResume.pdf" download>
                <button type="button" className='download-btn'> 
                    <i className={classNames(icon)} id='downloadicon'></i>
                    Download Resume
                </button>
            </a>
        </Box>
    );
};