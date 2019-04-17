import React from 'react';

class NameOfPlant extends React.Component {
  render(){
    return(
      <div className="ui green segment"><p>{this.props.name}</p></div>
    );
  };
}

export default NameOfPlant;
