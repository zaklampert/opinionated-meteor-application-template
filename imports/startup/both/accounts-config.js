import { AccountsTemplates } from 'meteor/useraccounts:core';

/**
 * The useraccounts package must be configured for both client and server to work properly.
 * See the Guide for reference (https://github.com/meteor-useraccounts/core/blob/master/Guide.md)
 */

AccountsTemplates.configure({
  showForgotPasswordLink: true,
  defaultTemplate: 'Auth_page',
  defaultLayout: 'App_Body',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {},
});

// TODO: figure out how this works with JustinRouter (zl)

// AccountsTemplates.configureRoute('signIn', {
//   name: 'signin',
//   path: '/signin',
// });
//
// AccountsTemplates.configureRoute('signUp', {
//   name: 'register',
//   path: '/register',
// });
// //
// AccountsTemplates.configureRoute('forgotPwd');
//
// AccountsTemplates.configureRoute('resetPwd', {
//   name: 'RESET_PASSWORD',
//   path: '/reset-password',
// });
