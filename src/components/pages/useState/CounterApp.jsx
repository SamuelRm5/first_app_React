import { useState, useEffect } from 'react';

import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { ImageColor } from '../ImageUseState/ImageColor';
import "./counterStyles.css";

export const CounterApp = () => {

    const [counter, setCounter] = useState(0)
    const [tam, setTam] = useState(1)

    useEffect( () => {
        const img = document.getElementById('imageEffect');
        if (counter >= 100) {
            img.classList.add('darkImage')
        }
        else{
            img.classList.remove('darkImage')
        }

    }, [counter])

    const handleSelect = ( {target} ) => {

        setTam( parseInt(target.value) )

    }

    return (
        <>
            <div className='contenedor'>
                <div className='counter_app'>
                    <h1>Counter<span className='spanCounter'>{counter}</span> </h1>
                    <p>Incremento 
                        <select onChange={handleSelect}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                    </p>
                    <h2>Count 100 and look!</h2>  
                    
                    <hr />
                    <ButtonUI 
                        styles="buttonAlice"
                        event={() => setCounter(counter + tam)}
                        text={`+ ${tam}`}
                    />
                    <ButtonUI 
                        styles="buttonGreen"
                        event={() => setCounter(counter - tam)}
                        text={`- ${tam}`}
                    />
                    <ButtonUI 
                        styles="buttonRed"
                        event={() => setCounter(0)}
                        text={`Reset`}
                    />
                </div>
            </div>
            <ImageColor />
            
        </>
    )
}
