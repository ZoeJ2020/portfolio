import logo from './assets/logo.svg';
import Header from './components/Header.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
    </div>
  );
}

export default App;
