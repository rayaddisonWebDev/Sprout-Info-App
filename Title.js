import React from 'react';

class Title extends React.Component {
  render(){
    return(
      <div className="ui green segment"><p>{this.props.title}</p></div>
    );
  };
}

export default Title;
