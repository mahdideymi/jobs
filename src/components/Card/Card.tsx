import React from 'react';
import './Card.scss';

export class Card extends React.Component {
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}
