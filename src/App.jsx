import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import GamePage from "./pages/Game/Game"
import CreditsPage from "./pages/Credits/Credits"
import Navigation from "./components/Navigation/Navigation"
import Header from "./components/Header/Header"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/game' element={<GamePage />}/>
        <Route path='/credits' element={<CreditsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
