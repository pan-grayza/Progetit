import {createUserSchema, getSingleUserSchema} from '../../schema/user.schema'
import {createRouter} from './context'
import * as trpc from '@trpc/server'
import {z} from 'zod'

export const postRouter = createRouter().query('single-user', {
    input: getSingleUserSchema,
    resolve({input, ctx}) {
        return ctx.prisma.post.findUnique({
            where: {
                id: input.userId,
            },
        })
    },
})
