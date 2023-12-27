import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должнСотр: DS.attr('string'),
  фИОСотр: DS.attr('string'),
  сотруд: DS.belongsTo('i-i-s-proba22-сотруд', { inverse: 'тЧСотруд', async: false })
});

export let ValidationRules = {
  должнСотр: {
    descriptionKey: 'models.i-i-s-proba22-т-ч-сотруд.validations.должнСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОСотр: {
    descriptionKey: 'models.i-i-s-proba22-т-ч-сотруд.validations.фИОСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотруд: {
    descriptionKey: 'models.i-i-s-proba22-т-ч-сотруд.validations.сотруд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСотрудE', 'i-i-s-proba22-т-ч-сотруд', {
    фИОСотр: attr('Ф и о сотр', { index: 0 }),
    должнСотр: attr('Должн сотр', { index: 1 })
  });
};
