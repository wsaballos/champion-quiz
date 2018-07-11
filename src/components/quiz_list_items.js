import React from 'react';

const QuizListItems = ({ spell, randChamps, checkSpell }) => (
  <li onClick={() => alert(checkSpell)}>
    <img
      className="d-none"
      src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
        randChamps.image.full
      }`}
      alt={randChamps.name}
    />
    <span>
      {randChamps.name}
    </span>
  </li>
);
export default QuizListItems;
