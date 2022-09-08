import React from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import {CreatePostInput} from '../schema/post.schema'
import {trpc} from '../utils/trpc'

const CreatePost = () => {
    const {handleSubmit, register} = useForm<CreatePostInput>()
    const router = useRouter()
    // const {mutate, error} = trpc.useMutation(['posts.create-post'], {
    //     onSuccess: ({id}) => {
    //         router.push(`/posts/${id}`)
    //     },
    // })
    function onSubmit(values: CreatePostInput) {
        // mutate(values)
    }

    React.useEffect(() => {
        const textarea = document.querySelector(
            '#CreatePostTextArea'
        ) as HTMLTextAreaElement
        const resizeTextArea = (e: any) => {
            textarea.style.height = '1rem'
            let scHeight = (e.target as HTMLTextAreaElement).scrollHeight
            textarea.style.height = `${scHeight + 24}px`
        }
        textarea?.removeEventListener('keydown', resizeTextArea)
        textarea?.addEventListener('keydown', resizeTextArea)
    }, [])
    const TextAreaPlaceHolders = [
        'Feel like a genius?',
        'Have a shitpost idea?',
        'Wanna say something?',
        'Something Annoying happened?',
        'Another #HotTake?',
    ]
    const randomizeTextAreaPlaceHolders = () =>
        TextAreaPlaceHolders[
            Math.floor(Math.random() * TextAreaPlaceHolders.length)
        ]

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-full flex flex-col px-8 pb-6 pt-[4rem]"
        >
            {/* {error && error.message} */}
            <textarea
                maxLength={200}
                id="CreatePostTextArea"
                className="relative overflow-hidden resize-none w-full border-none focus:border-none focus:outline-none active:border-none active:outline-none"
                placeholder={randomizeTextAreaPlaceHolders()}
                {...register('body')}
            ></textarea>
            <button
                className="relative flex justify-center items-center self-end mt-4 py-2 px-[1.5rem] rounded-lg text-white
            after:content-[''] after:absolute after:w-full after:h-full after:bg-seaGreen-100
            after:rounded-lg after:duration-300 after:z-0 active:after:scale-[95%]"
            >
                <span className="z-10">Post</span>
            </button>
        </form>
    )
}

// export default CreatePost

export default dynamic(() => Promise.resolve(CreatePost), {
    ssr: false,
})
