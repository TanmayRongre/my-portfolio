import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import Loader from './components/common/Loader.jsx'
import NavContext from './context/NavContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavContext>
        <Loader />
        <Stairs>
          <App />
        </Stairs>
      </NavContext>
    </BrowserRouter>
  </React.StrictMode>,
)
