import React from 'react';
import { Route, NavLink } from "react-router-dom";

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        Home
        <br/>
        <NavLink to="/about">关于@zifer/create-base</NavLink>
      </div>
    );
  }
}
