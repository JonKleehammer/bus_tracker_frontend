import React from 'react';
import RoutesButton from './routesbutton.js'

class RoutesMenu extends React.Component {
    render(){
        return (
            <div id="RoutesMenu" className="RoutesMenu">
                <RoutesButton/>
                <h3>List Of Routes</h3>

            </div>
        );
    }
}

export default RoutesMenu;