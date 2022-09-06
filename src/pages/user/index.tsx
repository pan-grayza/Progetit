import React from 'react'
import UpperBar from '../../components/UpperBar'

const index = () => {
    let userPic = null
    return (
        <div className="relative w-full flex flex-col justify-center pt-[3rem]">
            <UpperBar title="User" />
            <div className="relative flex flex-col">
                <div className="relative w-full bg-seaGreen-100 h-[10rem]"></div>
                <div
                    className="relative w-[8rem] h-[8rem] flex align-center justify-center p-[0.3rem] rounded-full bg-white
            mt-[-4rem] ml-[1rem] z-50"
                >
                    {userPic ? (
                        <div className="relative w-[6rem] h-[6rem]"></div>
                    ) : (
                        <div className="relative w-full h-full bg-greenGray rounded-full"></div>
                    )}
                </div>
                <button
                    className="relative self-end mt-[-3rem] mr-[1rem] w-[9rem] h-[2.5rem] rounded-lg border-2 border-greenGray
                hover:bg-halfTransperentGreenGray"
                >
                    Edit profile
                </button>
                <div></div>
            </div>
        </div>
    )
}

export default index
