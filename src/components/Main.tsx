import React from 'react'

import CreatePost from './CreatePost'
import Post from './Post'

const Main = () => {
    return (
        <main className="relative w-screen max-w-lg h-screen border-x border-lightBlue-75">
            <CreatePost />
            <Post />
        </main>
    )
}

export default Main
