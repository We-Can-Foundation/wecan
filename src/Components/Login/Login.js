import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Logo from "../NavBar Header/Logo";
import useWindowSize from "../../useWindowSize";

const Login = () => {

	let imageBox = (
		<div className={"resImgBox"}>
			<img alt={"LogIn"} src={require('../../Assets/logIn_img.png')}/>
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
					<p>ó inicia con tus cuentas personales</p>
					<div className={"logInIconsCont"}>
						<img alt={"google"} src={require('../../Assets/google_icon.png')}/>
						<img alt={"google"} src={require('../../Assets/facebook_icon.png')}/>
						<img alt={"google"} src={require('../../Assets/apple_icon.png')}/>
					</div>
					<div className={"logMsgCont"}>
						<p>¿Aún no tienes cuenta we can?</p>
						<Link className={"noDec"} to={"/register"}>
							<p id={"logRegChange"}>Regístrate</p>
						</Link>
					</div>
	        	</div>
				{imageBox}
	        </div>
	        
	    </div>

    );
}

export default Login;