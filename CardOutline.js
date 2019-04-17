import React from 'react';
import Title from './Title';
import NameOfPlant from './NameOfPlant';
import Facts from './Facts';

class CardOutline extends React.Component{
  render(){
    return(
      <div className="ui green compact segments">
        <Title title="Eggplant"/>
        <div className="ui green segments">
        <NameOfPlant name="Solanum melongena"/>
        </div>
        <Facts
          fact1="Eggplants are best started indoors and transplanted outside after the last frost."
          fact2="They grow well in hot temperatures."
          fact3="Should not be grown near any plants that are its close relatives."
          fact4="7-14 days before sprouts emerge."
        />
      </div>

    );
  };
}


export default CardOutline;
