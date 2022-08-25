import React from 'react'

type Props = {
    activated: true | false
}

const ArrowUpvote: React.FC<Props> = ({activated = false}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="url(#paint0_linear_59_56)"
            stroke={activated ? 'rgb(0,0,0,0)' : '#19323C'}
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
            className="flex items-center justify-center pl-[0.1rem] scale-105"
        >
            <path
                d="M17.5826 8.86087L9.75653 0.878261C9.54784 0.669565 9.28697 0.565217 9.00001 0.565217C8.71305 0.565217 8.45218 0.669565 8.24349 0.878261L0.417401 8.86087C0.130444 9.14783 0.0260964 9.66956 0.208705 10.0348C0.365227 10.4261 0.756531 10.713 1.17392 10.713H4.56523V20.3652C4.56523 20.9391 5.16523 21.4087 5.73914 21.4087H12.2609C12.8348 21.4087 13.4348 20.9391 13.4348 20.3652V10.7391H16.8261C17.2435 10.7391 17.6348 10.4261 17.7913 10.0609C17.9478 9.66957 17.8696 9.17391 17.5826 8.86087Z"
                fill={activated ? 'url(#paint0_linear_59_56)' : 'none'}
            />
            {activated && (
                <defs>
                    <linearGradient
                        id="paint0_linear_59_56"
                        x1="8.99421"
                        y1="0.565217"
                        x2="8.99421"
                        y2="21.4087"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#1B998B" />
                        <stop offset="1" stopColor="#C2F970" />
                    </linearGradient>
                </defs>
            )}
        </svg>
    )
}

export default ArrowUpvote
