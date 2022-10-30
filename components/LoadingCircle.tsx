import React from 'react'

import styled from 'styled-components';

const Loader = styled.div`
    width: 120px;
    height: 120px;
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadingCircle = () => {
    return (
        <Loader />
    )
}

export default LoadingCircle