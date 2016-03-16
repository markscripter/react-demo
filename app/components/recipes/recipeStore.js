import Bacon from 'baconjs'
import R from 'ramda'
import dispatcher from 'dispatcher'

const AddRecipe = (recipes, recipe) =>
  recipes.concat(recipe)

const RemoveRecipe = (recipes, id) =>
  R.reject(recipe =>
    recipe.id !== id
  , recipes)

const UpdateRecipe = (recipes, updatedRecipe) =>
  R.map(recipe =>
    recipe.id === updatedRecipe.id
      ? R.merge(recipe, updatedRecipe)
      : recipe
  , recipes)

const UpdatedRecipeStore = (recipes, updatedRecipeStore) =>
  updatedRecipeStore

const updateStore = updatedRecipeStore =>
  updatedRecipeStore
    ? dispatcher.push('updateStore', updatedRecipeStore) : 0




export function toItemsProperty(initialItems) {
  return Bacon.update(initialItems,
    [dispatcher.stream('add')], AddRecipe,
    [dispatcher.stream('remove')], RemoveRecipe,
    [dispatcher.stream('update')], UpdateRecipe,
    [dispatcher.stream('updateStore')], UpdatedRecipeStore
  )
}

export function addRecipe(recipe) {
  recipe
    ? dispatcher.push('add', recipe)
    : 0
}

export function removeRecipe(id) {
  id
    ? dispatcher.push('remove', id)
    : 0
}

export function updateRecipe(recipe) {
  recipe
    ? dispatcher.push('update', recipe)
    : 0
}

export function getRecipes() {
  fetch('./data/recipes.json')
    .then(res => res.json())
    .then(updateStore)
}
