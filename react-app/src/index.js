import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App04';

//array
//const checklist = ["this", "is", "cool"];
//console.log(checklist[1]);
//objects are mero easy because use key, value pair
//array destructuring
//const[, second]= ["this", "is", "cool"];
//console.log(second);

/* authorized part
ReactDOM.render(
  <App authorized={true}/>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <App login = "SoniaDias"/>,
  document.getElementById('root')
);


