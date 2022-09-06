import React from 'react'

type Props = {
    children?: React.ReactNode
    width: string
    height: string
    padding?: string
    borderRadius?: string
    gap?: string
    duration?: string
    lineDirection?: 'horizontal' | 'vertical'
    color?: string
}

const Button: React.FC<Props> = ({
    children,
    width,
    height,
    padding,
    borderRadius,
    gap,
    lineDirection,
    duration = '200ms',
    color = 'rgb(27, 153, 139, 25%)',
}) => {
    let lineWidth = '0'
    let lineHeight = '0'
    if (lineDirection === 'horizontal') {
        lineWidth = width
        lineHeight = '0.4rem'
    } else if (lineDirection === 'vertical') {
        lineWidth = '0.4rem'
        lineHeight = height
    }
    return (
        <>
            <button
                style={{
                    width: width,
                    height: height,
                    transitionDuration: duration,
                }}
                className="relative group bg-transperent flex items-center outline-none m-1"
            >
                <div
                    style={{gap: gap, padding: padding}}
                    className="relative bg-transperent flex items-center outline-none text-lg"
                >
                    {children}
                </div>

                <div
                    style={{
                        borderRadius: borderRadius,
                        transitionDuration: duration,
                        backgroundColor: color,
                    }}
                    className="absolute w-full h-full scale-[98%] opacity-0
                    group-hover:scale-100 group-hover:opacity-100 z-[-1]"
                ></div>
            </button>
        </>
    )
}

export default Button
