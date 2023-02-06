import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Personas from './Components/Personas';
import Principal from './Components/Principal';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Principal />} />
          <Route path="/:id" exact element={<Personas/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
