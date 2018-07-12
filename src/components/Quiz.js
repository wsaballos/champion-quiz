import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import QuizListItems from './quiz_list_items';

function Quiz({ champs, generateRandomChamps }) {
  const selectedChamp = champs[champs.length - 1];
  const randomPosition = [0, 1, 2, 3].sort(() => 0.5 - Math.random());
  const randomSpells = [3, 2, 1, 0].sort(() => 0.5 - Math.random());
  let listItems = [];
  if (champs.length === 4) {
    listItems = selectedChamp.spells.map((spell, i) => (
      <QuizListItems
        key={champs[randomPosition[i]].key}
        spell={spell}
        randChamps={champs[randomPosition[i]].spells[randomSpells[i]]}
        checkSpell={champs[randomPosition[i]].spells[i].name.includes(spell.name)}
        generateRandomChamps={generateRandomChamps}
      />
    ));
  }
  return (
    <div className="container">
      {champs.length === 4 ? (
        <div>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${
              selectedChamp.image.full
            }`}
            alt={selectedChamp.name}
          />
          <p>
            {selectedChamp.name}
          </p>
          <ul>
            {listItems}
          </ul>
        </div>
      ) : (
        <div>
            <FontAwesomeIcon icon={faSpinner} size="6x" spin />
          </div>
      )}
    </div>
  );
}
export default Quiz;
