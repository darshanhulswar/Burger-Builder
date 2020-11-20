import React, { useContext } from 'react';
import Context from './context/context';

function profile() {
    const context = useContext(Context)
    return (
        <div>
            {context.email}
        </div>
    )
}

export default profile
