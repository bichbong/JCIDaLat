import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.l10n.t('Messages');
  },
  model() {
    return this.store.query('message-setting', {});
  }
});
