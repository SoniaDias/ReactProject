import { useEffect, useReducer, useState } from 'react';
import './App.css';
import restaurant from "./restaurant.jpg";

function SecretComponent(){
  return(
    <h1>Super Secret, only by authorization</h1>
  );
}

function RegularComponent(){
  return(
    <h1>Everyone can see this</h1>
  );
}
/*
function App(props) {
  /*
  if (props.authorized){
    return <SecretComponent />;
  }else{
    return <RegularComponent />;
  };
  console.log(props);
  return(
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
}
*/

//() => {};

//change data from a button
/*
function App(props){
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("what the f");
  //show allways on log
  //useEffect(() => {console.log(`Is ${emotion} here!`)});
  //useEffect(() => {console.log(`Is ${secondary} here!`)});
  //show only if the emotion has changed
  useEffect(() => {console.log(`Is ${emotion} here!`)}, [emotion]);
  useEffect(() => {console.log(`Is ${secondary} here!`)}, [secondary]);
  return(
    <>
      <h1>Corrent emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}> happiit</button>
      <button onClick={() => setEmotion("frustrated")}> frustrate</button>
      <button onClick={() => setSecondary("what the f")}> ffff</button>
    </>
  );
}
*/
//checkbox
//change output based on behaviour
/*
function App(){
  const [checked, toggle] = useReducer(
      (checked) => !checked,
      false
    );

  return(
    <>
      <input type="checkbox" 
        value={checked} 
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}
*/

//githubAPI
//https://api.github.com/users/SoniaDias
function App({login}){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login){return;}
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    //fetch(`https://api.github.com/users/SoniaDias`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, [login]);

  if(loading) return <h1>Loading...</h1>
  if(error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(!data) return null;
  //if(data){
    //return <div>{JSON.stringify(data)}</div>;
  return (
    <div>
      <h1>{data.name}</h1>
      <img src = {data.avatar_url} />
    </div>
  );
  //}
  
  
  return <div>No user available</div>
  
}




export default App;
