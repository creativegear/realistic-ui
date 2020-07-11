import React, { ReactElement } from 'react';
import Theme from '../../src/theme';
import Container from '../../src/component/container';
import { ContainerDeco } from '../../storybook/decorators';
import { storiesOf } from '@storybook/react-native';

function Default(): React.ReactElement {
  return (
    <Theme>
      <Container />
    </Theme>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'Container',
};

export const toStorybook = (): ReactElement => <Default />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Container', module)
  .addDecorator(ContainerDeco)
  .add('default', () => (
    <>
      <Default />
    </>
  ));
