import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import { topicPrimaryStyle, topicSecondary } from './styles';
import { tabs } from '../../util/variable-define';


const Primary = ({ topic, classes }) => (
  <div className={classes.root}>
    <span className={cx(classes.tab, { [classes.top]: topic.top })}>{ topic.top ? '置顶' : tabs[topic.tab]}</span>
    <span className={classes.title}>{topic.title}</span>
  </div>
)

const StyledPrimary = withStyles(topicPrimaryStyle)(Primary);

Primary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const Secondary = ({ topic, classes }) => (
  <span className={classes.root}>
    <span className={classes.userName}>{topic.author.loginname}</span>
    <span className={classes.count}>
      <span className={classes.accentColor}>{topic.reply_count}</span>
      <span>/</span>
      <span>{topic.visit_count}</span>
    </span>
    <span>创建时间：{topic.create_at}</span>
  </span>
)

const StyledSecondary = withStyles(topicSecondary)(Secondary)

Secondary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}


const TopListItem = ({ onClick, topic }) => (
  <ListItem button={onClick}>
    <ListItemAvatar>
      <Avatar src={topic.author.avatar_url} />
    </ListItemAvatar>
    <ListItemText
      primary={<StyledPrimary topic={topic} />}
      secondary={<StyledSecondary topic={topic} />}
    />
  </ListItem>
)

TopListItem.propTypes = {
  topic: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TopListItem;
