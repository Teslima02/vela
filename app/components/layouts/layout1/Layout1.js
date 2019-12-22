import React from 'react';
import PropTypes from 'prop-types';
import {
  InputBase,
  Avatar,
  fade,
  IconButton,
  Grid,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
  Typography,
  List,
  Toolbar,
  CssBaseline,
  AppBar,
  makeStyles,
  Drawer,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from 'react-router';

import notification from '../../../images/notification.svg';
import avatar from '../../../images/avatar.svg';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: '#E5E5E5',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  grow: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'right',
    color: '#1875F0',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    left: '5.5%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#979797',
  },
  inputRoot: {
    color: '#647787',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  textColor: {
    color: '#647787',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  appBarText: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  avatarFormatText: {
    marginRight: theme.spacing(1),
  },
  avatarFormat: {
    marginRight: theme.spacing(2),
  },
}));

const menuId = 'primary-search-account-menu';
const Layout1 = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            TransMonitor
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography
              variant="h6"
              noWrap
              className={`${classes.textColor} ${classes.appBarText}`}
            >
              Support
            </Typography>
            <Typography
              variant="h6"
              noWrap
              className={`${classes.textColor} ${classes.appBarText}`}
            >
              FAQ
            </Typography>
            <img
              alt=""
              src={notification}
              className={`${classes.textColor} ${classes.appBarText}`}
            />
            <Typography
              variant="h6"
              noWrap
              className={`${classes.textColor} ${classes.avatarFormatText}`}
            >
              Oluwaleke Ojo
            </Typography>
            <Avatar
              alt=""
              src={avatar}
              className={`${classes.avatarFormat}`}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12}>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {props.children}
          </main>
        </Grid>
      </Grid>
    </div>
  );
};

Layout1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  history: PropTypes.object,
};

export default withRouter(Layout1);
