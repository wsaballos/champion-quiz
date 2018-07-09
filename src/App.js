import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champData: {},
      randomChamps: [],
      champs: [],
    };

    const champsFactory = (data, counter) => {
      let updatedCounter = counter;
      Object.keys(data).forEach((champ) => {
        const { randomChamps } = this.state;
        if (Math.random() < 0.5 / updatedCounter && randomChamps.length < 5) {
          this.setState(prevState => ({
            randomChamps: prevState.randomChamps.concat(
              data[champ],
            ),
          }));
          updatedCounter = Math.random();
        }
        updatedCounter += updatedCounter;
      });
    };

    const request = async () => {
      const championResponse = await axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
      this.setState({ champData: championResponse.data.data });
      const counter = Math.random();
      while (this.state.randomChamps.length < 5) {
        champsFactory(this.state.champData, counter);
      }
      for (const iterator of this.state.randomChamps) {
        const specificChampionResponse = await axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${iterator.id}.json`);
        this.setState(prevState => ({
          champs: prevState.champs.concat(specificChampionResponse.data.data[iterator.id]),
        }));
      }
    };
    request();
  }

  render() {
    const { champData, champs } = this.state;
    return (
      <Fragment>
        <Header />
        <Quiz
          champs={champs}
          champData={champData}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
