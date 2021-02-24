import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nayoks,setNayoks] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data));
  },[])
  // const nayoks = [{name:'Jashim', age : 56},{name:'Shakib',age:50}, {name:'Shuvo',age:65}, {name:'Bapparaz',age:55},{name:'Omar Sani',age:57},{name:'Alamgir',age:87}]
  return (
    
    <div className="App">
      <MovieCounter></MovieCounter>
      {/* <Nayok name = {nayoks[0]}></Nayok>
      <Nayok name ={nayoks[1]}></Nayok>
      <Nayok name = {nayoks[2]}></Nayok>
      <Nayok name ={nayoks[3]}></Nayok> */}
      { 
        nayoks.map(nk => <Nayok name={nk.name} key ={nk.id} age={nk.email}></Nayok>)
      }
      
    </div>
  );
}

function MovieCounter() {
  const [count,setCount] = useState(0);
  
  const handelClick = () => setCount(count+1);
  return(
    <div>
      <button onClick={handelClick}>Add Movie</button>
      <h3>Number of Movies :{count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return(
    <div>
      <h4>Movies I have acted: {props.movies}</h4>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle={
    border:'2px solid purple',
    margin:'20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Nayok :{props.name}</h1>

      <h3>I have done 5 movies in :{props.age} years</h3>
    </div>
  )
}

export default App;
