import React from 'react';
import Header from './Header.jsx';
import Recipes from './Recipes.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Recipes recipes={this.props.recipes}/>
      </div>
    );
  }
}
