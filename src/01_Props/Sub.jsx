import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Sub extends Component {
  static defaultProps = {
    title: PropTypes.string,
    getSubMsg: PropTypes.func
  }

  sendMsg() {
    this.props.getSubMsg('say something from sub')
  }

  render() {
    const { title } = this.props

    return (
      <div>Sub 接收到的props -- {title}
        <button onClick={e => this.sendMsg()}>send msg</button>
      </div>
    )
  }
}
