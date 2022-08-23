// src/server/router/index.ts
import {createRouter} from './context'
import superjson from 'superjson'

import {postRouter} from './post'
import {protectedExampleRouter} from './protected-example-router'

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('example.', postRouter)
    .merge('question.', protectedExampleRouter)
    .query('hello', {
        resolve: () => {
            return 'Hello from trpc server'
        },
    })

// export type definition of API
export type AppRouter = typeof appRouter
