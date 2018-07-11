import React from 'react';

const QuizListItems = ({ spell, randChamps }) => (
  <li>
    <img
      src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
        randChamps.image.full
      }`}
      alt={randChamps.name}
    />
    {randChamps.name}
    <div>
      {`Real Spell: ${spell.name}`}
    </div>
  </li>
);
export default QuizListItems;
