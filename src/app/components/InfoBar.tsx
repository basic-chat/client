import React from 'react';
import { Typography } from 'rmwc';

const InfoBar = (props: any) => {
    return (
        <div>
            <Typography use="headline4">{props.room}</Typography>
            <button>close room</button>
        </div>
    )
};

export default InfoBar;