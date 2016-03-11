import React from 'react';

export default React.createClass({
  render() {
    return (
      <li className="recipe">{this.props.item}</li>
    )
  }
})
