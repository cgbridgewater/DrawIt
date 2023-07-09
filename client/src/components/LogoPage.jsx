
const Logo = () => {
    
    return(    

        <div className="logo-container" >
            {/* <h3 className="image-title">Draw : <span className="image-name">Tesla's Logo</span> </h3> */}
            <div class="wrap">
                <a href="#show" class="modal-open">Click To Show</a>
                <div class="overlay" id="show">
                    <div class="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="true">
                            <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="398" y2="2.0"/>
                            <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="398" y1="398" x2="398" y2="2.0"/>
                            <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="398" x2="398" y2="398"/>
                            <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="398"/>
                        </svg>
                        <div class="modal-inner">
                            <div className="modal-flex">
                                <div></div>
                                <h3 className="image-title">Tesla Logo</h3>
                                <a href="#" class="modal-close" title="Close Modal">X</a>
                            </div>
                            <img className="image-block" src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg" alt="temp!!" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo