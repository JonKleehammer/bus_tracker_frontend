import React from 'react';
import StopList from './stoplist'

class RouteTile extends React.Component {
    static defaultProps = {
        routeName: 'Nameless Route'
    }
render(){
    return(
        <div className="RouteTile">
            {this.props.routeName}
        </div>
    )
}
}


export default RouteTile;