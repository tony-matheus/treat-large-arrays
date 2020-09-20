import React from 'react'
import { storiesOf } from '@storybook/react/dist/client/index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Loading } from './'
import { Spin } from './Spin'

storiesOf('UI|Loading/default', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Loading/>
  )
  .add('Spin', () =>
    <Spin/>
  )
