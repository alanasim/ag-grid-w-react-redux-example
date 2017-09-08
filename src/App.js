import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { rowData } = this.props
    console.log(rowData)
    return (
      <div className="App">
        initial
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rowData: state.rowData
  }
}

export default connect(mapStateToProps)(App);
