import React, { Component } from 'react';
import 'tailwindcss/dist/tailwind.css'
import authContext from './context/context';
import Profile from './profile';
import StyleComponent from './hoc/StyleComponent';

class App extends Component {

  static contextType = authContext;

  render() {
    return (
      <React.Fragment>
        <h1 className="">{this.context.email}</h1>
        <button>Hello</button>
        <Profile />
      </React.Fragment>
    )
  }
}

export default StyleComponent(App, "text-center text-red-500 font-bold");