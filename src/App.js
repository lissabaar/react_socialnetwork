import './App.css'

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <main className="main-content">
                <Navbar/>
                <div className='page'>
                    <Routes>
                        <Route path='/messages/*' element={<Messages/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>
                </div>
                <Sidebar/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
