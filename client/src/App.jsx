import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './components/routes/routes'

import ReactGA from 'react-ga4'
function App() {

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
