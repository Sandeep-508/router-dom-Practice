
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/Layout'
import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Layout' element={<Layout />}></Route>
            </Routes>
        </div>
    );
}

export default App