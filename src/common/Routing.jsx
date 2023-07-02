import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from '../game/Instructions'
import AcercaDe from '../game/AcercaDe'
import PaginaPrincipal from '../game/PaginaPrincipal'
import Juego from '../game/Juego'
import AllTime from '../game/PaginaPrincipal'
import Weekly from '../game/PaginaPrincipal'


function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />} />
                <Route path={"/instructions"} element={<Instructions />} />
                <Route path={"/acerca_de"} element={<AcercaDe />} />
                <Route path={"/PaginaPrincipal"} element={<PaginaPrincipal />} />
                <Route path={"/Juego"} element={<Juego />} />
                <Route path={"/AllTime"} element={<AllTime />} />
                <Route path={"/Weekly"} element={<Weekly />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;