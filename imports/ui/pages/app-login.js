import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/justinr1234:lib';
import { FlowRouter } from 'meteor/kadira:flow-router';

const APP_LOGIN_HELPERS = {
  appRegisterPage: () => Router.routeMap.APP_REGISTER.path,
  appForgotPasswordPage: () => Router.routeMap.APP_FORGOT_PASSWORD.path,
};

Template.APP_LOGIN.helpers(APP_LOGIN_HELPERS);

Template.APP_LOGIN.onCreated(function authPageOnCreated() {
  this.autorun(function authPageAutorun() {
    // NOTE: http://stackoverflow.com/questions/35000844/meteor-template-autorun-is-not-a-function-when-using-es6 (zl)
    if (Meteor.userId()) {
      FlowRouter.go(Router.routeMap.HOME_PAGE.path);
    }
  });
});
