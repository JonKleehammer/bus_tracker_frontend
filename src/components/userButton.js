import React from 'react';

class UserButton extends React.Component {
    render() {
        return (
            <div className="UserButton">
              <button
                      className="button circle-button"
                      onMouseDown={this.props.handleMouseDown}>
                  user
              </button>
            </div>
        );
      }
}

export default UserButton;