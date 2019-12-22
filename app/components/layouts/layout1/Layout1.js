import React from 'react';
import PropTypes from 'prop-types';
import {
  InputBase,
  Avatar,
  fade,
  Grid,
  ListItemIcon,
  ListItemText,
  ListItem,
  Typography,
  List,
  Toolbar,
  CssBaseline,
  AppBar,
  makeStyles,
  Drawer,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router';

import notification from '../../../images/notification.svg';
import avatar from '../../../images/avatar.svg';
import DB from '../../../images/DB.svg';
import wallet43 from '../../../images/wallet-43.svg';
import walletM from '../../../images/wallet-m.svg';
import walletE from '../../../images/wallet-e.svg';
import setting from '../../../images/setting.svg';
import order from '../../../images/order.svg';
import orderM from '../../../images/order-m.svg';
import orderE from '../../../images/order-e.svg';
import profile from '../../../images/profile.svg';

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
  nav1: {
    width: '163px',
    height: '33px',
    background: '#27AE60',
    borderRadius: '30px',
  },
  navButton1: {
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    letterSpacing: '0.2px',
  },
  nav2Bg: {
    background: '#EAEEF0',
  },
}));

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
            <Avatar alt="" src={avatar} className={`${classes.avatarFormat}`} />
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
          <ListItem button className={classes.navButton1}>
            <ListItemText primary="GENERATE INVOICE" className={classes.nav1} />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary="Main" />
          </ListItem>
        </List>
        <List>
          <ListItem button className={classes.nav2Bg}>
            <ListItemIcon>
              <img alt="" src={DB} />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary="Payments" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={wallet43} />
            </ListItemIcon>
            <ListItemText primary="All Payments" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={walletM} />
            </ListItemIcon>
            <ListItemText primary="Reconcilled Payments" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={walletE} />
            </ListItemIcon>
            <ListItemText primary="Un-Reconcilled Payments" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={setting} />
            </ListItemIcon>
            <ListItemText primary="Manual Settlement" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={order} />
            </ListItemIcon>
            <ListItemText primary="All Orders" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={orderM} />
            </ListItemIcon>
            <ListItemText primary="Pending Orders" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={orderE} />
            </ListItemIcon>
            <ListItemText primary="Reconcilled Orders" />
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img alt="" src={profile} />
            </ListItemIcon>
            <ListItemText primary="Merchant Profile" />
          </ListItem>
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
