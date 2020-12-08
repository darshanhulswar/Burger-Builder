import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css'

function Layout(props) {
    return (
        <Auxiliary>
            <div>Toolbar, sideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout
