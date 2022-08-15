import React, {useState, useId} from 'react'

import NavButton from './NavButton'

import ReUse from '../assets/SVGs/ReUse'
import Share from '../assets/SVGs/Share'
import Comment from '../assets/SVGs/Comment'
import OtherMenu from '../assets/SVGs/OtherMenu'
import ArrowUpvote from '../assets/SVGs/ArrowUpvote'
import ArrowDownVote from '../assets/SVGs/ArrowDownVote'

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
                        className="relative flex flex-col items-center justify-center ml-[0.3rem]"
                    >
                        <ArrowUpvote activated={upVoteActivated} />
                    </button>
                    <p>123</p>
                    <button
                        onClick={downVote}
                        className="relative flex flex-col items-center justify-center"
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
                        <p className="relative text-[0.9rem] text-midnight-75">
                            @CoolGuy
                            <span className="relative text-midnight-50 ml-1">
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
                menu.style.transformOrigin = 'bottom 10%'
                menu.style.top = '-3.5rem'
            } else {
                menu.style.transformOrigin = 'top -10%'
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
            <NavButton
                width="2rem"
                height="2rem"
                borderRadius="0.5rem"
                padding="0.25rem"
                duration="250ms"
            >
                <Comment />
            </NavButton>
            <NavButton
                width="2rem"
                height="2rem"
                borderRadius="0.5rem"
                padding="0.15rem"
                duration="250ms"
            >
                <div className="scale-95">
                    <ReUse />
                </div>
            </NavButton>
            <NavButton
                width="2rem"
                height="2rem"
                borderRadius="0.5rem"
                padding="0.2rem"
                duration="250ms"
            >
                <div className="scale-90">
                    <Share />
                </div>
            </NavButton>
            <div
                className="relative flex justify-center items-center"
                onClick={otherMenuClick}
            >
                <NavButton
                    width="2rem"
                    height="2rem"
                    borderRadius="0.5rem"
                    duration="250ms"
                    padding="0.4rem"
                >
                    <OtherMenu />
                </NavButton>
                <div
                    id={`post-menu-${postId}`}
                    className="absolute top-[-3.5rem] flex w-20 scale-0 h-16 bg-white drop-shadow-md rounded-lg duration-100 z-50"
                ></div>
            </div>
        </div>
    )
}

export default Post
