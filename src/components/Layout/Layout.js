import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

function Layout(props) {
    return (
        <Auxiliary>
            <div>Toolbar, sideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout
