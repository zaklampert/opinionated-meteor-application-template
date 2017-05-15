import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// TODO: Forgot/reset passwords
Accounts.urls.resetPassword = token => Meteor.absoluteUrl(`reset-password/${token}`);
