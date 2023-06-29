import React, { useState } from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    try {
      const response = await fetch('http://127.0.0.1:8000/api_generate_token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        console.log("Usuario ingresado correctamente");
        const data = await response.json();
        setAuthToken(data.token); // Use the setAuthToken function passed as a prop
        console.log(response);
        // Inicio de sesión exitoso
        // Aquí puedes manejar el inicio de sesión exitoso, por ejemplo, redirigir al usuario a otra página
      } else {
        console.log("Usuario ingresado incorrectamente")
        // Inicio de sesión fallido
        // Aquí puedes manejar el inicio de sesión fallido, por ejemplo, mostrar un mensaje de error al usuario
      }
    } catch (error) {
      // Error al enviar la solicitud
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Bienvenido de nuevo!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          placeholder="Nombre de usuario"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Contraseña"
                        />
                      </div>
                      <input type="submit" value="Iniciar sesión" className="btn btn-primary btn-user btn-block" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;