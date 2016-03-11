import React from 'react';
import Recipe from './Recipe.jsx';
import RecipeStore from '../stores/recipes'

export default React.createClass({
  render() {
    const recipes = this.props.recipes;

    return (
      <section className="recipes">
        <a onClick={this.getUpdatedRecipes}>Get Updated</a>
        <ul>
        {recipes.map(recipe => <Recipe key={recipe} item={recipe}/>)}
        </ul>
      </section>
    )
  },
  getUpdatedRecipes(e) {
    e ? e.preventDefault() : 0;
    RecipeStore.getRecipes()
  }
})
