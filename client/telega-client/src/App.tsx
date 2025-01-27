import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Layouts/Layout"
import Home from "./components/home/Home"
import Chat from "./components/chat/Chat"
import Auth from "./components/auth/Auth"
import NotFound from "./components/not-found/NotFound"
import Register from "./components/register/Register"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chat/:id" element={<Chat />} />
          </Route>
          <Route path="/a/">
            <Route index element={<Auth />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
