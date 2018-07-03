import React from "react";
function Quiz(props) {
  return (
    <div className="container">
      <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${props.randomChamp}.png`} />
    </div>
  );
}
export default Quiz;
