import React from 'react'

interface props {
    title: string
}

const UpperBar = ({title}: props) => {
    return (
        <div className="fixed w-full sm:w-navWidth top-0 h-[3rem] flex flex-row items-center p-7 py-4 z-50 bg-halfTransperentWhite backdrop-blur-md">
            <h1 className="text-xl font-bold">{title}</h1>
        </div>
    )
}

export default UpperBar
