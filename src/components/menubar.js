import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
        <div className="MenuBar">
          <button className="button circle-button">Routes</button>
          <button className="button circle-button">User</button>
        </div>
    );
  }
}

export default MenuBar;