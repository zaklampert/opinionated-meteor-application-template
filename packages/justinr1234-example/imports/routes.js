import { Router, defaultBlazeRender } from 'meteor/justinr1234:lib';

// Routes will inherit default properties for common fields that are omitted below
// Info:
//  a) Group paths begin and end with / (e.g. /example/)
//  b) Child paths begin with the group and end WITHOUT a / (e.g. /example/add)
//  c) Root pages work just like any other child as in (b) (e.b. /home)
export const routes = {
  EXAMPLE: {
    path: '/example/',
    action: () => defaultBlazeRender('EXAMPLE_LIST'),
  },
  EXAMPLE_ADD: {
    path: '/example/add',
  },
  EXAMPLE_LIST: {
    path: '/example/list',
  },
  EXAMPLE_EDIT: {
    path: '/example/:_id',
  },
  APP_LOGIN: {
    path: '/login',
    action: () => defaultBlazeRender('APP_LOGIN'),
  },
  APP_REGISTER: {
    path: '/register',
    action: () => defaultBlazeRender('APP_REGISTER'),
  },
  // TODO: forgot and reset passwords
  // APP_FORGOT_PASSWORD: {
  //   path: '/forgot-password',
  //   action: () => defaultBlazeRender('APP_FORGOT_PASSWORD'),
  // },
  // APP_RESET_PASSWORD: {
  //   path: '/reset-password/:token',
  //   action: () => defaultBlazeRender('APP_RESET_PASSWORD'),
  // },
};

Router.addRoutes(routes);
