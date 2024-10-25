//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
let counter = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;

setInterval(()=>{

    ReactDOM.createRoot(document.getElementById('app')).render(<Home Digit1={counter} Digit2={num1} Digit3={num2} Digit4={num3} Digit5={num4} Digit6={num5} />);
    counter++;
    if (counter > 9) {
        num1++;
        counter =0;
    }
    if (num1 > 9) {
        num2++;
        num1 =0;
    }
    if (num2 > 9) {
        num3++;
        num2 =0;
    }
    if (num3 > 9) {
        num4++;
        num3 =0;
    }
    if (num4 > 9) {
        num5++;
        num4 =0;
    }
    if (num5 > 9) {
        num6++;
        num5 =0;
    }
},1000)


