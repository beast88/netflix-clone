import React from 'react';
import FaqContainer from '../containers/faqs';
import { Feature } from '../components';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';
import OptFormContainer from '../containers/opt-form';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
