import z from 'zod'

export const createUserSchema = z.object({
    name: z.string().max(32, 'Max name length is 32'),
    description: z.string().min(10),
})

export type editUser = z.TypeOf<typeof createUserSchema>

export const getSingleUserSchema = z.object({
    userId: z.string().uuid(),
})
