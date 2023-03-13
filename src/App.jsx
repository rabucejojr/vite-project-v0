import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login, MenuBar } from "./pages"
// THIS IS WHERE PAGES ARE CALLED FOR TESTING

function App() {
  return (
    <>
      <Login/>
      {/* <MenuBar /> */}
    </>
  )
}

export default App
