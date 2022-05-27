import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { CounterApp } from "./components/pages/useState/CounterApp";
import { HeaderHome } from './components/layout/HeaderHome/HeaderHome';
import { RickMorty } from './components/pages/RickMorty/RickMorty';

export const App = () => {   

    return (
        <>
            <HeaderHome />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/counter' element={<CounterApp />}/>
                <Route path='/rickapi' element={<RickMorty />}/>

            </Routes>
        </>
    )
        
        
}
