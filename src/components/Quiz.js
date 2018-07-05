import React from "react";
function Quiz(props) {
  const selectedChamp = props.randomChamps[props.randomChamps.length - 1]
  return (
    <div className="container">
      {selectedChamp ? ( 
        <div>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${selectedChamp.image.full}`}
            alt={selectedChamp.name}/>
          <p>{selectedChamp.skills}</p>
        </div>
      ) : (
        <div>
          <img src={'http://via.placeholder.com/350x150'} alt='placeholder'/>
          <p>lorem</p>
        </div>
      )}
    </div>
  );
}
export default Quiz;
