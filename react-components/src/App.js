import logo from './logo.svg';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Cup from './components/Cup';
import Scroll from './components/Scroll'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<h1> Home Page</h1>}/>
          <Route exact path = "/cup" element={<Cup/>}/>
          <Route exact path="/scroll" element={<Scroll/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
