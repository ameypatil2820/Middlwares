import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CommanRoutes from './routes/CommanRoutes'

function App() {

  return (
    <BrowserRouter>
      <CommanRoutes />
    </BrowserRouter>
  )
}

export default App
