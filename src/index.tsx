import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './fonts'
import { ApiService } from './sdk/ApiObject'
import { AuthStatus } from './hooks/auth-status'
import { QueryClient, QueryClientProvider } from 'react-query'

ApiService.configure()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthStatus>
        <App />
      </AuthStatus>
    </QueryClientProvider>
  </React.StrictMode>
)
