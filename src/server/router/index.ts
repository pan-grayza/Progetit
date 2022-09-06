// src/server/router/index.ts
import {createRouter} from './context'
import superjson from 'superjson'

import {postRouter} from './post'
// import {userRouter} from './user'

export const appRouter = createRouter()
    .transformer(superjson)
    // .merge('users.', userRouter)
    .merge('posts.', postRouter)
    .query('hello', {
        resolve: () => {
            return 'Hello from trpc server'
        },
    })

// export type definition of API
export type AppRouter = typeof appRouter
