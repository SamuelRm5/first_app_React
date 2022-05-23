import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { CounterApp } from "./components/pages/useState/CounterApp";
import { HeaderHome } from './components/layout/HeaderHome/HeaderHome';
import { AboutUs } from './components/pages/AboutUs/AboutUs';
import { ContactUs } from './components/pages/ContactUs/ContactUs';
import { ImageColor } from './components/pages/useEfect/ImageColor'

export const App = () => {   

    return (
        <>
            <HeaderHome />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/aboutUs' element={<AboutUs />}/>
                <Route path='/contactUs' element={<ContactUs />}/>
                <Route path='/counter' element={<CounterApp />}/>
                <Route path='/useEffect' element={<ImageColor />}/>
            </Routes>
        </>
    )
        
        
}
