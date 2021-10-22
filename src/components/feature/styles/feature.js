import styled from 'styled-components/macro';

export const Container = styled.div`
  border-bottom: solid 8px #222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  padding: 165px 45px;
  max-width: 815px;

  @media screen and (max-width: 550px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 500;
  margin: auto;

  @media screen and (max-width: 550px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 16px auto;

  @media screen and (max-width: 550px) {
    font-size: 1.125rem;
  }
`;
