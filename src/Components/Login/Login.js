import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from "../NavBar Header/Logo";
import useWindowSize from "../../useWindowSize";

const Login = () => {

	let imageBox = (
		<div className={"resImgBox"}>
			<img alt={"LogIn"} />
		</div>
	)

	if (useWindowSize().width < 1025){
		imageBox = "";
	}
 	
 	const navigate = useHistory();
    return (
        
        <div className={"loginCont"}>
	        <div className={"topBar"}>
				<Logo/>
				<button className={"resButton"} id="back" onClick={() => navigate.goBack()}>Regresar</button>
			</div>

	        <div className={"resCont"}>
				<div className={"resCard"}>
	        		<h2>Iniciar sesión</h2>
	        		<form action="" method="POST">
		        		<input type="text" name="usuario" placeholder="Correo Electrónico" className={"resIn"}/>
		        		<br/><br/>
		        		<input type="password" name="contraseña" placeholder={"Contraseña"} className={"resIn"}/><br/><br/>
		        		<input className={"roundCBox"} type="checkbox" name="recuerda" value="forever"/><span>Recordar inicio de sesión</span><br/><br/>
		        		<button type="submit" name="login" value="Iniciar">Iniciar Sesión</button>
		        	</form>
	        	</div>
				{imageBox}
	        </div>
	        
	    </div>

    );
}

export default Login;