import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Layouts/layout/Layout"
import Home from "./components/home/Home"
import Chat from "./components/chat/ChatLazy"
import Auth from "./components/auth/Auth"
import NotFound from "./components/not-found/NotFound"
import Register from "./components/register/Register"
import AuthLayout from "./Layouts/account-layout/AccountLayout"
import { useTheme } from "./contexts/Theme/Theme.context"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {
  const { theme } = useTheme()

  return (
    <Provider store={store}>
      <div className="app" style={{ ...(theme as React.CSSProperties) }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="chat/:id" element={<Chat />} />
            </Route>
            <Route path="/a/" element={<AuthLayout />}>
              <Route index element={<Auth />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
