import React, { useState, useContext, FormEvent } from "react";
import CreatePost from "../pages/CreatePost"; // Importa la página que quieres cargar en el mismo lugar
import { UserContext } from "../UserContex";
import '../styles/Login.css'; // Importa tu archivo CSS personalizado

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const response = await fetch('http://localhost:9000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      const userInfo = await response.json();
      setUserInfo(userInfo);
      setLoggedIn(true); // Establece el estado loggedIn como true
    } else {
      alert('Credenciales incorrectas');
    }
  }

  if (loggedIn) {
    return <CreatePost />; // Si está logueado, renderiza la página HomePage en el mismo lugar
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form className="login-form" onSubmit={login}>
            <h1 className="mb-4">Login</h1>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username"
                     value={username} onChange={(ev) => setUsername(ev.target.value)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password"
                     value={password} onChange={(ev) => setPassword(ev.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
