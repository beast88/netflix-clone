import React from 'react';
import { Accordion } from '../components';
import OptFormContainer from './opt-form';
import faqData from '../fixtures/faq.json';

const FaqContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Fequently Asked Questions</Accordion.Title>

      <Accordion.Frame>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptFormContainer />
    </Accordion>
  );
};

export default FaqContainer;
