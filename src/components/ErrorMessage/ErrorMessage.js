import React from 'react';
import {Message} from 'primereact/message';

export default function ErrorMessage(props) {
    return (
        <div>
            {props.show && <Message severity="error" text={props.message}/>}
        </div>
    )
}
