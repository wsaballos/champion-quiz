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
      Object.keys(data).forEach((champ) => {
        if (Math.random() < 0.5 / counter && this.state.randomChamps.length < 5) {
          this.setState(prevState => ({
            randomChamps: prevState.randomChamps.concat(
              data[champ],
            ),
          }));
          counter = Math.random();
        }
        ++counter;
      });
    };

    axios
      .get(
        'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json',
      )
      .then((result) => {
        this.setState({ champData: result.data.data });
      })
      .then(() => {
        // random select champs from champData and place them into the randomChamps arr
        const counter = Math.random();
        while (this.state.randomChamps.length < 5) {
          champsFactory(this.state.champData, counter);
          //   // console.log(this.state.randomChamps);
        }
      })
      .then(() => {
        // hit all 5 of the random champs endpoints
        for (const iterator of this.state.randomChamps) {
          axios
            .get(
              `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${
                iterator.id
              }.json`,
            )
            .then((res) => {
              this.setState(prevState => ({
                champs: prevState.champs.concat(res.data.data[iterator.id]),
              }));
            });
        }
      });
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
