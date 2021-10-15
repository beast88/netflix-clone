import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  font-size: 1.625rem;
  max-width: 670px;

  &:first-of-type {
    margin-top: 2em;
  }

  @media screen and (max-width: 949px) {
    font-size: 1.25rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1px;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media screen and (max-width: 600px) {
      width: 16px;
    }
  }
`;

export const Body = styled.div`
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media screen and (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;

  @media screen and (max-width: 949px) {
    font-size: 2.5rem;
  }
`;
