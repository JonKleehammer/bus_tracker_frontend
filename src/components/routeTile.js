import React from 'react';
import StopList from './stopList'

class RouteTile extends React.Component {
    static defaultProps = {
        routeName: 'Nameless Route'
    };
    handleClick() {
        const stopList = document.getElementById('Stop')
        stopList.classList.toggle('expand')
    }
    render(){
        return(
            <div className="RouteTile button" onClick={() => this.handleClick()}>
                {this.props.routeName}
                <StopList stopNames={['stop1', 'stop2', 'stop3', 'stop4']}/>
            </div>
        )
    }
}


export default RouteTile;