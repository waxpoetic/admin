import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  authenticator: Ember.inject.service(),
  headers: Ember.computed('authenticator.token,authenticator.email', function() {
    let token = this.get('authenticator.token');
    let email = this.get('authenticator.email');

    return {
      'Authorization': (token && email) ? `Bearer ${token} email=${email}` : ''
    }
  })
});
