import React from 'react'

const GifList = ({imageUrls}) => {
  return (
    <>
        <ul>
            {imageUrls.map((url, index) =>{
                return (
                    <li key={"img_" + index}>
                        <img src={url} alt='gif'/>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default GifList