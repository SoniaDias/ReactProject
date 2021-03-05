import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App04';



//ReactDOM.render is used to produce content on the view
//ReactDOM.render(what we want to create, were we want to put it);
ReactDOM.render(
  //createElement(element, properties, values)
 //1 //React.createElement("h1", {style:{color: "blue"}}, "Hey everyone!"),
 
 /*2
 React.createElement("ul", null, 
  React.createElement("li", null, "Monday"), 
  React.createElement("li", null, "Monday"),
  React.createElement("li", null, "Monday")),
  */

  //testing the Babel compiler, writing jsx
 /*
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
  </ul>,
  */
  <App/>
  ,
  document.getElementById('root')
);


