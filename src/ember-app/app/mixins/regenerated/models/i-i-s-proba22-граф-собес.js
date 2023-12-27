import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафСобесE', 'i-i-s-proba22-граф-собес', {
    
  });

  modelClass.defineProjection('ГрафСобесL', 'i-i-s-proba22-граф-собес', {
    
  });
};
