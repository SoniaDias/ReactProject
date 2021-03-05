import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props){
  return (
    <header><h1>{props.name} OlaOle</h1></header>
  );
}

function Main(props){
  return(
    <section><p>Ola{props.adjective}oli</p>
    <img src={restaurant} height={200} alt="napkin and silverware at a restaurant table"></img>
    <ul style={{textAlign: "left"}}>
      {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
      ))}
    </ul>
    </section>
  );
}

function Footer(props){
  return(
    <footer><p>Olaolo {props.year}</p></footer>
  );
}

const dishes = [
  "pasta",
  "pizza"
];
const dishObjects = dishes.map((dish, i) => ({id:i, tittle: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear() } />
      
    </div>
  );
}




export default App;
