import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import AppProvider from './context/AppProvider'
import { AuthProvider } from './context/AuthContext'
import { FeedProvider } from './context/FeedContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <FeedProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </FeedProvider>
   </AuthProvider>
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <h1>Hello World</h1>
// )
