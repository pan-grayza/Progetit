import React from 'react'

type Props = {
    activated: true | false
}

const ArrowDownVote: React.FC<Props> = ({activated = false}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={activated ? 'rgb(0,0,0,0)' : '#19323C'}
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
            className="flex items-center justify-center pl-[0.1rem] scale-[102%]"
        >
            <path
                d="M3.41738 14.1391L11.2435 22.1217C11.4522 22.3304 11.713 22.4348 12 22.4348C12.2869 22.4348 12.5478 22.3304 12.7565 22.1217L20.5826 14.1391C20.8696 13.8522 20.9739 13.3304 20.7913 12.9652C20.6348 12.5739 20.2435 12.287 19.8261 12.287H16.4348L16.4348 2.63478C16.4348 2.06087 15.8348 1.5913 15.2609 1.5913H8.73912C8.16521 1.5913 7.56521 2.06087 7.56521 2.63478V12.2609H4.1739C3.75651 12.2609 3.36521 12.5739 3.20869 12.9391C3.05217 13.3304 3.13043 13.8261 3.41738 14.1391Z"
                fill="url(#paint0_linear_59_35)"
            />
            {activated && (
                <defs>
                    <linearGradient
                        id="paint0_linear_59_35"
                        x1="12.0058"
                        y1="22.4348"
                        x2="12.0058"
                        y2="1.5913"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4189CC" />
                        <stop offset="1" stopColor="#BFDAF0" />
                    </linearGradient>
                </defs>
            )}
        </svg>
    )
}

export default ArrowDownVote
