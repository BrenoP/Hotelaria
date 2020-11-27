import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { LoginContainer, FormContainer } from './styles';

import api from '~/services/api';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('Script');
  }, []);

  function handleLogin() {
    let formData = new FormData();
    formData.append('mail', email);
    formData.append('password', password);

    api
      .post('/funcionario/validateFunc.php', formData)
      .then(res => {
        dispatch({ type: 'SET_USER', user: JSON.parse(res.data.slice(176)) });
        toast.success('Logado com sucesso');
        history.push('/inicio');
      })
      .catch(err => {
        toast.error('Ocorreu algum erro, tente novamente!');
      });
  }

  return (
    <LoginContainer>
      <FormContainer>
        <h3>Login</h3>
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          style={{ marginBottom: '1.5rem' }}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={() => handleLogin()}>Entrar</button>
      </FormContainer>
    </LoginContainer>
  );
}
