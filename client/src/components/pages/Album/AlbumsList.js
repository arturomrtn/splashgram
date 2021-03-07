import React from 'react'
import AlbumCard from './AlbumCard'

const AlbumsList = ({ albums }) => {
    return (
        <ul>
            {albums?.map(elm => <AlbumCard key={elm._id} {...elm} />)}
        </ul>
    )
}

export default AlbumsList