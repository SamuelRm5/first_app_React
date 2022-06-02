import { useState } from "react";
import './TenorStyle.css'


export const Tenor = () => {

    // API Key YMIK1XMB1RMB
    const api_key = "YMIK1XMB1RMB";
    const urls = "https://g.tenor.com/v1/trending?key=YMIK1XMB1RMB"

    const [url, setUrl] = useState([])

    const apiData = ( url ) => {d
        fetch( url )
        .then( resp => resp.json())
        .then( data => setUrl(data.results))
        .catch( err => console.log( err ))
    }

    useEffect(() => {
    
        apiData(urls)
      }, [urls])


  return (
    <div className="tenor_cont m-5">
        {/* {
            data.map( data => {
                <div className="tenor_cards">
                    <img src={data.url} />
                </div>
            })
        } */}
        
    </div>
  )
}
