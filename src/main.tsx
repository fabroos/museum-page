import { createRoot } from 'react-dom/client'
import App from './app/app'
import { CursorProvider } from './Cursor/CursorProvider'
import './index.css'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(
  <CursorProvider>
    <App />
  </CursorProvider>
)
