import React from 'react'
import { storiesOf } from '@storybook/react/dist/client'

import { PersonItem } from '.'

storiesOf('Components|PersonItem/default', module)
  .add('default', () =>
    <PersonItem />
  )
