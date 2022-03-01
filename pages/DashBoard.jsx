import React from 'react'

const DashBoard = () => {

    const playlists = [
        {
            name: "Playlist 1",
            img: "https://picsum.photos/id/300/350/300",
            songCount: 45
        },
        {
            name: "Playlist 2",
            img: "https://picsum.photos/id/301/350/300",
            songCount: 23
        },
        {
            name: "Playlist 3",
            img: "https://picsum.photos/id/302/350/300",
            songCount: 65
        },
        {
            name: "Playlist 4",
            img: "https://picsum.photos/id/305/350/300",
            songCount: 123
        },
        {
            name: "Playlist 5",
            img: "https://picsum.photos/id/304/350/300",
            songCount: 34
        },
        {
            name: "Playlist 6",
            img: "https://picsum.photos/id/306/350/300",
            songCount: 23
        },
        {
            name: "Playlist 7",
            img: "https://picsum.photos/id/307/350/300",
            songCount: 65
        },
        // {
        //     name: "Playlist 8",
        //     img: "https://picsum.photos/id/308/350/300",
        //     songCount: 45
        // },
        // {
        //     name: "Playlist 5",
        //     img: "https://picsum.photos/id/309/350/300",
        //     songCount: 34
        // },
        // {
        //     name: "Playlist 9",
        //     img: "https://picsum.photos/id/304/350/300",
        //     songCount: 978
        // },
        // {
        //     name: "Playlist 10",
        //     img: "https://picsum.photos/id/310/350/300",
        //     songCount: 234
        // },
        // {
        //     name: "Playlist 11",
        //     img: "https://picsum.photos/id/311/350/300",
        //     songCount: 42
        // },
        // {
        //     name: "Playlist 12",
        //     img: "https://picsum.photos/id/312/350/300",
        //     songCount: 65
        // },
        // {
        //     name: "Playlist 13",
        //     img: "https://picsum.photos/id/313/350/300",
        //     songCount: 12
        // },
        // {
        //     name: "Playlist 14",
        //     img: "https://picsum.photos/id/320/350/300",
        //     songCount: 67
        // },
    ]

    const listOfPlaylists = playlists.map((p) => {
        return (
            <div key={p.name} className="max-w-sm bg-white rounded-lg border border-purple-400 flex-shrink-0 hover:scale-105 hover:duration-200">
                <a href="#">
                    <img class="rounded-t-lg" src={p.img} alt="" />
                </a>
                <div class="p-5">
                    <p class="text-purple-600"><strong>{p.name}</strong></p>
                    <p class="text-purple-400">{p.songCount + " Songs"}</p>
                    <a href="#" class="inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 color" fill="none" viewBox="0 0 24 24" stroke="">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="flex flex-row my-10 mx-12 space-x-4 overflow-auto">
                {listOfPlaylists}
            </div>
        </>
    )
}

export default DashBoard
