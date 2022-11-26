import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin: 12px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 940px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin: 12px 20px;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  gap: 64px;

  @media (max-width: 500px) {
    gap: 20px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SocialTitle = styled.p`
  font-size: 18px;
  border-bottom: 1px solid var(--primary-color);
`;

export const InfoContainer = styled.div``;

export const InfoText = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
