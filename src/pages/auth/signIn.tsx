import {useEffect, lazy} from 'react'
import {getProviders, signIn} from 'next-auth/react'
import {unstable_getServerSession} from 'next-auth/next'
import {authOptions} from '../api/auth/[...nextauth]'

import SignUpWaves from '../../assets/SVGs/Textures/SignUpWaves'

interface props {
    providers: Object
}

const GitHubLogo = lazy(() => import('../../assets/SVGs/Logos/GithubLogo'))

export default function SignIn({providers}: props) {
    return (
        <div
            id="signInPage"
            className="w-full h-screen flex justify-center items-center overflow-hidden
            bg-gradient-to-b from-white to-greenGray"
        >
            <div className="absolute w-full h-full bg-signUpWaves bg-center bg-cover bg-no-repeat">
                {/* <SignUpWaves /> */}
            </div>
            <div
                className="flex flex-col gap-[1rem] w-[16rem] p-4 text-midnight-100 white rounded-lg
             bg-halfTransperentGreenGray backdrop-blur-sm drop-shadow"
            >
                <h1 className="text-2xl font-['Nunito_Sans']">Sign in</h1>
                <div className="relative w-full flex flex-row items-center justify-center gap-4">
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <div
                                key={provider.name}
                                className="relative w-full h-[3rem] flex justify-center items-center"
                            >
                                <button
                                    className="relative w-full h-full flex flex-row items-center justify-center gap-4 rounded-md"
                                    onClick={() => signIn(provider.id)}
                                    style={{
                                        backgroundColor: `${
                                            provider.name === 'GitHub' && '#fff'
                                        }`,
                                    }}
                                >
                                    {provider.name === 'GitHub' && (
                                        <div className="relative flex justify-center items-center w-[1.75rem] h-[1.75rem]">
                                            <GitHubLogo />
                                        </div>
                                    )}
                                    <p className="text-[#111]">
                                        Sign in with {provider.name}
                                    </p>
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    )

    if (session) {
        return {
            redirect: {
                destination: '/home',
                permanent: false,
            },
        }
    }
    const providers = await getProviders()
    return {
        props: {providers},
    }
}
