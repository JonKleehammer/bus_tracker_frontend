import React from 'react';

class RoutesButton extends React.Component {
    handleClick() {
        const menu = document.getElementById("RoutesMenu")
        menu.classList.toggle('slideout')
    }
  render() {
    return (
        <div className="RoutesButton">
          <button   className="button circle-button"
                    onClick={() => this.handleClick()}>routes</button>
        </div>
    );
  }
}

export default RoutesButton;