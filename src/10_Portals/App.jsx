import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class App extends PureComponent {
  render() {
    return (
      <div>
        {
            createPortal(<div>
                portals测试
            </div>, document.querySelector('#portal'))
        }
      </div>
    )
  }
}

export default App