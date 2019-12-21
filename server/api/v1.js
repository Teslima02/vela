const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const { Strategy } = require('passport-local');

// Helper

// Routes
const Talk = require('../routes/v1/talk');
const Attendee = require('../routes/v1/attendee');

// Account model
const Account = require('../models/v1/attendee');

module.exports = function init(app) {
  app.use(passport.initialize());
  passport.use(new Strategy(Account.authenticate()));
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'Tesly-merchant-Key',
      },
      (jp, cb) => {
        Account.findById(jp.userId)
          .then(user => cb(null, user))
          .catch(err => cb(err));
      },
    ),
  );
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());

  // If you need a backend, e.g. an API, add your custom backend-specific   middleware here
  app.use('/api/v1/talk', Talk);
  app.use('/api/v1/attendee', Attendee);
};
