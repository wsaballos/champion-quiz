import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champData: {},
      randomChamp: " "
    };

    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json"
      )
      .then(result => {
        this.setState({ champData: result.data.data });
      });
  }
  randChamp = () => {
    let keys = Object.keys(this.state.champData);
    console.log(keys);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Quiz {...this.state.champData.Ezreal} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
