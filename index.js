import React from 'react';
import ReactDOM from 'react-dom';
import CardOutline from './Components/CardOutline';

class App extends React.Component {
  render(){
    return(
        <CardOutline />
    );
  };
}

ReactDOM.render(<App />, document.querySelector('#root'));
