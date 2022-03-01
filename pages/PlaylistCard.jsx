import React from 'react'

const Card = (props) => {

    const playlist = {
        name: props.name,
        songCount: props.songCount
    }

    return (
        <div>
            <h3>{playlist.name}</h3>
            <h4>{playlist.songCount}</h4>
        </div>
    )
}

export default Card