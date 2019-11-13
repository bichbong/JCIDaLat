import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tables/utilities/page-size-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{tables/utilities/page-size-input}}`);
    assert.ok(this.element.innerHTML.trim().includes('Show'));
  });
});
