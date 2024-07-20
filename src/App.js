import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/aboutUs' element={<AboutUs />} />
                <Route path='/contactUs' element={<ContactUs />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;  