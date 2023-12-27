import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  организация: DS.belongsTo('i-i-s-proba22-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba22-планир-собес', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba22-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba22-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba22-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba22-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba22-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba22-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    организация: belongsTo('i-i-s-proba22-организация', 'Организация', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' }),
    планирСобес: belongsTo('i-i-s-proba22-планир-собес', 'Иметь при себе', {
      иметьПриСебе: attr('Иметь при себе', { index: 3, hidden: true }),
      регистАнкеты: belongsTo('i-i-s-proba22-регист-анкеты', '', {
        фИОКандидата: attr('ФИО', { index: 4 }),
        вакантДолжн: belongsTo('i-i-s-proba22-вакант-должн', '', {
          должности: attr('Вакантная должность', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    тЧРегРезульт: hasMany('i-i-s-proba22-т-ч-рег-результ', 'Т ч рег результ', {
      итогСобес: attr('Итог собес', { index: 1 }),
      оценкаКандид: attr('Оценка кандид', { index: 2 }),
      крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 3 }),
      сотруд: belongsTo('i-i-s-proba22-сотруд', 'ФИОСотр', {

      }, { index: 0 })
    })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba22-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    организация: belongsTo('i-i-s-proba22-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true }),
    планирСобес: belongsTo('i-i-s-proba22-планир-собес', 'ФИО', {
      регистАнкеты: belongsTo('i-i-s-proba22-регист-анкеты', '', {
        фИОКандидата: attr('ФИО', { index: 2 }),
        вакантДолжн: belongsTo('i-i-s-proba22-вакант-должн', '', {
          должности: attr('Вакантная должность', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
