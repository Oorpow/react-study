import React, { PureComponent } from 'react'
import { AppWrapper } from './style'

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <div className='test'>
            <span className='sp'>span css</span>
        </div>
      </AppWrapper>
    )
  }
}

export default App