import Homepage from "./pages/Homepage"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"
import { Routes, Route } from "react-router-dom"
import MailingPage from "./pages/MailingPage"
import LegalAndPrivacy from "./pages/LegalAndPrivacy"
import DetailsPage from "./pages/DetailsPage"
import About from "./pages/About"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"
import { AuthRoute } from "./components/AuthRoute"
import Weather from "./pages/Weather"
import NewsPage from "./pages/NewsPage"

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Homepage />
            </AuthRoute>
          }
        />
        <Route
          path="/mail"
          element={
            <AuthRoute>
              <MailingPage />
            </AuthRoute>
          }
        />
        <Route
          path="/legal"
          element={
            <AuthRoute>
              <LegalAndPrivacy />
            </AuthRoute>
          }
        />
        <Route
          path="/details"
          element={
            <AuthRoute>
              <DetailsPage />
            </AuthRoute>
          }
        />
        <Route
          path="/about"
          element={
            <AuthRoute>
              <About />
            </AuthRoute>
          }
        />
        <Route
          path="/weather"
          element={
            <AuthRoute>
              <Weather />
            </AuthRoute>
          }
        />
        <Route
          path="/news-page"
          element={
            <AuthRoute>
              <NewsPage />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <MyFooter />
    </div>
  )
}

export default App
