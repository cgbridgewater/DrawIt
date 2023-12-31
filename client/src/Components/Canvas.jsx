import { useState } from "react";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import {useRef} from 'react';

const Canvas = () => {

    const [logoName, setLogoName] = useState("Apple")
    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const LOGO = require(`../Assets/Images/${logoName}.png`);
    const [brushColor , setBrushColor] = useState("")
    const [brushRadius , setBrushRadius] = useState(3)
    const canvas = useRef();

    // const changeColor = (e) => {
    //     e.preventDefault();
    //     setBrushColor(value)
    // }

    window.onload = function () {
        counter(0)
        // Handle Brushes
        var brushes = document.getElementsByClassName('brushes')[0];
        brushes.addEventListener('click', function(event) {
            var brush = event.target.value || '3';
            setBrushRadius(brush)
        });
        // // Handle Colors
        var colors = document.getElementsByClassName('colors')[0];
        colors.addEventListener('click', function(event) {
            var color = event.target.value || 'black';
            setBrushColor(color)
        });
    };



    // Count and Image Switch Case Loop
    function counter(count){
        console.log(count)
        let name=''
        count++
        if(count > 19){
            count=0;
            name = "Apple"
            setCount(count)
            setLogoName(name)
            return name
        }
            switch(count) {
            case 1 :
                name = "Tesla"
                break;
            case 2 :
                name = "Amazon"
                break;
            case 3 :
                name = "McDonalds"
                break;
            case 4 :
                name = "Baskin-Robbins"
                break;
            case 5 :
                name = "Volkswagen"
                break;
            case 6 :
                name = "Mercedes-Benz"
                break;
            case 7 :
                name = "Visa"
                break;
            case 8 :
                name = "PayPal"
                break;
            case 9 :
                name = "Nike"
                break;
            case 10 :
                name = "Target"
                break;
            case 11 :
                name = "Adidas"
                break;
            case 12 :
                name = "Vans"
                break;
            case 13 :
                name = "Beats"
                break;
            case 14 :
                name = "BMW"
                break;
            case 15 :
                name = "FedEx"
                break;
            case 16 :
                name = "Audi"
                break;
            case 17 :
                name = "Google"
                break;
            case 18 :
                name = "Dell"
                break;
            case 19 :
                name = "Nasa"
                break;
            default:
                name = "Apple"
        }
        setCount(count)
        setLogoName(name)
        return name
    }

    return(    
        <main className="canvas-container">
            {/* top bar div */}
            <div className="buttons">
                <button onClick={() => canvas.current.clear()} disabled={isDisabled} id="clear" type="button">CLEAR</button>
                <h3 className="image-title">Draw This Logo <br /> <span className="image-name">{logoName}</span></h3>
                <a id="next" onClick={(e) =>{counter(count); setIsDisabled(false); canvas.current.clear()}} href="#next" className="modal-close" title="Close Modal">NEXT ➡️</a>
            </div>
            {/* canvas div */}
            <div className="canvas-block">
                {/* canavas */}
                <CanvasDraw
                    ref={canvas}
                    style={{
                        border:"5px solid #315659"
                    }}
                    brushColor={brushColor} 
                    brushRadius={brushRadius}
                    hideGrid= {true}
                    canvasHeight={354}
                    canvasWidth={354}
                />
            </div>
            {/* bottom div */}
            <div className="brush-block">
                <div className="brushSpecs  desktop-only">
                    {/* brush color */}
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
                    {/* brush */}
                    <div className="brushes">
                        <button type="button" value={3}/>
                        <button type="button" value={6}/>
                        <button type="button" value={9}/>
                    </div>
                </div>
                <div className="brushSpecs  mobile-only">
                    <select disabled={isDisabled} onChange={(e) =>setBrushColor(e.target.value)} className="brushes dropdown" >
                        <option style={{backgroundColor:"black",color:"white"}} value="black">Black</option>
                        <option style={{backgroundColor:"red",color:"white"}} value="red">Red</option>
                        <option style={{backgroundColor:"blue",color:"white"}} value="blue">Blue</option>
                        <option style={{backgroundColor:"green",color:"white"}} value="green">Green</option>
                        <option style={{backgroundColor:"yellow",color:"black"}} value="yellow">Yellow</option>
                        <option style={{backgroundColor:"silver",color:"black"}} value="silver">Silver</option>
                    </select>
                    <select disabled={isDisabled} onChange={(e) =>setBrushRadius(e.target.value)} className="brushes dropdown" >
                        <option value={3}>3px</option>
                        <option value={6}>6px</option>
                        <option value={9}>9px</option>
                    </select>
                </div>
                {/* logo reveal button and image */}
                <div className="logo-container" >
                    <div className="wrap">
                        <a disabled={isDisabled} onClick={() =>setIsDisabled(true)} href="#show" className="modal-open">CLICK TO REVEAL</a>

                        <div className="overlay" id="show">
                            <div className="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400">
                                    <line id="svg_3" fill="none" stroke="#000000" strokeWidth="2" x1="2.0" y1="2.0" x2="400" y2="2.0"/>
                                    <line id="svg_2" fill="none" stroke="#000000" strokeWidth="2" x1="400" y1="400" x2="2.0" y2="400"/>
                                    <line id="svg_4" fill="none" stroke="#000000" strokeWidth="2" x1="400" y1="400" x2="400" y2="2.0"/>
                                    <line id="svg_5" fill="none" stroke="#000000" strokeWidth="2" x1="2.0" y1="2.0" x2="2.0" y2="400"/>
                                </svg>
                                {/* pop up modal solution image */}
                                <div className="modal-inner">
                                    <div className="modal-flex">
                                        <h3 className="image-title">{logoName}</h3>
                                    </div>
                                    <img className="image-block" src={LOGO} alt={logoName} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Canvas