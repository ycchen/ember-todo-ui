// export { default } from 'ember-data-fixture-adapter';
import DS from 'ember-data';
export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4000/api',
});
