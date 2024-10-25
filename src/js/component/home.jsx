import React from "react";
import { Digit } from "./digit";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = ({Digit1, Digit2, Digit3, Digit4, Digit5, Digit6}) => {
	return (
	
		
		<div className="d-flex justify-content-center bg-dark text-white">
		<Digit Digit={<i className="far fa-clock"></i>}  />
		<Digit Digit ={Digit6} />
		<Digit Digit ={Digit5} />
		<Digit Digit ={Digit4} />
		<Digit Digit ={Digit3} />
		<Digit Digit ={Digit2} />
		<Digit Digit ={Digit1} />
		

		</div>

	)
};

export default Home;
