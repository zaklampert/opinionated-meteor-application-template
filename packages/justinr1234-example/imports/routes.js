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
    action: () => defaultBlazeRender('AUTH_PAGE'),
  },
};

Router.addRoutes(routes);
