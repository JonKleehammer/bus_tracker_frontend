import React from 'react';

class StopList extends React.Component {
    static defaultProps = {
        stopNames: ['nameless stop1', 'nameless stop2']
    }
    render(){
        const stopNames = this.props.stopNames;
        const listItems = stopNames.map((stopName) =>
          <li className="stopElement">{stopName}</li>
        );
        return(
            <div id="Stop" className="Stop">
                <ul className="stopElement">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default StopList;