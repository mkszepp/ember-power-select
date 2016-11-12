import $ from 'jquery';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { countries } from '../constants';

moduleForComponent('ember-power-select', 'Integration | Component | Ember Power Select (Customization using triggerClass)', {
  integration: true
});

test('trigger on single selects can be customized using triggerClass', function(assert) {
  assert.expect(1);

  this.countries = countries;
  this.country = countries[1]; // Spain

  this.render(hbs`
    {{#power-select options=countries selected=country onchange=(action (mut foo)) triggerClass="country-single-trigger" as |country|}}
      {{country.name}}
    {{/power-select}}
  `);

  assert.equal($('.country-single-trigger').length, 1, 'Class was added.');
});

test('trigger on multiple selects can be customized using triggerClass', function(assert) {
  assert.expect(1);

  this.countries = countries;
  this.country = [countries[1], countries[0]];

  this.render(hbs`
    {{#power-select options=countries selected=country onchange=(action (mut foo)) triggerClass="country-multiple-trigger" as |country|}}
      {{country.name}}
    {{/power-select}}
  `);

  assert.equal($('.country-multiple-trigger').length, 1, 'Class was added.');
});