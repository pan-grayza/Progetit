import React from 'react'

import CreatePost from './CreatePost'
import Post from './Post'

const Main = () => {
    return (
        <main className="relative w-full max-w-[32rem] h-max flex flex-col justify-center border-x-2 border-lightBlue-75 divide-y-2 divide-lightBlue-75">
            <div className="fixed w-full sm:w-navWidth top-0 h-[3rem] flex flex-row items-center p-7 py-4 z-50 bg-halfTransperentWhite backdrop-blur-sm">
                <h1 className="text-xl font-bold">Home</h1>
            </div>
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
    )
}

export default Main
