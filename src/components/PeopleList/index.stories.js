import React from 'react'
import { storiesOf } from '@storybook/react/dist/client'
import { withKnobs } from '@storybook/addon-knobs'

import PersonList from '.'

storiesOf('Component|PersonList/default', module)
  .add('default', () =>
    <PersonList />
  )
