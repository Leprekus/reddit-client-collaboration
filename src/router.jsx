import { useState } from 'react'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><h1>Hello World</h1></>
  }
])

export default router
