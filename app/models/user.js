import DS from 'ember-data';

export default DS.Model.extend({
  // firebase session service specific
  uid: DS.attr('string'),
  apiKey: DS.attr('string'),
  appName: DS.attr('string'),
  authDomain: DS.attr('string'),
  displayName: DS.attr('string'),
  email: DS.attr('string'),
  emailVerified: DS.attr('boolean'),
  isAnonymous: DS.attr('boolean'),
  phoneNumber: DS.attr('string'),
  photoURL: DS.attr('string'),
  // providerData: DS.attr(),
  // redirectEventId: DS.attr(),
  // stsTokenManager: DS.attr(),
  online: DS.attr('boolean'),

  // domain specific
  name: DS.attr('string'),
  posts: DS.hasMany()
});
