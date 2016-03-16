import React from 'react';
import { Header } from './header/Header.jsx';
import { Recipes } from './recipes/Recipes.jsx';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Recipes recipes={this.props.recipes}/>
      </div>
    );
  }
}
