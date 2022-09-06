import React from 'react'

import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
import UpperBar from '../components/UpperBar'

import {trpc} from '../utils/trpc'
import Link from 'next/link'

const Home = () => {
    const {data, isLoading} = trpc.useQuery(['posts.posts'])
    return (
        <>
            <main className="flex flex-col justify-center divide-y-[1px] divide-lightBlue-75">
                <UpperBar title="Home" />
                <CreatePost />
                {data?.map((post) => {
                    return (
                        <article key={post.id}>
                            <p>{post.body}</p>
                            <Link href={`/posts/${post.id}`}>Read post</Link>
                        </article>
                    )
                })}

                <Post />
                <Post />
                <Post />
                <Post />
            </main>
        </>
    )
}

export default Home
