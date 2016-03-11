import React from 'react'
import ReactDOM from 'react-dom'
import Bacon from 'baconjs'
import App from './components/App.jsx'
import RecipesStore from './components/recipes/recipeStore'

const recipesProperty = RecipesStore.toItemsProperty([{
  name: "test"
},
{
  name: "test1"
}])

const appState = Bacon.combineTemplate({
  recipes: recipesProperty,
})

appState.onValue(state => {
  ReactDOM.render(<App {...state}/>, document.getElementById('recipesApp'))
})
