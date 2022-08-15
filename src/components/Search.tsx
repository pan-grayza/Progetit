import React, {useState} from 'react'
import SearchSVG from '../assets/SVGs/SearchSVG'

const Search = () => {
    const [isInputFocused, setIsInputFocused] = useState(false)
    const onFocusInput = () => {
        setIsInputFocused(true)
    }
    const onBlurInput = () => {
        setIsInputFocused(false)
    }
    return (
        <div className="fixed left-searchLeftPosition w-full max-w-[20rem] h-screen flex flex-col items-center p-4 overflow-auto">
            <div
                style={{
                    border: `solid 2px ${
                        isInputFocused
                            ? 'rgb(25, 50, 60)'
                            : 'rgb(220, 239, 255, 75%)'
                    }`,
                }}
                className="relative flex flex-row items-center justify-center w-full h-[2.5rem] gap-[0.5rem] p-[0.5rem]
            rounded-lg"
            >
                <div className="relative flex w-[1.5rem] h-[1.5rem] items-center justify-center">
                    <SearchSVG activated={isInputFocused} />
                </div>

                <input
                    type="text"
                    placeholder="Search"
                    className="relative flex w-full h-full focus:outline-none"
                    onFocus={onFocusInput}
                    onBlur={onBlurInput}
                />
            </div>
        </div>
    )
}

export default Search
