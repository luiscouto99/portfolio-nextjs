import React, { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

import name from '../../../public/icons/name.png';
import email from '../../../public/icons/email.png';
import message from '../../../public/icons/message.png';
import useAutosizeTextArea from '../../../hooks/useAutosizeTextArea';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { useWindowYOffset } from '../../../hooks/useWindowYOffset/useWindowYOffset';
import { FormSubmissionType } from '../../../types/form';
import {
  FormContainer,
  ImageWrapper,
  Input,
  Label,
  Result,
  ResultContainer,
  ResultSpan,
  SubmitButton,
  TextArea,
  Title,
} from './ContactForm.styled';

const ContactForm = () => {
  const [messageInput, setMessageInput] = useState('');
  const [isThanksRendered, setThanksRendered] = useState(false);
  const [isTryAgainRendered, setTryAgainRendered] = useState(false);
  const pageYOffset = useWindowYOffset();
  const screenWidth = useWindowWidth();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null as unknown as HTMLFormElement);

  useAutosizeTextArea(textAreaRef.current, messageInput);

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();

    const email = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs.send('service_mqqjzhj', 'template_yascyt3', email, 'vxsbnr4XFI-SFNKvG').then(
      (result: FormSubmissionType) => {
        console.log('result', result);
        setThanksRendered(true);
      },
      (error: FormSubmissionType) => {
        console.log('error', error);
        setTryAgainRendered(true);
      },
    );
  };

  return (
    <>
      {isThanksRendered ? (
        <ResultContainer>
          <Result data-testid="form-thanks">
            Thank you for reaching out. I will get back to you as soon as possible : &#41;
          </Result>
        </ResultContainer>
      ) : isTryAgainRendered ? (
        <ResultContainer>
          <Result>
            It seems like there has been an issue while sending your message. Would you like to{' '}
            <ResultSpan onClick={() => setTryAgainRendered(false)}>try again</ResultSpan>?
          </Result>
        </ResultContainer>
      ) : (
        <FormContainer
          textAreaHeight={textAreaRef?.current?.offsetHeight}
          ref={form}
          onSubmit={sendEmail}
          pageYOffset={pageYOffset}
          screenWidth={screenWidth}
          data-testid="form-submit"
        >
          <Title>Contact Me</Title>
          <Label htmlFor="name">
            <ImageWrapper>
              <Image src={name} alt="name icon" />
            </ImageWrapper>
            <Input
              type="text"
              placeholder="Full Name"
              name="user_name"
              autoComplete="off"
              required
              data-testid="form-name"
            />
          </Label>

          <Label htmlFor="email">
            <ImageWrapper>
              <Image src={email} alt="name icon" />
            </ImageWrapper>
            <Input
              type="email"
              placeholder="example@email.com"
              name="user_email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              autoComplete="off"
              required
              data-testid="form-email"
            />
          </Label>

          <Label htmlFor="message">
            <ImageWrapper>
              <Image src={message} alt="name icon" />
            </ImageWrapper>
            <TextArea
              ref={textAreaRef}
              placeholder="Write your message here"
              onChange={(event) => setMessageInput(event?.target.value)}
              rows={1}
              name="message"
              value={messageInput}
              minLength={30}
              required
              data-testid="form-message"
            />
          </Label>

          <SubmitButton type="submit" value="Submit" data-testid="form-button" />
        </FormContainer>
      )}
    </>
  );
};

export default ContactForm;
