import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
