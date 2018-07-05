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
      randomChamps: [],
      randomChampsEndPoint: []
    };
    axios.get(
        "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json"
    )
    .then(result => {
      this.setState(prevState => ({ champData: prevState.champData = result.data.data }));
    }).then(() => {
      // random select champs from champData and place them into the randomChamps arr
      let counter = Math.random()
      while(this.state.randomChamps.length < 5) {
        for (let champ in this.state.champData) {
          ++counter
          if (Math.random() < .5 / counter && this.state.randomChamps.length < 5){
            this.setState(prevState => ({randomChamps: prevState.randomChamps.concat(this.state.champData[champ])}))
            counter = Math.random() 
          }
        }
      }
      }).then(() => {
        // hit all 5 of the random champs endpoints
        for (let iterator of this.state.randomChamps) {
          axios.get(
            `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${iterator.id}.json`
          ).then(res => {
            this.setState(prevState => ({randomChampsEndPoint: prevState.randomChampsEndPoint.concat(res.data.data)}))
          })
        }
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Quiz randomChamps={this.state.randomChamps} champData={this.state.randomChampsEndPoint}/>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
