import Canvas from './Components/CanvasPage'
import Title from './Components/TitlePage'
import './Style/Canvas.css';
import './Style/Logo.css';
import './Style/Title.css';
import './Style/App.css';

function App() {
  
  return (
    <div className="App">
      <Title/>
      <div className="flex" >
          <Canvas/>
      </div>
    </div>
  );
}

export default App;
