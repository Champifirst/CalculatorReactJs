import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './App';

class Ind extends React.Component {
  render(){
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Ind />
);

