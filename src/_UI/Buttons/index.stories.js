import React from 'react'
import { storiesOf } from '@storybook/react/dist/client/index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Button } from './'

storiesOf('UI|Button/default', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Button
      disabled={boolean('disabled', false)}
      isLoading={boolean('isLoading', false)}
      isWide
      onClick={action('onClick')}>
      {text('label', 'Press me')}
    </Button>
  )
