// src/components/Principal.js

import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Importando o Firestore
import { doc, getDoc } from "firebase/firestore";

const Principal = ({ userUid }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "usuarios", userUid); // Pega os dados do Firestore usando o UID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUsuario(docSnap.data());
      } else {
        console.log("Nenhum documento encontrado!");
      }
    };

    if (userUid) {
      fetchUserData(); // Chama a função para pegar os dados
    }
  }, [userUid]);

  if (!usuario) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Página Principal</h2>
      <p>Nome: {usuario.nome}</p>
      <p>Sobrenome: {usuario.sobrenome}</p>
      <p>Data de Nascimento: {usuario.dataNascimento}</p>
    </div>
  );
};

export default Principal;
