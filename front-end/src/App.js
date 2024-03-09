import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import "./App.css"
import Nav from './components/nav/Nav'
import Menu from './components/Menu/Menu'
import Dashboard from './components/Dashboard/Dashboard'
import Client from './components/Client/Client'
const App = () => {
    return(
        <>
            <Router>
                <Nav/>
                {/* <Main/> */}
                <div style={{display:'flex'}}>
                    <Menu/>
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/Client' element={<Client/>} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App