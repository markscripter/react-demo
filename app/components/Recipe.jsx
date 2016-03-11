import React from 'react';

export default React.createClass({
  render() {
    const recipe = this.props.item;

    return (
      <li className="recipe">
        {recipe.name}
      </li>
    )
  }
})
