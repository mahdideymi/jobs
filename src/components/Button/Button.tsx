import React from 'react'
import './Button.scss'
export const Button = (props: any) => (
    <button className="reg-log-btn">
        {props.name}
    </button>
);