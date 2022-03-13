import React, { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import useSpotify from './useSpotify'
import PlaylistHeader from './playlist-header'
import PlaylistView from './PlaylistView'


const DashBoard = () => {

    const spotifyApi = useSpotify()

    const { data: session, status } = useSession()
    const [playlists, setPlaylists] = useState([])
    const [profile, setProfile] = useState({})

    useEffect(() => {
        if (playlists !== []) {
            setPlaylists(playlists)
        }
        if (profile !== {}) {
            setProfile(profile)
        }
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                console.log(data)
                setPlaylists(data.body.items.map((p) => {
                    return {
                        id: p.id,
                        name: p.name,
                        img: p.images[0]?.url,
                        owner: p.owner.display_name
                    }
                }))
            })
            spotifyApi.getMe().then((data) => {
                setProfile({
                    Name: data.body.display_name ?? "",
                    ImgUrl: data.body.images[0]?.url ?? ""
                })
            })
        }
    }, [session, spotifyApi])

    const listOfPlaylists = playlists.map((p) => {
        return (
            <div key={p.id} className="max-w-sm bg-zinc-800 rounded-lg border border-rose-300 flex-shrink-0">
                <div className="rounded-t-lg h-80 w-80 overflow-hidden">
                    <a href="#">
                        <img className="rounded-t-lg object-scale-down" src={p.img} alt="" />
                    </a>
                </div>
                <div className="p-5">
                    <p className="text-white"><strong>{p.name}</strong></p>
                    <p className="text-white">{"By " + p.owner}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <PlaylistHeader signOut={signOut} show={session ?? false} profile={profile}></PlaylistHeader>
            <PlaylistView listOfPlaylists={listOfPlaylists}></PlaylistView>
        </>
    )
}

export default DashBoard
