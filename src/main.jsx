import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import "./styles.css"
import CurrencyProvider from "./currencyContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CurrencyProvider>
            <App/>
        </CurrencyProvider>
    </React.StrictMode>,
)
