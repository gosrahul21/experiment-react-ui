import logo from './logo.svg';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Cup from './components/Cup';
import Scroll from './components/Scroll'
import Navigation from './components/NavBar.js';
import ScrollIndicator from './components/ScrollIndicator'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          {/* <Route exact path="/" element={<h1> Home Page</h1>}/> */}
          <Route exact path = "/cup" element={<Cup/>}/>
          <Route exact path="/scroll" element={<Scroll/>}/>
          <Route exact path="/scroll-indicator" element={<ScrollIndicator/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
