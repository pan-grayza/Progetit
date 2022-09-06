import React from 'react'
import LogoContainer from './LogoContainer'
import Button from './Button'
import Search from './Search'

import Router from 'next/router'

//Svgs
import HomeOutlined from '../assets/SVGs/Menu/HomeOutlined'
import BookmarkOutlined from '../assets/SVGs/Menu/BookmarkOutlined'
import UserOutlined from '../assets/SVGs/Menu/UserOutlined'

const Navbar = () => {
    const redirectToHome = () => {
        Router.push('/home')
    }
    const redirectToBookmarks = () => {
        Router.push('/bookmarks')
    }
    const redirectToUser = () => {
        Router.push('/user')
    }
    return (
        <div className="fixed right-sidebarRightPosition max-w-64 h-screen flex flex-col items-center gap-2 p-4">
            <LogoContainer />
            <div className="relative mt-2 flex flex-col gap-0.5 scale-105">
                <div onClick={redirectToHome}>
                    <Button
                        width="13rem"
                        height="3rem"
                        borderRadius="0.75rem"
                        gap="1rem"
                        padding="0.5rem"
                    >
                        <div className="scale-90">
                            <HomeOutlined />
                        </div>

                        <span className="text-md">Home</span>
                    </Button>
                </div>
                <div onClick={redirectToBookmarks}>
                    <Button
                        width="13rem"
                        height="3rem"
                        borderRadius="0.75rem"
                        gap="1rem"
                        padding="0.5rem"
                    >
                        <div className="scale-90">
                            <BookmarkOutlined />
                        </div>

                        <span className="text-md">Bookmarks</span>
                    </Button>
                </div>
                <div onClick={redirectToUser}>
                    <Button
                        width="13rem"
                        height="3rem"
                        borderRadius="0.75rem"
                        gap="1rem"
                        padding="0.5rem"
                    >
                        <div className="scale-90">
                            <UserOutlined />
                        </div>

                        <span className="text-md">Profile</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

const NavbarPlusSearch = () => {
    return (
        <>
            <Navbar />
            <Search />
        </>
    )
}

export default NavbarPlusSearch
