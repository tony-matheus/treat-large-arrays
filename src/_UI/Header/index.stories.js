import React from 'react'
import { storiesOf } from '@storybook/react/dist/client/index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Header } from './'

storiesOf('UI|Header/default', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Header />
  )
  .add('with Children', () =>
    <Header>
      Header
    </Header>
  )
