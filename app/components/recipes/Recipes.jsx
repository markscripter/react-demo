import React from 'react';
import Recipe from '../recipe/Recipe.jsx';
import RecipeStore from './recipeStore'

export default React.createClass({
  render() {
    const recipes = this.props.recipes;

    return (
      <section className="recipes">
        <a onClick={this.getUpdatedRecipes}>Get Updated</a>
        <ul>
        {recipes.map(recipe => <Recipe key={recipe.name} item={recipe}/>)}
        </ul>
      </section>
    )
  },
  getUpdatedRecipes(e) {
    e ? (e.preventDefault(), RecipeStore.getRecipes()) : 0
  }
})
