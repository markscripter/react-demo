import Bacon from 'baconjs'
import R from 'ramda'
import dispatcher from '../_utils/dispatcher'

export default {
  toItemsProperty(initialItems) {
    return Bacon.update(initialItems,
      [dispatcher.stream('add')], AddRecipe,
      [dispatcher.stream('remove')], RemoveRecipe,
      [dispatcher.stream('update')], UpdateRecipe,
      [dispatcher.stream('updateStore')], UpdatedRecipeStore
    );

    function AddRecipe(recipes, recipe) {
      return recipes.concat(recipe)
    }

    function RemoveRecipe(recipes, id) {
      return R.reject(recipe => recipe.id !== id, recipes)
    }

    function UpdateRecipe(recipes, updatedRecipe) {
      return R.map(recipe => {
        return recipe.id === updatedRecipe.id ? R.merge(recipe, updatedRecipe) : recipe
      }, recipes)
    }

    function UpdatedRecipeStore(recipes, updatedRecipeStore) {
      return updatedRecipeStore
    }
  },

  addRecipe(recipe) {
    recipe ? dispatcher.push('add', recipe) : 0
  },

  removeRecipe(id) {
    id ? dispatcher.push('remove', id) : 0
  },

  updateRecipe(recipe){
    recipe ? dispatcher.push('update', recipe) : 0
  },

  getRecipes() {
    fetch('/data/recipes.json')
      .then(res => res.json())
      .then(updateStore)
  }
}
function updateStore(updatedRecipeStore) {
  updatedRecipeStore ? dispatcher.push('updateStore', updatedRecipeStore) : 0
}
