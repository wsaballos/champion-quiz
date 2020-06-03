import React, { Component } from 'react';

class QuizListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      visibility: 'd-none',
    };
    this.gameState = this.gameState.bind(this);
  }

  gameState() {
    const { checkSpell, generateRandomChamps } = this.props;
    this.setState({
      result: checkSpell ? 'list-group-item-success' : 'list-group-item-danger',
      visibility: '',
    });
    setTimeout(() => {
      generateRandomChamps();
    }, 800);
  }

  render() {
    const { gameState, randChamps } = this.props;
    const { result, visibility } = this.state;
    return (
      <li
        className={`list-group-item list-hover ${result}`}
        style={{ listStyle: 'none', height: 80 }}
      >
        <div
          onClick={() => this.gameState()}
          onKeyDown={(e) => { if (e.keyCode === 13) { gameState(); } }}
          role="presentation"
          tabIndex="-1"
        >
          <img
            className={visibility}
            src={`https://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
              randChamps.image.full
            }`}
            alt={randChamps.name}
          />
          <span style={{ margin: 0 }}>
            {randChamps.name}
          </span>
        </div>
      </li>
    );
  }
}
export default QuizListItems;
