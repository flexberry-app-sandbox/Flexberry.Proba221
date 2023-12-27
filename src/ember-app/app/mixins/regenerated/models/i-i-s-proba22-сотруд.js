import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тЧСотруд: DS.hasMany('i-i-s-proba22-т-ч-сотруд', { inverse: 'сотруд', async: false })
});

export let ValidationRules = {
  тЧСотруд: {
    descriptionKey: 'models.i-i-s-proba22-сотруд.validations.тЧСотруд.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудE', 'i-i-s-proba22-сотруд', {
    тЧСотруд: hasMany('i-i-s-proba22-т-ч-сотруд', 'Т ч сотруд', {
      фИОСотр: attr('Ф и о сотр', { index: 0 }),
      должнСотр: attr('Должн сотр', { index: 1 })
    })
  });

  modelClass.defineProjection('СотрудL', 'i-i-s-proba22-сотруд', {
    
  });
};
