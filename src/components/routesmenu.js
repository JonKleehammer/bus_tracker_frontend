import React from 'react';
import RoutesButton from './routesbutton.js'
import RouteTile from './routeTile.js'
import {faBus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class RoutesMenu extends React.Component {
    render(){
        return (
            <div id="RoutesMenu" className="RoutesMenu">
                <RoutesButton/>
                <h3>List Of Routes <FontAwesomeIcon icon={faBus}/> </h3>
                <RouteTile routeName="DP - Discovery Park"/>
                <RouteTile routeName="NT - North Texan"/>
                <RouteTile routeName="EP - Eagle Point"/>
            </div>
        );
    }
}

export default RoutesMenu;