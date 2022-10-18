import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import styled from 'styled-components'
import { Project } from '../types/project';

import ecommerce from '../public/images/ecommerce.jpg';
import keyboards from '../public/images/keyboards.jpg';
import pokemon from '../public/images/pokemon.jpg';

const CardContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    cursor: pointer;

    &:hover {
        & div:nth-child(2) {
            transition: 0.3s ease-in-out;
            opacity: 1;
        }
    }
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 96px;
    z-index: 1;
    margin: 0;
    margin-top: 30px;
    width: 70%;
    text-transform: uppercase;
`;

const ProjectWrapper = styled.div`
    opacity: 0;
    transition: 0.3s ease-in-out;
    margin-top: 32px;
`;

const Separator = styled.div`
    width: 204px;
    height: 1px;
    background-color: white;
`;

const Description = styled.p`
    font-size: 20px;
    color: white;
    width: 35%;
    line-height: 1.4;
`;

const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    z-index: 0;
    width: 816px;
    height: 400px;
    opacity: 0;
    transition: 0.3s ease-in-out;
`;

const ImageContainer = styled(Image)`
    width: 100%;
`;



const ProjectCard = ({ project, pageYOffset }: { project: Project, pageYOffset: number }) => {

    return (
        <CardContainer>
            <CardInfo>
                <Title>{project.name}</Title>
                <ProjectWrapper>
                    <Separator />
                    <Description>{project.description}</Description>
                </ProjectWrapper>
            </CardInfo>


            <ImageWrapper>
                <ImageContainer src={project.image} alt="" layout='fill' />
            </ImageWrapper>
        </CardContainer>
    )
}

export default ProjectCard