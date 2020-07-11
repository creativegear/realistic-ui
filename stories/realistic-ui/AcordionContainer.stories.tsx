import React, { ReactElement } from 'react';
import { Text } from 'react-native';
import Theme from '../../src/theme';
import AcordionContainer from '../../src/component/acordion-container';
import { ContainerDeco } from '../../storybook/decorators';
import { storiesOf } from '@storybook/react-native';

function Default(): React.ReactElement {
  return (
    <Theme>
      <AcordionContainer
        height={'calc(100vh - 80px)'}
        firstColumn={<Text>1st</Text>}
        secondColumn={<Text>2nd</Text>}
        thirdColumn={<Text>3rd</Text>}
        forthColumn={<Text>4th</Text>}
        showThirdColumn={true}
        showForthColumn={true}
      />
    </Theme>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'AcordionContainer',
};

export const toStorybook = (): ReactElement => <Default />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('AcordionContainer', module)
  .addDecorator(ContainerDeco)
  .add('default', () => (
    <>
      <Default />
    </>
  ));
