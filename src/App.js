import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import RowPost from "./components/RowPost/RowPost"
import {action,comedyMovies,horror,orginals} from './urls'

function App() {
  return (
    <div className="App">
      < Navbar />
      < Banner />
      <RowPost url = {orginals} title='Netflix Originals'/> 
       <RowPost  url = {action} title='Action' isSmall/> 
       <RowPost  url = {comedyMovies} title='Comedy' isSmall/> 
       <RowPost  url = {horror} title='Horror' isSmall/> 
    </div>
  );
}

export default App;
