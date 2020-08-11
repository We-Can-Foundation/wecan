import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
 	
 	const navigate = useHistory();
    return (
        
        <div className={"loginCont"}>

	        <div className={"resButton"}>
				<button id="back" onClick={() => navigate.goBack()}>Regresar</button>
			</div>

	        <div className={"resCont"}>
				<div className={"resCard"}>
	        		<h1>Bienvenido</h1>
	        		<p>Inicia sesión para sacar el maximo provecho a la plataforma</p><br/>
	        		<h2>LOGIN</h2>
	        		<form action="" method="GET">
		        		<input type="text" name="usuario" placeholder="Usuario" className={"resIn"}/>
		        		<br/><br/>
		        		<input type="password" name="contraseña" placeholder="Contraseña" className={"resIn"}/><br/><br/>
		        		<input type="checkbox" name="recuerda" value="forever"/>Recordar inicio de sesión<br/><br/>
		        		<button type="submit" name="login" value="Iniciar">Iniciar Sesión</button>
		        	</form>
	        	</div>	
	        </div>
	        
	    </div>

    );
}

export default Login;