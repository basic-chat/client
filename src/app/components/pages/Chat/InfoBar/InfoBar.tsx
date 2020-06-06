import React from 'react';
import { Typography } from 'rmwc';

const InfoBar = (props: any) => {
    return (
        <div>
            <Typography use="headline4">{props.room}</Typography>
        </div>
    )
};

export default InfoBar;