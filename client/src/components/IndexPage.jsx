import Canvas from "./CanvasPage"
// import Logo from "./LogoPage";
import '../Style/Canvas.css';
import '../Style/Logo.css';


const Indexpage = () => {
    
    return(    

        <div>
            <h1 className="banner">Can You <em>Remember?</em></h1>
            <h1 className="banner-sm">Draw the logo from memory!!</h1>
            <div className="flex" >
                <Canvas/>
                {/* <Logo/> */}
            </div>
        </div>



    )
}

export default Indexpage