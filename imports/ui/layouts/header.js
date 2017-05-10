import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Router } from 'meteor/justinr1234:lib';
import { FlowRouter } from 'meteor/kadira:flow-router';


const HEADER_HELPERS = {
  homePage: () => Router.routeMap.HOME_PAGE.path,
  exampleAddPage: () => Router.routeMap.EXAMPLE_ADD.path,
  exampleListPage: () => Router.routeMap.EXAMPLE_LIST.path,
  routes: () => _.map(Router.routeMap, route => route),
};

const HEADER_EVENTS = {
  'click #logout'() {
    Meteor.logout();
    // QUESTION: Does JustinRouter have a push function? (zl)
    FlowRouter.go('login');
  },
};

Template.Header.helpers(HEADER_HELPERS);
Template.Header.events(HEADER_EVENTS);
