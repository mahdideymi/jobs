import React from 'react';
import './Screen.scss';

export class Screen extends React.Component {
  render() {
    return (
      <div className="screen-background">
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
