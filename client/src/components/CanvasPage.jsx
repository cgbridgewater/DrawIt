const Canvas = () => {

    window.onload = function () {

        // Definitions
        var canvas = document.getElementById("paint-canvas");
        var context = canvas.getContext("2d");
        var boundings = canvas.getBoundingClientRect();
      
        // Specifications
        var mouseX = 0;
        var mouseY = 0;
        context.strokeStyle = 'black'; // initial brush color
        context.lineWidth = 1; // initial brush width
        var isDrawing = false;
      
      
        // Handle Colors
        var colors = document.getElementsByClassName('colors')[0];
      
        colors.addEventListener('click', function(event) {
          context.strokeStyle = event.target.value || 'black';
        });
      
        // Handle Brushes
        var brushes = document.getElementsByClassName('brushes')[0];
      
        brushes.addEventListener('click', function(event) {
          context.lineWidth = event.target.value || 1;
        });
      
        // Mouse Down Event
        canvas.addEventListener('mousedown', function(event) {
          setMouseCoordinates(event);
          isDrawing = true;
      
          // Start Drawing
          context.beginPath();
          context.moveTo(mouseX, mouseY);
        });
      
        // Mouse Move Event
        canvas.addEventListener('mousemove', function(event) {
          setMouseCoordinates(event);
      
          if(isDrawing){
            context.lineTo(mouseX, mouseY);
            context.stroke();
          }
        });
      
        // Mouse Up Event
        canvas.addEventListener('mouseup', function(event) {
          setMouseCoordinates(event);
          isDrawing = false;
        });
      
        // Handle Mouse Coordinates
        function setMouseCoordinates(event) {
          mouseX = event.clientX - boundings.left;
          mouseY = event.clientY - boundings.top;
        }
      
        // Handle Clear Button
        var clearButton = document.getElementById('clear');
      
        clearButton.addEventListener('click', function() {
          context.clearRect(0, 0, canvas.width, canvas.height);
        });
      

      };
      


    // window.onload = function () {

    //     // Definitions
    //     var canvas = document.getElementById("paint-canvas");
    //     var context = canvas.getContext("2d");
    //     var boundings = canvas.getBoundingClientRect();


    //     // Specifications
    //     var mouseX = 0;
    //     var mouseY = 0;
    //     context.strokeStyle = 'black'; // initial brush color
    //     context.lineWidth = 1; // initial brush width
    //     var isDrawing = false;

    //     // Handle Colors
    //     var colors = document.getElementsByClassName('colors')[0];

    //     colors.addEventListener('click', function(event) {
    //         context.strokeStyle = event.target.value || 'black';
    //     });

    //     // Handle Brushes
    //     var brushes = document.getElementsByClassName('brushes')[0];

    //     brushes.addEventListener('click', function(event) {
    //         context.lineWidth = event.target.value || 1;
    //     });

    //     // Mouse Down Event
    //     canvas.addEventListener('mousedown', function(event) {
    //         setMouseCoordinates(event);
    //         isDrawing = true;

    //         // Start Drawing
    //         context.beginPath();
    //         context.moveTo(mouseX, mouseY);
    //     });

    //     // Mouse Move Event
    //     canvas.addEventListener('mousemove', function(event) {
    //         setMouseCoordinates(event);

    //         if(isDrawing){
    //             context.lineTo(mouseX, mouseY);
    //             context.stroke();
    //         }
    //     });

    //     // Mouse Up Event
    //     canvas.addEventListener('mouseup', function(event) {
    //         setMouseCoordinates(event);
    //         isDrawing = false;
    //     });

    //     // Handle Mouse Coordinates
    //     function setMouseCoordinates(event) {
    //         mouseX = event.clientX - boundings.left;
    //         mouseY = event.clientY - boundings.top;
    //     }

    //     // Handle Clear Button
    //     var clearButton = document.getElementById('clear');

    //         clearButton.addEventListener('click', function() {
    //         context.clearRect(0, 0, canvas.width, canvas.height);
    //     });
    // };

    return(    
        <main className="canvas-container">
            <div className="brush-block">
                <div className="colors">
                    <button type="button" value="#0000ff"/>
                    <button type="button" value="#009fff"/>
                    <button type="button" value="#0fffff"/>
                    <button type="button" value="#bfffff"/>
                    <button type="button" value="#000000"/>
                    <button type="button" value="#333333"/>
                    <button type="button" value="#666666"/>
                    <button type="button" value="#999999"/>
                    <button type="button" value="#ffcc66"/>
                    <button type="button" value="#ffcc00"/>
                    <button type="button" value="#ffff00"/>
                    <button type="button" value="#ffff99"/>
                    <button type="button" value="#003300"/>
                    <button type="button" value="#555000"/>
                    <button type="button" value="#00ff00"/>
                    <button type="button" value="#99ff99"/>
                    <button type="button" value="#f00000"/>
                    <button type="button" value="#ff6600"/>
                    <button type="button" value="#ff9933"/>
                    <button type="button" value="#f5deb3"/>
                    <button type="button" value="#330000"/>
                    <button type="button" value="#663300"/>
                    <button type="button" value="#cc6600"/>
                    <button type="button" value="#deb887"/>
                    <button type="button" value="#aa0fff"/>
                    <button type="button" value="#cc66cc"/>
                    <button type="button" value="#ff66ff"/>
                    <button type="button" value="#ff99ff"/>
                    <button type="button" value="#e8c4e8"/>
                    <button type="button" value="#ffffff"/>
                </div>
                <div className="brushes">
                    <button type="button" value="3"/>
                    <button type="button" value="9"/>
                    <button type="button" value="15"/>
                </div>
            </div>
            <div className="canvas-block">
                <canvas id="paint-canvas" width="640" height="400"></canvas>
            </div>
            <div className="buttons">
                    <button id="clear" type="button">Clear</button>
                    <button id="next" type="button">Next ➡️</button>
            </div>
        </main>
    )
}

export default Canvas