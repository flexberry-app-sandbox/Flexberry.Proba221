import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  фИОСотр: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-proba22-должн-сотр.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОСотр: {
    descriptionKey: 'models.i-i-s-proba22-должн-сотр.validations.фИОСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжнСотрE', 'i-i-s-proba22-должн-сотр', {
    должность: attr('Должность', { index: 0 }),
    фИОСотр: attr('Ф и о сотр', { index: 1 })
  });

  modelClass.defineProjection('ДолжнСотрL', 'i-i-s-proba22-должн-сотр', {
    должность: attr('Должность', { index: 0 }),
    фИОСотр: attr('Ф и о сотр', { index: 1 })
  });
};
