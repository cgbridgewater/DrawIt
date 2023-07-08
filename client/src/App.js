import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import './App.css';
import Indexpage from './components/IndexPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" default element={<Indexpage/>} />
        </Routes>
      
      
      </BrowserRouter>



    </div>
  );
}

export default App;
