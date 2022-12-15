import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// const AuthDomain = process.env.AUTH0_DOMAIN;
// const AuthClientId = process.env.AUTH0_CLIENT_ID;
const AuthDomain = 'dev-who7eo0c0rbm8np4.us.auth0.com';
const AuthClientId = 'Ox7TCJfXQ4fkr1gvwZqSpicRC70dRysJ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AuthDomain}
      clientId={AuthClientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
