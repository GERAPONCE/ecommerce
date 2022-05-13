import logo from './logo.svg';
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer color="#d72323" greeting="Hola Coders"/>
   
    </div>
  );
}

export default App;
