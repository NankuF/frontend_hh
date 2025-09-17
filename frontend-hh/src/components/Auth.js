import React from 'react';
import '../styles/Auth.css';

function Auth() {
  return (
    <div className="auth-container">
      <h1>Авторизация через HeadHunter</h1>
      <p>Нажмите кнопку ниже, чтобы войти с помощью HH.ru</p>
      <a
        href="http://localhost:8001/api/v1/auth/"
        className="auth-button"
      >
        Войти через HH
      </a>
    </div>
  );
}

export default Auth;