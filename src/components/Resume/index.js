import React from "react";
import classNames from 'classnames';
import { Box } from '@mui/material';

export default function Resume () {
    const icon = "fa fa-arrow-circle-o-down fa-lg";
    return (
        <Box width={'100%'}>
            <a href="dummyfile.txt" download='dummyfile'>
                <i className={classNames(icon)}></i>
                <button type="button"> Download Resume</button>
            </a>
        </Box>
        
    );
};