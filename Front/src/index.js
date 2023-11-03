import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' //utilisé pour fournir l'état géré par Redux à tous les composants de l'application
import store from './redux/store' //importation du magasin Redux
import App from './App'

import '../src/style/main.css'
import 'font-awesome/css/font-awesome.min.css'

const root = ReactDOM.createRoot(document.getElementById('root')); //racine de rendu permettant un rendu asynchrone
root.render(
  // Provider enveloppe l'application et fournit le magasin Redux
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);