import Canvas from "./CanvasPage"
import Title from "./TitlePage";
import '../Style/Canvas.css';
import '../Style/Logo.css';
import '../Style/Title.css';


const MainPage = () => {
    
    return(    
        <div>
            <Title/>
            <div className="flex" >
                <Canvas/>
            </div>
        </div>
    )
}

export default MainPage