import React from 'react';
import RoutesButton from './routesbutton.js'
import {faBus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class RoutesMenu extends React.Component {
    render(){
        return (
            <div id="RoutesMenu" className="RoutesMenu">
                <RoutesButton/>
                <h3>List Of Routes <FontAwesomeIcon icon={faBus}/> </h3>

            </div>
        );
    }
}

export default RoutesMenu;