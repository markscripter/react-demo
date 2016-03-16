import React from 'react';
import { Recipe } from '../recipe/Recipe.jsx';
import { getRecipes } from './recipeStore'

export const Recipes = React.createClass({
  render() {
    const recipes = this.props.recipes;

    return (
      <section className="recipes">
        <a onClick={this.getUpdatedRecipes}>Get Updated</a>
        <ul>
        {recipes.map(recipe => <Recipe key={recipe.id} item={recipe}/>)}
        </ul>
      </section>
    )
  },
  getUpdatedRecipes(e) {
    e
      ? (e.preventDefault(), getRecipes())
      : 0
  }
})
