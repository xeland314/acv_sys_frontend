import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { ConductoresPage } from './pages/Conductores'
import { ConductoresForm as ConductoresFormPage } from './pages/ConductorForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="conductores/" element={<ConductoresPage/>}/>
        <Route path="conductores-create/" element={<ConductoresFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
