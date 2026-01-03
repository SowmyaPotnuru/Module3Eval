import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = () => {
    const role = login(email,password);
    if(!role) return alert("Invalid credentials");
    navigate(role === "admin" ? "/admin/dashboard" : "/customers/dashboard");
  };

  return(
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;