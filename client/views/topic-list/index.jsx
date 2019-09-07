import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  observer,
  inject,
} from 'mobx-react'
import Helmet from 'react-helmet';
import { AppState } from '../../store/app-state'

@inject('appState')
@observer
class TopicList extends Component {
  constructor(props) {
    super(props)
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount() {
    // do something here

  }
  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3;
        resolve(true);
      })
    })
  }
  changeName(event) {
    this.props.appState.changeName(event.target.value);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>This is topic list</title>
          <meta name='description' content='This is description' />
        </Helmet>
        <input type='text' onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}


export default TopicList
