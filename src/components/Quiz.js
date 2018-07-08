import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Quiz(props) {
  const selectedChamp = props.champs[props.champs.length - 1];
  return (
    <div className="container">
      {props.champs.length === 5 ? (
        <div>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${
              selectedChamp.image.full
            }`}
            alt={selectedChamp.name}
          />
          <ul>
            {selectedChamp.spells.map(spell => (
              <li key={spell.id}>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
                    spell.image.full
                  }`}
                  alt={spell.name}
                />
                {spell.name}
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
