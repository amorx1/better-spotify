import React from 'react'

const PlaylistHeader = ({ signOut, show, profile }) => {

    if (!show) {
        return (<></>)
    }
    return (
        <>
            {/* <div className="bg-red-900 w-full block flex-grow lg:flex lg:items-center lg:w-auto mb-2 py-6 my-0">
                <h1 className="font-medium text-5xl text-purple-300 mx-14">Playlists</h1>
                <button className="px-96 text-purple-300 rounded-lg outline" onClick={signOut}>Sign Out</button>
            </div> */}

            <nav className="flex flex-center justify-between flex-wrap bg-zinc-800 p-8">
                <div className="flex items-center flex-shrink-0 text-rose-300 mr-6 mx-24">
                    <span className="font-semibold text-5xl tracking-tight mx-6">{profile.Name}'s Playlists</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    </div>
                    <img src={profile.ImgUrl} className="inline-block w-16 h-16 mr-2 mb-0 rounded-full"/>
                    <div>
                        <a href="#" onClick={signOut} className="inline-block text-sm mr-28  px-4 py-3 leading-none border rounded-xl text-rose-300 border-rose-300 hover:border-transparent hover:text-zinc-800 hover:bg-white mt-4 lg:mt-0">Sign Out</a>
                    </div>
                    {/* <div className="m-1 mr-6 w-24 h-24 relative flex justify-center items-center rounded-full bg-zinc-800 text-xl text-white">
                        <img src={profile.ImgUrl} className="rounded-full"/>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default PlaylistHeader