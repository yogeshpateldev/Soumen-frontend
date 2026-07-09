// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={App()} />
)
