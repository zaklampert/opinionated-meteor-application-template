import { Template } from 'meteor/templating';
import { Router } from 'meteor/justinr1234:lib';

const APP_REGISTER_HELPERS = {
  appLoginPage: () => Router.routeMap.APP_LOGIN.path,
};

Template.APP_REGISTER.helpers(APP_REGISTER_HELPERS);
