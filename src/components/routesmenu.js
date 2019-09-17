import React from 'react';
import RoutesButton from './routesbutton.js'

class RoutesMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visibility: false }
    }
    render(){
        return (
            <div className="RoutesMenu">
                <RoutesButton/>
                List of Routes
            </div>
        );
    }
}

export default RoutesMenu;