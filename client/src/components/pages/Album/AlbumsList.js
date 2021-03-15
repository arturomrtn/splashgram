import React from 'react'
import AlbumCard from './AlbumCard'
import './AlbumsList.css'

const AlbumsList = ({ albums }) => {
    return (
        <ul className = "albums-list" >
            {albums?.map(elm => <AlbumCard key={elm._id} {...elm} />)}
        </ul>
    )
}

export default AlbumsList