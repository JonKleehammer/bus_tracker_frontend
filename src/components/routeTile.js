import React from 'react';
import Stop from './stop'

class RouteTile extends React.Component {
    static defaultProps = {
        routeName: 'Nameless Route'
    }
    render(){
        return(
            <div className="RouteTile">
                {this.props.routeName}
                <Stop stopName="Stop1"/>
                <Stop stopName="Stop2"/>
            </div>
        )
    }
}


export default RouteTile;