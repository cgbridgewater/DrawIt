import Canvas from "./CanvasPage"
// import Logo from "./LogoPage";
import '../Style/Canvas.css';
import '../Style/Logo.css';
import '../Style/Title.css';
import Title from "./TitlePage";


const Indexpage = () => {
    
    return(    
        <div>
            <Title/>
            <div className="flex" >
                <Canvas/>
            </div>
        </div>
    )
}

export default Indexpage