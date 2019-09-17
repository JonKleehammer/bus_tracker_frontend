import React from 'react';

class Stop extends React.Component {
    static defaultProps = {
        stopName: 'Nameless Stop'
    }
    render(){
        return(
            <div className="Stop">
                {this.props.stopName}
            </div>
        )
    }
}

export default Stop;