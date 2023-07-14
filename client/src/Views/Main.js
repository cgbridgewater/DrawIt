import Canvas from '../Components/CanvasPage';
import Title from '../Components/TitlePage'
import '../Style/Canvas.css';
import '../Style/Logo.css';
import '../Style/Title.css';

const Main = () => {

    
    return(
        <div>
            <Title/>
            <div className="flex" >
                <Canvas/>
            </div>
        </div>
    )
}

export default Main;