// src/components/Login.js

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Importando a configuração do Firebase

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizando login com o e-mail e senha
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Login realizado com sucesso!");
      // Redirecionar para a página principal ou dashboard
    } catch (error) {
      console.error("Erro no login: ", error);
      setError("Usuário não encontrado ou dados incorretos.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="E-mail" 
        />
        <input 
          type="password" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          placeholder="Senha" 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
