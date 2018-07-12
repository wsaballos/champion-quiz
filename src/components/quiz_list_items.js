import React, { Component } from 'react';

class QuizListItems extends Component {
  constructor(props) {
    super(props);
    this.state = { active: '' };
    this.gameState = this.gameState.bind(this);
  }

  gameState() {
    const { checkSpell, generateRandomChamps } = this.props;
    this.setState({ active: checkSpell ? 'list-group-item-success' : 'list-group-item-danger' });
    setTimeout(() => {
      generateRandomChamps();
    }, 300);
  }

  render() {
    const { checkSpell, gameState, randChamps } = this.props;
    const { active } = this.state;
    return (
      <li className={`list-group-item ${active}`} style={{ listStyle: 'none' }}>
        <div
          onClick={() => this.gameState()}
          onKeyDown={(e) => { if (e.keyCode === 13) { gameState(); } }}
          role="presentation"
          tabIndex="-1"
        >
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
              randChamps.image.full
            }`}
            alt={randChamps.name}
          />
          <span style={{ margin: 5 }}>
            {randChamps.name}
          </span>
        </div>
      </li>
    );
  }
}
export default QuizListItems;
