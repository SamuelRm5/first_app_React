import { useState, useEffect } from "react";
import { TenorCard } from "./TenorCard";
import './TenorStyle.css'


export const Tenor = () => {

    // API Key YMIK1XMB1RMB
    const URL = "https://g.tenor.com/v1/"

    const [tenor_url, setTenor_url] = useState([])
    const [query, setQuery] = useState("")

    const apiData = ( url, aprob ) => {

        const apiKey = "YMIK1XMB1RMB"

        if ( aprob === true ) {
            url = URL+`trending?key=${apiKey}&limit=4`
        } else {
            url = URL+`search?q=${query}&key=${apiKey}&limit=4`
        }
        fetch( url )
        .then( resp => resp.json())
        .then( data => setTenor_url(data.results))
        .catch( err => console.log( err ))
    }

    useEffect(() => {
    
        apiData(URL, true)

    }, [URL])

    useEffect(() => {

        apiData(URL, false)

    }, [query])

    const handleInputChange = ( { target } ) => {

        setQuery(  target.value )
    }


  return (
    <div className="m-5 pr_div_tenor">
        <input 
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
        />
        <div className="tenor_cont">

            {
                tenor_url.map( (data) => (
                    <TenorCard 
                        key={data.id}
                        gif={data.media}
                        { ...data }
                    />
                ))
            }
        
        </div> 
    </div>
   
  )
}
