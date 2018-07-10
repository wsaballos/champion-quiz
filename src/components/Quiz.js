import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Quiz(props) {
  const selectedChamp = props.champs[props.champs.length - 1];
  const randChamps = props.champs;
  const randomSpells = [0, 1, 2, 3].sort(() => 0.5 - Math.random());

  return (
    <div className="container">
      {props.champs.length === 4 ? (
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
            {selectedChamp.spells
              .map((spell, i) => (
                <li key={spell.id}>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
                      randChamps[randomSpells[i]].spells[randomSpells[i]].image.full
                      }`}
                    alt={spell.name}
                  />
                  {randChamps[randomSpells[i]].spells[randomSpells[i]].name}
                </li>
              ))}
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
