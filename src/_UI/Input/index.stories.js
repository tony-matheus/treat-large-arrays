import React from 'react'
import { storiesOf } from '@storybook/react/dist/client/index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Input } from './'

storiesOf('UI|Input/default', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Input
      isDisabled={boolean('disabled', false)}
      placeholder={text('label', 'Type here')}
    />
  )
