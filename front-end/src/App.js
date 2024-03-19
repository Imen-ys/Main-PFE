import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import "./App.css"
import {Nav,Style,Menu,Dashboard,Client,AddClient,EditClient} from "./components/index"

const App = () => {
    return(
        <>
            <Router>
                {/* <Nav/> */}
                <Style>
                    <Menu/>
                    <Routes>
                        <Route path='/'          element={<Dashboard/>}/>
                        <Route path='/Client'    element={<Client/>} />
                        <Route path='/AddClient' element={<AddClient/>} />
                        <Route path='/Update'    element={<EditClient/>}/>
                    </Routes>
                </Style>
            </Router>
        </>
    )
}

export default App