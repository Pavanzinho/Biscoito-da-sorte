import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from './routes'
import GlobalStyles from "./styles/global"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <Route />
  </React.StrictMode>,
)
