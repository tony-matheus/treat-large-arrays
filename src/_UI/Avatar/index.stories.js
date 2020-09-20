import React from 'react'
import { storiesOf } from '@storybook/react/dist/client/index'
import { withKnobs} from '@storybook/addon-knobs'

import Avatar from './'

storiesOf('UI|Avatar/default', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Avatar size='large' url='https://thispersondoesnotexist.com/image' hasImage />
  )
  .add('Letter Avatar', () =>
    <Avatar letter='A' />
  )
