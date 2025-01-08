import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"
import UserProvider from "./contexts/userActivity"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <ToastContainer />
        <RoutesApp />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
