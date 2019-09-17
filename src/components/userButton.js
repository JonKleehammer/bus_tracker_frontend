import React from 'react';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class UserButton extends React.Component {
    render() {
        return (
            <div className="UserButton">
              <button
                      className="button circle-button"
                      onMouseDown={this.props.handleMouseDown}>
                  <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
        );
      }
}

export default UserButton;