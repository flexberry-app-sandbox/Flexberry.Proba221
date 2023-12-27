import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba22-планир-собес', 'Unit | Serializer | i-i-s-proba22-планир-собес', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba22-планир-собес',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba22-итог-собес',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
