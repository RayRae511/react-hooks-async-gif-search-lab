import React, { useState } from 'react'

const GifSearch = ({handleSearch}) => {
    const [input, setInput] = useState("")
  return (
    <>
        <form onSubmit={(e) => { e.preventDefault(); setInput(""); handleSearch(input); }}>
            <input type='text' placeholder='Search gif' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
            <button type='submit'>Search</button>
        </form>
    </>
  )
}

export default GifSearch