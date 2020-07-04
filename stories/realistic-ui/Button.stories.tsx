import React, { ReactElement } from 'react';

import Button from '../../src/Button';
import { ContainerDeco } from '../../storybook/decorators';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';

const Container = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 28px;
  padding-top: 80px;

  flex-direction: column;
`;

function Default(): React.ReactElement {
  return (
    <Container>
      <Button
        style={{
          marginVertical: 40,
        }}
        containerStyle={{
          marginTop: 32,
        }}
        isDisabled={true}
        text={text('button text', 'this is disabled')}
      />
    </Container>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'Button',
};

export const toStorybook = (): ReactElement => <Default />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Button', module)
  .addDecorator(ContainerDeco)
  .add('default', () => (
    <>
      <Default />
    </>
  ));
