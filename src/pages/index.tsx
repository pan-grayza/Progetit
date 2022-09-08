import type {NextPage} from 'next'
import Head from 'next/head'
import {useSession, signIn} from 'next-auth/react'
// import Navbar from '../components/Navbar'

import Router from 'next/router'

const Home: NextPage = () => {
    const {data: session} = useSession()

    const redirectToHome = () => {
        Router.push('/home')
    }

    return (
        <>
            <Head>
                <title>Progetit</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {!session && (
                <div>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </div>
            )}
            {session && redirectToHome()}
        </>
    )
}

export default Home
