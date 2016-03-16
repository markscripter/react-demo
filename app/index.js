import React from 'react'
import ReactDOM from 'react-dom'
import Bacon from 'baconjs'
import { App } from './components/App.jsx'
import { toItemsProperty } from './components/recipes/recipeStore'

const recipesProperty = toItemsProperty([{
  name: "test",
  id: "d7d64cc0-6113-4a7d-852c-6e15198bc1ae"
},
{
  name: "test1",
  id: "a43e3efe-c95b-442e-a55f-81aefd139139"
}])

const appState = Bacon.combineTemplate({
  recipes: recipesProperty,
})

appState.onValue(state => {
  ReactDOM.render(<App {...state}/>, document.getElementById('recipesApp'))
})
