import { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { ConductoresPage } from './pages/Conductores'
import { ConductoresForm as ConductoresFormPage } from './pages/ConductorForm'
import Login from './pages/Login'

function App() {
  const [authToken, setAuthToken] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login/"
          element={<Login setAuthToken={setAuthToken} />}
        />
        {authToken ? (
          <>
            <Route path="conductores-create/" element={<ConductoresFormPage />}/>
            <Route path="/conductores" element={<ConductoresPage />} />
          </>
        ) : null }
      </Routes>
    </BrowserRouter>
  )
}

export default App;
