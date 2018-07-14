import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Header from './components/header';
import Quiz from './components/quiz';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champData: {},
      randomChamps: [],
      champs: [],
    };
    this.champsFactory = this.champsFactory.bind(this);
    this.generateRandomChamps = this.generateRandomChamps.bind(this);
    this.request = this.request.bind(this);
    this.generateChampObj = this.generateChampObj.bind(this);
    this.resetState = this.resetState.bind(this);
    this.baseState = this.state;
    this.request();
  }

  champsFactory(data, counter) {
    Object.keys(data).forEach((champ) => {
      const { randomChamps } = this.state;
      if ((0.5 - Math.random()) - Math.random() > counter && randomChamps.length < 4) {
        this.setState(prevState => ({
          randomChamps: prevState.randomChamps.concat(
            data[champ],
          ),
        }));
      }
      counter = Math.random();
    });
  }

  resetState() {
    this.setState(this.baseState);
    this.request();
  }

  generateRandomChamps() {
    const counter = Math.random();
    while (this.state.randomChamps.length < 4) {
      this.champsFactory(this.state.champData, counter);
    }
    this.generateChampObj();
  }

  async generateChampObj() {
    for (const iterator of this.state.randomChamps) {
      const specificChampionResponse = await axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${iterator.id}.json`);
      this.setState(prevState => ({
        champs: prevState.champs.concat(specificChampionResponse.data.data[iterator.id]),
      }));
    }
  }

  async request() {
    const championResponse = await axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
    this.setState({ champData: championResponse.data.data });
    this.generateRandomChamps();
  }

  render() {
    const { champData, champs } = this.state;

    return (
      <Fragment>
        <Header />
        <Quiz
          champs={champs}
          champData={champData}
          generateRandomChamps={this.resetState}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
