import React from 'react';

class Facts extends React.Component {
  render(){
    return(
      <div className="ui green segments">
        <div className="ui green segment"><p>{this.props.fact1}</p></div>
        <div className="ui green segment"><p>{this.props.fact2}</p></div>
        <div className="ui green segment"><p>{this.props.fact3}</p></div>
        <div className="ui green segment"><p>{this.props.fact4}</p></div>
      </div>
    );
  };
}

export default Facts;
