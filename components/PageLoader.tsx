import React, { useEffect, useState } from 'react'

import styled from 'styled-components';

type LoaderContainerProps = {
    percentage: number;
}
const LoaderContainer = styled.div<LoaderContainerProps>`
    position: absolute;
    top: ${(props) => props.percentage === 100 ? '-1000px' : '0px'};
    left: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: var(--primary-color);
    transition: top 1s ease-in-out;
    z-index: 10;
`;

const LoaderTitle = styled.h1`
    font-size: 92px;
    color: var(--background-color);
`;

const PageLoader = ({loader, layout} : {loader: () => void, layout: () => void}) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (percentage === 100) {
            setPercentage(100);
            setTimeout(() => layout(), 840);
            setTimeout(() => loader(), 1000);
        } else {
            setTimeout(() => {
                setPercentage(percentage + 1);
            }, 2);
        }
    }, [percentage, loader, layout]);


    return (
        <LoaderContainer percentage={percentage}>
            <LoaderTitle>
                {percentage}%
            </LoaderTitle>
        </LoaderContainer>
    )
}

export default PageLoader