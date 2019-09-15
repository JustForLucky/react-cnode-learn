export const topicPrimaryStyle = theme => ({
  root: {
    display: 'flex',
    alignItem: 'center',
  },
  title: {
    color: '#555',
  },
  tab: {
    backgroundColor: theme.palette.primary[500],
    textAlign: 'center',
    display: 'inline-block',
    padding: '0 6px',
    color: '#ffffff',
    borderRadius: 3,
    marginRight: 10,
    fontSize: '12px',
  },
  top: {
    backgroundColor: theme.palette.accent[500],
  },
});


export const topicSecondary = theme => ({
  root: {
    display: 'flex',
    alignItem: 'center',
    paddingTop: 3,
  },
  count: {
    textAlign: 'center',
    marginRight: 20,
  },
  userName: {
    marginRight: 20,
    color: '#e9e9e9',
  },
  accentColor: {
    color: theme.palette.accent[300],
  },
})

export default topicPrimaryStyle;
