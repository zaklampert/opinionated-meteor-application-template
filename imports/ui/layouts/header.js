import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Router } from 'meteor/justinr1234:lib';


const HEADER_HELPERS = {
  homePage: () => Router.routeMap.HOME_PAGE.path,
  appLoginPage: () => Router.routeMap.APP_LOGIN.path,
  exampleAddPage: () => Router.routeMap.EXAMPLE_ADD.path,
  exampleListPage: () => Router.routeMap.EXAMPLE_LIST.path,
  routes: () => _.map(Router.routeMap, route => route),
};

const HEADER_EVENTS = {
  'click #logout'() {
    Meteor.logout();
  },
};

Template.Header.helpers(HEADER_HELPERS);
Template.Header.events(HEADER_EVENTS);
