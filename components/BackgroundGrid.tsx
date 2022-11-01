import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    z-index: 0;

    & div:nth-child(1) {
        margin-left: -720px;

        &::after{
            animation-delay: 2s;
        }
    }

    & div:nth-child(2) {
        margin-left: -360px;

        &::after{
            animation-delay: 2.5s;
        }
    }

    & div:nth-child(3) {
        &::after{
            animation-delay: 3s;
        }
    }

    & div:nth-child(4) {
        margin-left: 360px;

        &::after{
            animation-delay: 3.5s;
        }
    }

    & div:nth-child(5) {
        margin-left: 720px;

        &::after {
            animation-delay: 4s;
        }
    }
`;

const Line = styled.div`
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.05);
    overflow: hidden;

    &::after {
        content: '';
        display: block;
        position: absolute;
        height: 15vh;
        width: 100%;
        top: -50%;
        left: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #66D99B6d 75%, #66D99B6d 100%);
        animation: drop 7s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }
    
    @keyframes drop {
        0% {
            top: -50%;
        }
        100% {
            top: 110%;
        }
    }
`;

const BackgroundGrid = () => {
    return (
        <Container>
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
        </Container>
    )
}

export default BackgroundGrid