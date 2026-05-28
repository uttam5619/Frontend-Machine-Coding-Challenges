import React, { useEffect } from 'react'

import { useState } from 'react'

const SearchBar = () => {

    const [movieName, setMovieName] = useState('')

    useEffect(()=>{
        searchMovie()
    },[movieName])

    const searchMovieHandler =(e)=>{
        console.log(e.target.value)
        setMovieName(e.target.value)
    }

    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '75d3aaafbcmshecf4cc8f0487295p1f1c76jsna54a9fdef709',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
    }

    async function searchMovie(){
        console.log("movie search clicked",movieName)
        const response = await fetch(`https://imdb236.p.rapidapi.com/api/imdb/search?query=${movieName}`, options)
        const data = await response.json()
        console.log(data)
    }

  return (
    <div>
        <input type="text" placeholder='Search for a movie' value={movieName} onChange={searchMovieHandler} />
        <button onClick={searchMovie}>Search</button>
    </div>
  )
}

export default SearchBar