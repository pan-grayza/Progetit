import type {NextPage} from 'next'
import Head from 'next/head'
import {trpc} from '../utils/trpc'

import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative w-screen h-screen flex flex-row justify-items-center items-center justify-center text-midnight-100">
                <Sidebar />
                <Main></Main>
            </div>
        </>
    )
}

export default Home
