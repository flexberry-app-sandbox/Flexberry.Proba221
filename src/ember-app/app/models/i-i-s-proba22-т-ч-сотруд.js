import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧСотрудMixin
} from '../mixins/regenerated/models/i-i-s-proba22-т-ч-сотруд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧСотрудMixin, Validations, {
});

defineProjections(Model);

export default Model;
