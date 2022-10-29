import React, { useRef, useState } from 'react'
import Image from 'next/image';
import emailjs from '@emailjs/browser';

import styled from 'styled-components';

import name from '../public/icons/name.png';
import email from '../public/icons/email.png';
import message from '../public/icons/message.png';
import useAutosizeTextArea from '../hooks/useAutosizeTextArea';

type FormContainerProps = {
    textAreaHeight: number | undefined;
}
const FormContainer = styled.form<FormContainerProps>`
    margin: 280px 0 80px;
    padding: 32px 128px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border-radius: 12px;
    background-color: rgba(3, 30, 25, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);

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
    /* border: 1px solid rgba(255, 255, 255, 0.1);  */
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
    background: linear-gradient(90deg, rgba(102,217,155,1) 0%, rgba(55,125,106,1) 100%);
    padding: 12px 10px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--background-color);
    font-size: 20px;  
    border-radius: 4px;
    cursor: pointer;
    width: 40%;
    max-width: 300px;
    margin: 80px auto 0;
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
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const form = useRef<HTMLFormElement>(null as any);

    const [isThanksRendered, setThanksRendered] = useState(false);

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
                <FormContainer textAreaHeight={textAreaRef?.current?.offsetHeight} ref={form} onSubmit={sendEmail}>
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
    
                    <SubmitButton type="submit" value='Send' />
                </FormContainer>
            )}
        </>
    )
}

export default ContactForm