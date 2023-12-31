import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import KeyboardListener from "./providers/KeyboardListener";
import { EventListener } from './providers/EventListener.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <EventListener>
            <KeyboardListener>
                <App />
            </KeyboardListener>
        </EventListener>
    </React.StrictMode>
)
