import React from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from '../Layout/SideDrawer/SideDrawer'

class Layout extends React.Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerHandler = () => {
        console.log('Menu clicked')
        this.setState({
            showSideDrawer : !this.state.showSideDrawer
        })
    }
    render() {
        return(
            <Aux>
                <SideDrawer show={this.state.showSideDrawer} backdropClick={this.sideDrawerHandler} />
                
                <Toolbar showSideDrawer={this.sideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
    

export default Layout