import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './Style/App.css';
import Indexpage from './Components/IndexPage';

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
