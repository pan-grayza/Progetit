import {getProviders, signIn} from 'next-auth/react'
import {unstable_getServerSession} from 'next-auth/next'
import {authOptions} from '../api/auth/[...nextauth]'

interface props {
    providers: Object
}

export default function SignIn({providers}: props) {
    return (
        <>
            <div></div>
            {providers &&
                Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
        </>
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
                destination: '/',
                permanent: false,
            },
        }
    }
    const providers = await getProviders()
    return {
        props: {providers},
    }
}
