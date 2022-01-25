import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//Embedding expressions
const name = "Christopher";
const element1 = <h1>Hello there, {name}!</h1>

const user = {
  firstName: 'Christopher',
  lastName: 'Gaona'
};

//Creating a function
function formatName(user){
  return user.firstName + ' ' + user.lastName;
};

const element2 = (
  <div>
    <h1>Hello World!</h1>
    <h2>
      You're full name is: {formatName(user)}
    </h2>
  </div>
);

ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,

  //element1,
  element2,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
