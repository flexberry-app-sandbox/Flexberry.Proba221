import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba22-сотруд', 'Unit | Model | i-i-s-proba22-сотруд', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba22-вакант-должн',
    'model:i-i-s-proba22-граф-собес',
    'model:i-i-s-proba22-должн-сотр',
    'model:i-i-s-proba22-организация',
    'model:i-i-s-proba22-планир-собес',
    'model:i-i-s-proba22-рег-результ',
    'model:i-i-s-proba22-регист-анкеты',
    'model:i-i-s-proba22-сотруд',
    'model:i-i-s-proba22-т-ч-рег-результ',
    'model:i-i-s-proba22-т-ч-сотруд',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
