import React from 'react'
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

import styled from 'styled-components';

import cutPortrait from '../public/images/cut-portrait.png';
import cutBG from '../public/images/cut-bg.jpg';


const Container = styled.div`
    position: relative;
    height: 630px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgContainer = styled(animated.div)`
    position: absolute;
    background-image: url(${cutBG.src});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
`;

const ImgWrapper = styled.div`
    position: absolute;
    z-index: 10;
`;


const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, 1];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const HoverableImage = () => {
    const [props, setProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 200, friction: 50 } }));

    return (
        <Container onMouseMove={({clientX: x, clientY: y}) => (setProps({xys: calc(x, y)}))} onMouseLeave={() => setProps({xys:[0,0,1]})}>
            <ImgWrapper >
                <Image src={cutPortrait} alt="" />
            </ImgWrapper>
            <ImgContainer style={{transform: props.xys.to(trans)}} />
        </Container>
    )
}

export default HoverableImage