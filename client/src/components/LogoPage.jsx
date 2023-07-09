
const Logo = () => {
    
    return(    

        <div className="logo-container" >

   
        <h3 className="image-title">Draw : <span className="image-name">Tesla's Logo</span> </h3>
            {/* <img className="image-block" src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg" alt="temp!!" /> */}
            <div class="wrap">
<a href="#show" class="modal-open">Click To Show</a>

<div class="overlay" id="show">
<div class="modal">
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="true">
								
  <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="558" y2="2.0"/>
  
  <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="558" y1="278" x2="558" y2="2.0"/>
  
  <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="278" x2="558" y2="278"/>
  
  <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="278"/>
 
</svg>
   <div class="modal-inner">
     <a href="#" class="modal-close" title="Close Modal">X</a>
     <h3>Modal Title</h3>
   </div>
  </div>
  
</div>
  
</div>
        </div>



    )
}

export default Logo