import {getProviders, signIn} from 'next-auth/react'

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

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {providers},
    }
}
