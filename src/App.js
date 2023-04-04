import Homepage from "./pages/Homepage"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"
import { Routes, Route } from "react-router-dom"
import MailingPage from "./pages/MailingPage"
import LegalAndPrivacy from "./pages/LegalAndPrivacy"
import DetailsPage from "./pages/DetailsPage"
import About from "./pages/About"

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mail" element={<MailingPage />} />
        <Route path="/legal" element={<LegalAndPrivacy />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <MyFooter />
    </div>
  )
}

export default App
