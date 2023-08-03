import React, { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {
    const [imgUrl, setImgUrl] = useState([])
    const reqURL = 'http://api.giphy.com/v1/gifs/trending?api_key=RLH6uvGK2KyyVc5ts9jJaWiAndkpALVw&rating=g'
    
    useEffect(()=> {
        fetch(reqURL)
        .then(res => res.json())
        .then((data) => {
            const render = data.data
            const topThree = render.slice(0, 4)
            setImgUrl(topThree.map((urls)=> urls.images.original.url))
        })
    },[])

    function handleSearch(searchInput) {
        const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=RLH6uvGK2KyyVc5ts9jJaWiAndkpALVw&rating=g`
        fetch(searchUrl)
        .then((response) => response.json())
        .then((data)=> {
            const searched = data.data.map((item) => item.images.original.url)
            setImgUrl(()=> searched)
        })
    }
  return (
    <div>
        <GifSearch handleSearch={handleSearch} />
        <GifList imgUrl={imgUrl} />
    </div>
  )
}

export default GifListContainer