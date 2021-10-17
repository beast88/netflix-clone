import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 949px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  height: 70px;
  border: 1px solid #8c8c8c;
  border-radius: 2px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;

  &:focus-visible {
    outline: 0;
  }

  @media screen and (max-width: 1450px) {
    height: 60px;
  }

  @media screen and (max-width: 949px) {
    border-radius: 2px;
  }

  @media screen and (max-width: 740px) {
    height: 48px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 1.625rem;
  border: 0;
  border-left: 1px solid #333;
  border-radius: 2px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  cursor: pointer;
  letter-spacing: 0.1px;
  user-select: none;

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media screen and (max-width: 949px) {
      width: 12px;
    }
  }

  @media screen and (max-width: 1450px) {
    height: 60px;
  }

  @media screen and (max-width: 949px) {
    font-size: 1rem;
    height: 40px;
    margin-top: 15px;
    padding: 0 1em;
    border: 0;
    border-radius: 2px;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;

  @media screen and (max-width: 949px) {
    max-width: 450px;
    font-size: 23px;
  }
`;
