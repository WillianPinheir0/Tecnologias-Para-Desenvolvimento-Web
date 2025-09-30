import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = () => {
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <button onClick={handleLogin}>Acessar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
