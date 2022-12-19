import './App.css'
import {BrowserRouter as Switch, Route, Routes } from 'react-router-dom'
import Main from './Components/Main/Main'
import Sidebar from './Components/sidebar/Sidebar'
Sidebar
function App() {


  return (
    <Switch>
        <div className="App">
            <Routes>
               <Route exact path='/' element={<Main />}></Route>
            </Routes>
          </div>
    </Switch>

  )
}

export default App
