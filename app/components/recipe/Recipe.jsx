import React from 'react';

export const Recipe = React.createClass({
  render() {
    const recipe = this.props.item;

    return (
      <li className="recipe">
        {recipe.name}
      </li>
    )
  }
})
