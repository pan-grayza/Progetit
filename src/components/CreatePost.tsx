import React from 'react'

const CreatePost = () => {
    const [postContent, setPostContent] = React.useState('')
    const onChange = (e: any) => {
        setPostContent(e.target.value)
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
        <form className="relative w-full flex flex-col p-8">
            <textarea
                maxLength={200}
                id="CreatePostTextArea"
                className="relative overflow-hidden resize-none w-full focus:border-none focus:outline-none"
                onChange={onChange}
                placeholder={randomizeTextAreaPlaceHolders()}
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

export default CreatePost
