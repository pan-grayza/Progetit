import React, {useState, useId} from 'react'

import Button from './Button'

import ReUse from '../assets/SVGs/Post/ReUse'
import Share from '../assets/SVGs/Post/Share'
import Comment from '../assets/SVGs/Post/Comment'
import OtherMenu from '../assets/SVGs/Post/OtherMenu'
import ArrowUpvote from '../assets/SVGs/Post/ArrowUpvote'
import ArrowDownVote from '../assets/SVGs/Post/ArrowDownVote'

const Post = () => {
    const [upVoteActivated, setUpVoteActivated] = useState(false)
    const [downVoteActivated, setDownVoteActivated] = useState(false)
    const upVote = () => {
        if (upVoteActivated) {
            setUpVoteActivated(false)
        } else {
            setUpVoteActivated(true)
            setDownVoteActivated(false)
        }
    }
    const downVote = () => {
        if (downVoteActivated) {
            setDownVoteActivated(false)
        } else {
            setDownVoteActivated(true)
            setUpVoteActivated(false)
        }
    }
    return (
        <div className="relative w-full flex flex-col pb-2 pt-4">
            <div className="relative w-full flex flex-row justify-center items-start">
                <div className="relative min-w-[2.5rem] flex flex-col items-center justify-center gap-1">
                    <button
                        onClick={upVote}
                        className="relative flex flex-col items-center justify-center ml-[0.3rem] focus:border-none active:border-none"
                    >
                        <ArrowUpvote activated={upVoteActivated} />
                    </button>
                    <p>123</p>
                    <button
                        onClick={downVote}
                        className="relative flex flex-col items-center justify-center focus:border-none active:border-none"
                    >
                        <ArrowDownVote activated={downVoteActivated} />
                    </button>
                </div>
                <div className="relative flex flex-col w-full px-2 gap-2">
                    <div className="relative w-full flex flex-row items-center gap-2">
                        <div className="relative w-[2rem] h-[2rem] bg-gray rounded-full"></div>
                        <h1 className="relative text-[1rem] font-bold">
                            Cool guy
                        </h1>
                        <p className="relative text-[0.9rem] text-midnight-75 mt-0.5">
                            @CoolGuy
                            <span className="relative text-midnight-50 ml-2 mt-2">
                                18:32
                            </span>
                        </p>
                    </div>
                    <div className="relative p-1">
                        <p>
                            Actual Content:
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            poeojbdbop
                        </p>
                    </div>
                </div>
            </div>

            <NavMenu />
        </div>
    )
}
const NavMenu = () => {
    const [menuOpened, setMenuOpened] = useState(true)
    const postId = useId()
    const otherMenuClick = (e: any) => {
        const menu = document.getElementById(
            `post-menu-${postId}`
        ) as HTMLElement
        let position = menu.getBoundingClientRect()
        let yPositionOfMenu = position.top
        if (menuOpened) {
            if (window.innerHeight / 1.5 < yPositionOfMenu) {
                menu.style.transformOrigin = 'bottom'
                menu.style.top = '-3.5rem'
            } else {
                menu.style.transformOrigin = 'center -10%'
                menu.style.top = '100%'
            }
            menu.style.transform = 'scale(100%)'
        } else {
            menu.style.transform = 'scale(0%)'
        }
        setMenuOpened((prevState) => !prevState)
    }
    return (
        <div className="relative w-full flex flex-row items-center justify-evenly">
            <div className="hidden"></div>
            <Button
                width="2rem"
                height="2rem"
                borderRadius="0.5rem"
                padding="0.25rem"
                duration="250ms"
            >
                <Comment />
            </Button>
            <Button
                width="2rem"
                height="2rem"
                borderRadius="0.5rem"
                padding="0.15rem"
                duration="250ms"
            >
                <div className="scale-95">
                    <ReUse />
                </div>
            </Button>
            <Button
                width="2rem"
                height="2rem"
                borderRadius="0.5rem"
                padding="0.2rem"
                duration="250ms"
            >
                <div className="scale-90">
                    <Share />
                </div>
            </Button>
            <div
                className="relative flex justify-center items-center"
                onClick={otherMenuClick}
            >
                <Button
                    width="2rem"
                    height="2rem"
                    borderRadius="0.5rem"
                    duration="250ms"
                    padding="0.4rem"
                >
                    <OtherMenu />
                </Button>
                <div
                    id={`post-menu-${postId}`}
                    className="absolute top-[-3.5rem] flex w-20 scale-0 h-16 bg-white drop-shadow-md rounded-lg duration-100 z-50"
                ></div>
            </div>
        </div>
    )
}

export default Post
