import { module, test } from 'qunit';
import { setupIntegrationTest } from 'open-event-frontend/tests/helpers/setup-integration-test';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | widgets/forms/radio button', function(hooks) {
  setupIntegrationTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{widgets/forms/radio-button}}`);
    assert.ok(this.element.innerHTML.trim().includes('radio'));
  });
});
