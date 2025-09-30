// src/components/Cadastro.js

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Importando configuração do Firebase
import { doc, setDoc } from "firebase/firestore";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Criação de usuário com E-mail e Senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salvando dados adicionais no Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        sobrenome,
        dataNascimento
      });

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário: ", error);
      alert("Erro no cadastro!");
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
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
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Nome" 
        />
        <input 
          type="text" 
          value={sobrenome} 
          onChange={(e) => setSobrenome(e.target.value)} 
          placeholder="Sobrenome" 
        />
        <input 
          type="date" 
          value={dataNascimento} 
          onChange={(e) => setDataNascimento(e.target.value)} 
          placeholder="Data de Nascimento" 
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
