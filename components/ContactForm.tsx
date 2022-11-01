import React, { useRef, useState } from 'react'
import Image from 'next/image';
import emailjs from '@emailjs/browser';

import styled from 'styled-components';

import name from '../public/icons/name.png';
import email from '../public/icons/email.png';
import message from '../public/icons/message.png';
import useAutosizeTextArea from '../hooks/useAutosizeTextArea';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { useWindowYOffset } from '../hooks/useWindowYOffset';

type FormContainerProps = {
    textAreaHeight: any;
    screenWidth: number;
    pageYOffset: number;
}
const FormContainer = styled.form<FormContainerProps>`
    max-width: 700px;
    margin: 280px auto 80px;
    padding: 32px 60px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background-color: rgba(3, 30, 25, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: ${(props) => props.screenWidth <= 500 && props.pageYOffset >= 3100 ? 1 : props.screenWidth <= 860 && props.pageYOffset >= 3400 ? 1 : props.screenWidth > 860 && props.pageYOffset >= 4000 ? 1 : 0};
    transition: opacity 1s ease-in-out;
    backdrop-filter: blur(3px);

    & label:first-of-type {
        margin-top: 40px;
    }

    & label:last-of-type {
        align-items: ${(props) => props.textAreaHeight > 43 ? 'flex-start' : 'center'};

        & div:first-child {
            margin-top: ${(props) => props.textAreaHeight > 43 ? '17px' : '0px'};
        }
    }

    @media (max-width: 860px) {
        margin: 200px 0 80px;
    }

    @media (max-width: 860px) {
        margin: 0 0 80px;
    }

    @media (max-width: 768px) {
        padding: 32px 60px;
    }

    @media (max-width: 500px) {
        padding: 32px 20px;
    }
`;

const Title = styled.h2`
    margin-top: 38px;

    @media (max-width: 500px) {
        font-size: 20px
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
    margin-left: 12px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 12px 10px;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid transparent; 

  &::placeholder {
    color: rgba(102, 217, 156, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  padding: 12px 10px;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid transparent; 
  resize: none;

  &::placeholder {
    color: rgba(102, 217, 156, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.input`
    border: none;
    padding: 12px 10px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--background-color);
    font-size: 20px;  
    border-radius: 4px;
    cursor: pointer;
    width: 40%;
    max-width: 220px;
    margin: 40px auto 48px;        
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.3);
    color: #fff;
    background-size: 300% 100%;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-position: 100% 0;
        transition: all .4s ease-in-out;
    }

    @media (max-width: 500px) {
        font-size: 16px
    }
`;

const ThanksContainer = styled.div`
    margin: 280px 0 80px;
    padding: 32px 128px;
    border-radius: 12px;
    background-color: rgba(3, 30, 25, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 860px) {
        margin: 200px 0 80px;
    }

    @media (max-width: 860px) {
        margin: 0 0 80px;
    }

    @media (max-width: 768px) {
        padding: 32px 60px;
    }

    @media (max-width: 500px) {
        padding: 32px 20px;
    }
`;

const Thanks = styled.p`
text-align: center;
`;

const ContactForm = () => {
    const [messageInput, setMessageInput] = useState("");
    const [isThanksRendered, setThanksRendered] = useState(false);
    const pageYOffset = useWindowYOffset();
    const screenWidth = useWindowWidth();

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const form = useRef<HTMLFormElement>(null as any);

    useAutosizeTextArea(textAreaRef.current, messageInput);

    const sendEmail = (event: any) => {
        event.preventDefault();

        setThanksRendered(true);

        const email = {
            name: form.current.user_name.value,
            email: form.current.user_email.value,
            message: form.current.message.value,
        }

        emailjs.send('service_mqqjzhj', 'template_yascyt3', email, 'vxsbnr4XFI-SFNKvG')
            .then((result: any) => {
                console.log(result.text);
            }, (error: any) => {
                console.log(error.text);
            });
    };

    return (
        <>
            {isThanksRendered ? (
                <ThanksContainer>
                    <Thanks>Thank you for reaching out to me. I will get back to you as soon as possible : &#41;</Thanks>
                </ThanksContainer>
            ) : (
                <FormContainer textAreaHeight={textAreaRef?.current?.offsetHeight} ref={form} onSubmit={sendEmail} pageYOffset={pageYOffset} screenWidth={screenWidth}>
                    <Title>Contact Me</Title>
                    <Label htmlFor='name' >
                        <ImageWrapper>
                            <Image src={name} alt='name icon' />
                        </ImageWrapper>
                        <Input type="text" placeholder='Full Name' name="user_name" autoComplete="off" required />
                    </Label>

                    <Label htmlFor='email'>
                        <ImageWrapper>
                            <Image src={email} alt='name icon' />
                        </ImageWrapper>
                        <Input type="email" placeholder='example@email.com' name="user_email" autoComplete="off" required />
                    </Label>

                    <Label htmlFor='message'>
                        <ImageWrapper>
                            <Image src={message} alt='name icon' />
                        </ImageWrapper>
                        <TextArea
                            ref={textAreaRef}
                            placeholder='Write your message here'
                            onChange={(event) => setMessageInput(event?.target.value)}
                            rows={1}
                            name='message'
                            value={messageInput}
                            required
                        />
                    </Label>

                    <SubmitButton type="submit" value='Submit' />
                </FormContainer>
            )}
        </>
    )
}

export default ContactForm