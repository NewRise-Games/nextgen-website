import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'
import './assets/fonts/akrobat.css'
import './styles.css'
import './components/shared/i18n/i18n'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
)
