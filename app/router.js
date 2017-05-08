import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('articles');
  this.resource('artists');
  this.resource('releases');
  this.resource('tracks');
  this.resource('images');
  this.resource('events');
});

export default Router;
