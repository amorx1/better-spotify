import React from 'react'

const PlaylistView = ({ listOfPlaylists }) => {
    return (
        <>
            <div className="bg-zinc-800">
                <div className="bg-zinc-800 flex flex-row mx-36 max-h-screen max-w-300 space-x-4 overflow-auto scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-800">
                    {listOfPlaylists}
                </div>
            </div>
        </>
    )
}

export default PlaylistView