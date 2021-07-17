import './App.css';
import {Router, navigate} from '@reach/router';
import Person from './components/Person';
import Planet from './components/Planet';
import Starship from './components/Starship';
import Home from './components/Home';
import Speeder from './components/Speeder';

function App() {
  
  const makeRequest = event =>{
    event.preventDefault();
    navigate(`/${event.target.entity.value}/${event.target.id.value}`);
  }
  
  return (
    <div className="App">
      <form onSubmit={makeRequest}>
        <select name="entity" defaultValue={'default'}>
          <option disabled hidden value="default">Please Select</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="speeder">Speeders</option>
          <option value="starships">Starships</option>
        </select>
        <input type="number" name="id" placeholder="ID"/>
        <button>Search</button>
      </form>
      <Router>
        <Home path="/home"/>
        <Person path="/people/:id"/>
        <Planet path="/planets/:id"/>
        <Speeder path="/speeder/:id"/>
        <Starship path="/starships/:id"/>
      </Router>
    </div>
  );
}

export default App;

