import React, { Component }from 'react';
import './App.css';
import axios from "axios";
import Navbar from "./components/Navbar";
import DisplayData from "./components/DisplayData"


class App extends Component {
  _isMounted = false;
  state = {
    players: [],
    isLoading: true
  };
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then((res) => {
      this.setState({
          players: res.data
        });
      if (this._isMounted) {
        this.setState({isLoading: false})
      }
      console.log( res.data.players)
    })
    .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <DisplayData players={this.state.players}/>
      </div>
    );
  }
}

export default App;
