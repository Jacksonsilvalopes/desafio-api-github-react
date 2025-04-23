import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Home"
import HomeBody from "./Home/HomeBody"
import Before from "./Home/Before"

import Perfil from "./Home/Before/Perfil"
import NotFoundPerfil from "./Home/Before/NotFoundPerfil"
import NotFound from "./Home/NotFound"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="before/" element={<Before />} >

            <Route path="perfil" element={<Perfil />} />
            <Route path="notfoundPerfil" element={<NotFoundPerfil />} />
            
          </Route>

        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
