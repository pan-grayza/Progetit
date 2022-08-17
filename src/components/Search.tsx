import React, {useState, useRef} from 'react'
import SearchSVG from '../assets/SVGs/SearchSVG'
import CloseSVG from '../assets/SVGs/CloseSVG'

const Search = () => {
    const [isInputFocused, setIsInputFocused] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const input = useRef<HTMLInputElement>(null)
    const onClearingInput = () => {
        setInputValue('')
        setIsInputFocused(true)
    }
    const onInputChange = (e: any) => {
        setInputValue(e.target.value)
    }
    const onFocusInput = () => {
        setIsInputFocused(true)
        input?.current?.focus()
    }
    const onBlurInput = () => {
        setIsInputFocused(false)
    }

    return (
        <div className="fixed left-searchLeftPosition w-full max-w-[20rem] h-screen flex flex-col items-center p-4 overflow-auto">
            <div
                onClick={onFocusInput}
                style={{
                    border: `solid 2px ${
                        isInputFocused
                            ? 'rgb(25, 50, 60, 75%)'
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
                    ref={input}
                    type="text"
                    placeholder="Search"
                    className="relative flex w-full h-full focus:outline-none"
                    onBlur={onBlurInput}
                    onChange={onInputChange}
                    value={inputValue}
                />
                <button
                    onClick={onClearingInput}
                    className="relative flex justify-center items-center w-[1.5rem] h-[1.5rem]"
                >
                    <CloseSVG activated={inputValue !== ''} />
                </button>
            </div>
        </div>
    )
}

export default Search
