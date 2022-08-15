import React from 'react'

import CreatePost from './CreatePost'
import Post from './Post'

const Main = () => {
    return (
        <main className="relative w-full max-w-[32rem] h-max border-x-2 border-lightBlue-75 divide-y-2 divide-lightBlue-75">
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
    )
}

export default Main
