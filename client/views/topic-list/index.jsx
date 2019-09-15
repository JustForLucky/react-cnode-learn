import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  observer,
  inject,
} from 'mobx-react'
import queryString from 'query-string';
import { CircularProgress } from 'material-ui/Progress'
import List from 'material-ui/List';
import Helmet from 'react-helmet';
import Tabs, { Tab } from 'material-ui/Tabs';
import { AppState, TopicStore } from '../../store/store';
import Container from '../layout/container';
import TopListItem from './list-item';
import { tabs } from '../../util/variable-define';

@inject(stores => (
  {
    appState: stores.appState,
    topicStore: stores.topicStore,
  }))
@observer
class TopicList extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.changeTab = this.changeTab.bind(this);
    this.listItemClick = this.listItemClick.bind(this);
  }
  componentDidMount() {
    const tab = this.getTab();
    this.props.topicStore.fetchTopics(tab);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      const tab = this.getTab(nextProps);
      this.props.topicStore.fetchTopics(tab);
    }
  }
  getTab(props) {
    const query = queryString.parse(props ? props.location.search : this.props.location.search);
    return query.tab || 'all';
  }
  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3;
        resolve(true);
      })
    })
  }
  changeTab(e, value) {
    this.context.router.history.push({
      pathname: '/list',
      search: `?tab=${value}`,
    })
  }
  /* eslint-disable */
  listItemClick() {

  }
  /* eslint-enable */
  render() {
    const {
      topicStore,
    } = this.props;
    const topicList = topicStore.topics || [];
    const syncingTopics = topicStore.syncing;
    const tab = this.getTab();
    return (
      <Container>
        <Helmet>
          <title>This is topic list</title>
          <meta name='description' content='This is description' />
        </Helmet>
        <Tabs value={tab} onChange={this.changeTab}>
          {
            Object.entries(tabs).map(([value, label]) => (
              <Tab key={value} value={value} label={label} />
            ))
          }
        </Tabs>
        <List>
          {
            topicList.map(topic => (
              <TopListItem key={topic.id} onClick={this.listItemClick} topic={topic} />
            ))
          }
        </List>
        {
          syncingTopics ? (
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px 0' }}>
              <CircularProgress color='accent' size={100} />
            </div>
          ) : null
        }
      </Container>
    )
  }
}
TopicList.wrappedComponent.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
  topicStore: PropTypes.instanceOf(TopicStore),
}
TopicList.propTypes = {
  location: PropTypes.object.isRequired,
}

export default TopicList
