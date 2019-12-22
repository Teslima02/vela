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
  Grid,
  Paper,
  Typography,
  CssBaseline,
  makeStyles,
  Card,
  CardContent,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
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
import vw from '../../images/vw.svg';
import Ellipse2 from '../../images/Ellipse2.svg';
import Ellipse3 from '../../images/Ellipse3.svg';
import Ellipse4 from '../../images/Ellipse4.svg';
import ObjectW from '../../images/Object.svg';
import tableNav from '../../images/tableNav.svg';

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
  tableHeader: {
    background: '#EAEEF0',
  },
  itemType: {
    marginLeft: '10px',
  },
  itemImage: {
    float: 'left',
    marginRight: '20px',
  },
  reconciledButton: {
    color: '#27AE60',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    marginRight: '20px',
  },
  pendingButton: {
    color: '#EBC315',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    marginRight: '20px',
  },
  unreconciledButton: {
    color: '#7F8FA4',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    marginRight: '20px',
  },
  dot: {
    marginRight: '2px',
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

      <Typography variant="body2" component="p">
        <b>Payments</b>
      </Typography>
      <div>
        <Typography variant="body2" component="p">
          Showing
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell>Item Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Transaction No</TableCell>
                <TableCell>Time</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.reconciledButton}>
                    <img alt="" src={Ellipse2} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.pendingButton} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.pendingButton}>
                    <img alt="" src={Ellipse3} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.reconciledButton}>
                    <img alt="" src={Ellipse2} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.reconciledButton}>
                    <img alt="" src={Ellipse2} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.pendingButton}>
                    <img alt="" src={Ellipse3} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.unreconciledButton}>
                    <img alt="" src={Ellipse4} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.reconciledButton}>
                    <img alt="" src={Ellipse2} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.unreconciledButton}>
                    <img alt="" src={Ellipse4} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <img alt="" src={vw} className={classes.itemImage} />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.itemType}
                  >
                    Apple Mac Book 15* 250 SSD 12B
                  </Typography>
                </TableCell>
                <TableCell>$73430</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>12:30</TableCell>
                <TableCell>
                  <Button variant="outlined" className={classes.pendingButton}>
                    <img alt="" src={Ellipse3} className={classes.dot} />
                    Reconciled
                  </Button>
                  <img alt="" src={ObjectW} />
                </TableCell>
              </TableRow>
              <TableFooter>
                <TableRow>
                  <img alt="" src={tableNav} />
                </TableRow>
              </TableFooter>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
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
