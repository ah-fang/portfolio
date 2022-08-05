import React from "react";
import classNames from 'classnames';

export default function Resume () {
    const icon = "fa fa-arrow-circle-o-down";
    return (
        <>
            <a href="dummyfile.txt" download='dummyfile'>
                <i className={classNames(icon)}></i>
                <button type="button"> Download Resume</button>
            </a>
        </>
        
    );
};