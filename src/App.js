import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { CounterApp } from "./components/pages/useState/CounterApp";
import { HeaderHome } from './components/layout/HeaderHome/HeaderHome';
import { RickMorty } from './components/pages/RickMorty/RickMorty';
import { Mailer } from './components/pages/Mailer/Mailer';
import { Tenor } from './components/pages/Tenor/Tenor';

export const App = () => {   

    return (
        <>
            <HeaderHome />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/counter' element={<CounterApp />}/>
                <Route path='/rickapi' element={<RickMorty />}/>
                <Route path='/contact' element={<Mailer />}/>
                <Route path='/tenor' element={<Tenor />}/>

            </Routes>
        </>
    )
        
        
}
