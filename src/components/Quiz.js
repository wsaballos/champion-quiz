import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import QuizListItems from './quiz_list_items';
import Score from './score';

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
      <Score />
      {champs.length === 4 ? (
        <div className="row">
          <span className="col-12 col-sm-3">
            <figure style={{ width: 120 }}>
              <img
                className="figure-img img-fluid rounded"
                src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${selectedChamp.image.full}`}
                alt={selectedChamp.name}
              />
              <figcaption className="figure-caption text-right">
                {selectedChamp.name}
              </figcaption>
            </figure>
          </span>
          <span className="col-12 col-sm-9">
            <ul className="list-group">
              {listItems}
            </ul>
          </span>
        </div>
      ) : (
        <div className="row">
          <div className="col-12" style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faSpinner} size="10x" spin />
          </div>
        </div>
      )}
    </div>
  );
}
export default Quiz;
