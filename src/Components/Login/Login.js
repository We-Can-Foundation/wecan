import React from 'react';

const Login = () => {
    return (
        
        <div className={"loginCont"}>
	        <div className={"resCont"}>
				<div className={"resCard"}>
	        		<h1>Bienvenido</h1>
	        		<p>Inicia sesión para sacar el maximo provecho a la plataforma</p><br/>
	        		<h2>LOGIN</h2>
	        		<form action="" method="GET">
		        		<input type="text" name="usuario" placeholder="Usuario" className={"resIn"}/>
		        		<br/><br/>
		        		<input type="password" name="contraseña" placeholder="Contraseña" className={"resIn"}/><br/><br/>
		        		<input type="checkbox" name="recuerda" value="forever"/>Recordar inicio de sesion<br/><br/>
		        		<button type="submit" name="login" value="Iniciar">Iniciar Sesión</button>
		        	</form>
	        	</div>	        
	        </div>

	        <div className={"imgCont"}>
	            <div className={"imgCard"}>
	            	<img alt={"We Can Logo"} src={require('../../Assets/activitiesWeCan.png')}/>
	        	</div>
	        </div>
	    </div>
	    
    );
}

export default Login;