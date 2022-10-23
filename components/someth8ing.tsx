import React from 'react'

const someth8ing = () => {
    return (
        <div><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlLang="en"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            ref={cursor}
            visible={isVisible}
        >
            <defs>
                <path
                    id="textcircle"
                    d="M250,400
                    a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    transform="rotate(12,250,250)"
                />
            </defs>
            <circle cx="50%" cy="50%" r="205" fill="none" />
            <SVGText>
                <textPath xlinkHref="#textcircle" textLength="900">
                    VIEW · WITH · GITHUB ·
                </textPath>
            </SVGText>
        </svg></div>

    )
}

export default someth8ing