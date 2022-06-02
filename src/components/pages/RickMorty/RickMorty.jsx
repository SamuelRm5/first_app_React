import { useEffect, useState } from 'react';
import { RickCard } from './RickCard';
import { useForm } from "../../../hooks/useForm";

export const RickMorty = () => {

  const URL = "https://rickandmortyapi.com/api/character";
  const [rickUrl, setRickUrl] = useState([])

  const fetchCharacters = ( url ) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setRickUrl(data.results))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    
    fetchCharacters(URL)
  }, [URL])

  

  const [ formValues, handleInputChange ] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCharacters(`${URL}/?name=${searchText}`)
  }
    
  return (
    <div className='m-5'>
      <form onChange={ handleSearch }>
        <input 
            type="text"
            placeholder="Busqueda..."
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ handleInputChange }
        />
      </form>
      <div className="row rows-cols-1 row-cols-md-3 g-3 m-5">

        
          {
            (rickUrl !== undefined) ? 
              rickUrl.map( element => (
                (element.status === 'Alive') ?
                    <RickCard key={element.id} vida={1} {...element}/>
                  : ( element.status === 'Dead') ? <RickCard key={element.id} vida={2} {...element}/>
                  : <RickCard key={element.id} vida={3} {...element}/>
            ))
            : <p>No hay resultados por '{searchText}'</p>
          }
      </div>
    </div>
    
  )
}
