import styled from 'styled-components';

type FormContainerProps = {
  textAreaHeight: number | undefined;
  screenWidth: number;
  pageYOffset: number;
};
export const FormContainer = styled.form<FormContainerProps>`
  max-width: 700px;
  margin: 280px auto 80px;
  padding: 32px 60px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: rgba(3, 30, 25, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: ${(props) => {
    if (
      (props.screenWidth <= 500 && props.pageYOffset >= 3100) ||
      (props.screenWidth <= 860 && props.pageYOffset >= 3400) ||
      (props.screenWidth > 860 && props.pageYOffset >= 4000)
    ) {
      return 1;
    }
    return 0;
  }};

  transition: opacity 1s ease-in-out;
  backdrop-filter: blur(3px);

  & label:first-of-type {
    margin-top: 40px;
  }

  & label:last-of-type {
    align-items: ${(props) =>
      props.textAreaHeight !== undefined && props.textAreaHeight > 43 ? 'flex-start' : 'center'};

    & div:first-child {
      margin-top: ${(props) =>
        props.textAreaHeight !== undefined && props.textAreaHeight > 43 ? '17px' : '0px'};
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

export const Title = styled.h2`
  margin-top: 38px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 40px;
`;

export const ImageWrapper = styled.div`
  margin-left: 12px;
`;

export const Input = styled.input`
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

export const TextArea = styled.textarea`
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

export const SubmitButton = styled.input`
  border: none;
  padding: 12px 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 40%;
  max-width: 220px;
  margin: 40px auto 48px;
  background: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.3);
  color: white;
  background-size: 300% 100%;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ResultContainer = styled.div`
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

export const Result = styled.p`
  text-align: center;
  line-height: 1.8;
`;

export const ResultSpan = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
