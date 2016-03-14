import React from 'react'
import ReactDOM from 'react-dom'
import Bacon from 'baconjs'
import App from './components/App.jsx'
import RecipesStore from './components/recipes/recipeStore'

const recipesProperty = RecipesStore.toItemsProperty([{
  name: "test",
  id: "4ad40cce-947e-4f06-9d62-babb7986d415"
},
{
  name: "test1",
  id: "06022fbd-0b67-4a7f-9911-2df94f8d4285"
}])

const appState = Bacon.combineTemplate({
  recipes: recipesProperty,
})

appState.onValue(state => {
  ReactDOM.render(<App {...state}/>, document.getElementById('recipesApp'))
})
