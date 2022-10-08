import './App.css';
import Memes from './Components/Memes';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GeneratedMeme from './Components/GeneratedMeme';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route exact path='/' element={<Memes/>} />
        <Route exact path='/GeneratedMeme' element={<GeneratedMeme/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
