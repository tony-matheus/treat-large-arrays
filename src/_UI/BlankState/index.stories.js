import React from 'react'
import { storiesOf } from '@storybook/react/dist/client/index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { BlankState } from './'

storiesOf('UI|BlankState/default', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <BlankState title='Um blank state qualquer'/>
  )
