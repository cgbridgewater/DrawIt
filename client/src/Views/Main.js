import Canvas from "../components/CanvasPage";
import Title from "../components/TitlePage";
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