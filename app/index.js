import React from 'react'
import ReactDOM from 'react-dom'
import Bacon from 'baconjs'
import App from './components/App.jsx'
import RecipesStore from './stores/recipes'

const recipesProperty = RecipesStore.toItemsProperty(['test', 'test1'])

const appState = Bacon.combineTemplate({
  recipes: recipesProperty,
})

appState.onValue(state => {
  ReactDOM.render(<App {...state}/>, document.getElementById('recipesApp'))
})
