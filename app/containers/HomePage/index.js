/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

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
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Vector1 from '../../images/Vector1.svg';
import bigGrapg from '../../images/big-grapgh.svg';
import combineColor from '../../images/combineColor.svg';
import dateRange from '../../images/dateRange.svg';
import monthRange from '../../images/monthRange.svg';
import LeftButton from '../../images/LeftButton.svg';
import RightButton from '../../images/RightButton.svg';

const useStyles = makeStyles({
  card: {
    Width: '50px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  floatVector: {
    float: 'right',
    marginTop: '-40px',
  },
  chart1: {
    marginTop: '20px',
  },
  hrDivider: {
    border: '4px solid #F7F8FA',
    transform: 'rotate(-90deg)',
  },
  floatOrder: {
    float: 'right',
    marginTop: '140px',
  },
  verticalDivider: {
    border: '4px solid #F7F8FA',
  },
  dateFormat: {
    position: 'absolute',
    left: '324px',
    top: '221px',
  },
  monthFormat: {
    position: 'absolute',
    height: '31px',
    left: '701px',
    top: '218px',
  },
  leftArrow: {
    position: 'absolute',
    height: '19.38px',
    left: '902.43px',
    top: '218px',
  },
  rightArrow: {
    position: 'absolute',
    height: '19.38px',
    left: '926.15px',
    top: '218px',
  },
});

const key = 'home';

export function HomePage() {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <React.Fragment>
      <CssBaseline />
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Daily Transaction Volume
              </Typography>
              <Typography variant="body2" component="p">
                2,342
              </Typography>
              <img alt="" src={Vector1} className={classes.floatVector} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Daily Transaction Volume
              </Typography>
              <Typography variant="body2" component="p">
                ₦4,000,000
              </Typography>
              <img alt="" src={Vector1} className={classes.floatVector} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Total Transaction Volume
              </Typography>
              <Typography variant="body2" component="p">
                452,000
              </Typography>
              <img alt="" src={Vector1} className={classes.floatVector} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Total Transaction Volume
              </Typography>
              <Typography variant="body2" component="p">
                ₦4,000,000
              </Typography>
              <img alt="" src={Vector1} className={classes.floatVector} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <div className={classes.chart1}>
            {/* <div className={classes.dateFormat} /> */}
            {/* <div className={classes.dateFormat} /> */}
            <Card className={classes.card}>
              <img alt="" src={dateRange} className={classes.dateFormat} />
              <img alt="" src={monthRange} className={classes.monthFormat} />
              <img alt="" src={LeftButton} className={classes.leftArrow} />
              <img alt="" src={RightButton} className={classes.rightArrow} />
              <CardContent>
                <img alt="" src={bigGrapg} />
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.chart1}>
            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary">
                  <b>Orders</b>
                </Typography>
                <img alt="" src={combineColor} />
                <Typography variant="body2" component="p">
                  Pending Orders: 20
                </Typography>
                <Typography variant="body2" component="p">
                  Reconciled Orders: 20
                </Typography>
                <Typography variant="body2" component="p">
                  Total Orders: 20
                </Typography>
              </CardContent>
            </Card>
            <div className={classes.verticalDivider} />
            {/* <Divider /> */}
            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary">
                  <b>Orders</b>
                </Typography>
                <img alt="" src={combineColor} />
                <Typography variant="body2" component="p">
                  Pending Orders: 20
                </Typography>
                <Typography variant="body2" component="p">
                  Reconciled Orders: 20
                </Typography>
                <Typography variant="body2" component="p">
                  Total Orders: 20
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
