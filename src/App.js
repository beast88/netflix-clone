import React from 'react';
import FaqContainer from './containers/faqs';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';

const App = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};

export default App;
