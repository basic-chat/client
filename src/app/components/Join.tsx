import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from 'rmwc';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join">
            <div className="join__inner-container">
                <h1>join</h1>
                <div className="join__input">
                    <TextField value={name} placeholder="Name" name="name" type="text" onChange={(e: any) => setName(e.target.value)}/>
                </div>
                <div className="join__input">
                    <TextField value={room} placeholder="Room" name="room" type="text" onChange={(e: any) => setRoom(e.target.value)} />
                </div>
                <Link onClick={(e: any) => (!name || !room) ? e.preventDefault() : null} to={`/todos?name=${name}&room=${room}`}>
                    <Button type="submit" raised>Sign in</Button>
                </Link>
            </div>
        </div>
    )
}

export default Join;