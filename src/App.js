import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from "graphql-tag";
import { Query } from "react-apollo";



const QUERY = gql`
  {
    hello
  }
`;

const LambdaDemo = () => {
  return (
  <Query query={QUERY}>
      {({ data }) => {
        return (<div>A greeting from the server: {data.hello}</div>);
      }}
    </Query>
);
    };

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo/>
      </div>
    );
  }
}

export default App;
