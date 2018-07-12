import React from 'react';

const QuizListItems = ({ randChamps, generateRandomChamps, checkSpell }) => {
  const gameState = () => {
    alert(checkSpell);
    generateRandomChamps();
  };
  return (
    <li style={{ listStyle: 'none' }}>
      <div onClick={() => gameState()} onKeyDown={(e) => { if (e.keyCode === 13) { gameState(); } }} role="presentation" tabIndex="-1">
        <img
          className="d-none"
          src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
            randChamps.image.full
          }`}
          alt={randChamps.name}
        />
        <span>
          <button className="btn btn-primary" style={{ margin: 5 }} type="button">
            {randChamps.name}
          </button>
        </span>
      </div>
    </li>
  );
};
export default QuizListItems;
