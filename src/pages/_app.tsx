// src/pages/_app.tsx
import {withTRPC} from '@trpc/next'
import type {AppRouter} from '../server/router'
import type {AppType} from 'next/dist/shared/lib/utils'
import superjson from 'superjson'
import {SessionProvider} from 'next-auth/react'
import '../styles/globals.css'

import Navbar from '../components/Navbar'

const MyApp: AppType = ({Component, pageProps: {session, ...pageProps}}) => {
    return (
        <SessionProvider session={session}>
            <div className="relative w-screen h-screen flex flex-row justify-center text-midnight-100">
                <div className="z-[-100]"></div>
                <Navbar />
                <div className="absolute top-0 w-full max-w-[34rem] h-max border-x-[1px] border-b-[1px] border-lightBlue-75 pb-[2rem]">
                    <Component {...pageProps} />
                </div>
            </div>
        </SessionProvider>
    )
}

const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        return ''
    }
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url

    return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
    config({ctx}) {
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         */
        const url = `${getBaseUrl()}/api/trpc`

        return {
            url,
            transformer: superjson,
            /**
             * @link https://react-query.tanstack.com/reference/QueryClient
             */
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        }
    },
    /**
     * @link https://trpc.io/docs/ssr
     */
    ssr: false,
})(MyApp)
