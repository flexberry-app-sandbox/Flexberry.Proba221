import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba22ВакантДолжнLForm from './forms/i-i-s-proba22-вакант-должн-l';
import IISProba22ГрафСобесLForm from './forms/i-i-s-proba22-граф-собес-l';
import IISProba22ДолжнСотрLForm from './forms/i-i-s-proba22-должн-сотр-l';
import IISProba22ОрганизацияLForm from './forms/i-i-s-proba22-организация-l';
import IISProba22ПланирСобесLForm from './forms/i-i-s-proba22-планир-собес-l';
import IISProba22РегРезультLForm from './forms/i-i-s-proba22-рег-результ-l';
import IISProba22РегистАнкетыLForm from './forms/i-i-s-proba22-регист-анкеты-l';
import IISProba22СотрудLForm from './forms/i-i-s-proba22-сотруд-l';
import IISProba22ВакантДолжнEForm from './forms/i-i-s-proba22-вакант-должн-e';
import IISProba22ГрафСобесEForm from './forms/i-i-s-proba22-граф-собес-e';
import IISProba22ДолжнСотрEForm from './forms/i-i-s-proba22-должн-сотр-e';
import IISProba22ОрганизацияEForm from './forms/i-i-s-proba22-организация-e';
import IISProba22ПланирСобесEForm from './forms/i-i-s-proba22-планир-собес-e';
import IISProba22РегРезультEForm from './forms/i-i-s-proba22-рег-результ-e';
import IISProba22РегистАнкетыEForm from './forms/i-i-s-proba22-регист-анкеты-e';
import IISProba22СотрудEForm from './forms/i-i-s-proba22-сотруд-e';
import IISProba22ВакантДолжнModel from './models/i-i-s-proba22-вакант-должн';
import IISProba22ГрафСобесModel from './models/i-i-s-proba22-граф-собес';
import IISProba22ДолжнСотрModel from './models/i-i-s-proba22-должн-сотр';
import IISProba22ОрганизацияModel from './models/i-i-s-proba22-организация';
import IISProba22ПланирСобесModel from './models/i-i-s-proba22-планир-собес';
import IISProba22РегРезультModel from './models/i-i-s-proba22-рег-результ';
import IISProba22РегистАнкетыModel from './models/i-i-s-proba22-регист-анкеты';
import IISProba22СотрудModel from './models/i-i-s-proba22-сотруд';
import IISProba22ТЧРегРезультModel from './models/i-i-s-proba22-т-ч-рег-результ';
import IISProba22ТЧСотрудModel from './models/i-i-s-proba22-т-ч-сотруд';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba22-вакант-должн': IISProba22ВакантДолжнModel,
    'i-i-s-proba22-граф-собес': IISProba22ГрафСобесModel,
    'i-i-s-proba22-должн-сотр': IISProba22ДолжнСотрModel,
    'i-i-s-proba22-организация': IISProba22ОрганизацияModel,
    'i-i-s-proba22-планир-собес': IISProba22ПланирСобесModel,
    'i-i-s-proba22-рег-результ': IISProba22РегРезультModel,
    'i-i-s-proba22-регист-анкеты': IISProba22РегистАнкетыModel,
    'i-i-s-proba22-сотруд': IISProba22СотрудModel,
    'i-i-s-proba22-т-ч-рег-результ': IISProba22ТЧРегРезультModel,
    'i-i-s-proba22-т-ч-сотруд': IISProba22ТЧСотрудModel
  },

  'application-name': 'Proba22',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba22',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba22',
          title: 'Proba22'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        proba22: {
          caption: 'Proba22',
          title: 'Proba22',
          'i-i-s-proba22-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba22-сотруд-l': {
            caption: 'Сотруд',
            title: ''
          },
          'i-i-s-proba22-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba22-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba22-граф-собес-l': {
            caption: 'Граф собес',
            title: ''
          },
          'i-i-s-proba22-должн-сотр-l': {
            caption: 'Должн сотр',
            title: ''
          },
          'i-i-s-proba22-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-proba22-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba22-вакант-должн-l': IISProba22ВакантДолжнLForm,
    'i-i-s-proba22-граф-собес-l': IISProba22ГрафСобесLForm,
    'i-i-s-proba22-должн-сотр-l': IISProba22ДолжнСотрLForm,
    'i-i-s-proba22-организация-l': IISProba22ОрганизацияLForm,
    'i-i-s-proba22-планир-собес-l': IISProba22ПланирСобесLForm,
    'i-i-s-proba22-рег-результ-l': IISProba22РегРезультLForm,
    'i-i-s-proba22-регист-анкеты-l': IISProba22РегистАнкетыLForm,
    'i-i-s-proba22-сотруд-l': IISProba22СотрудLForm,
    'i-i-s-proba22-вакант-должн-e': IISProba22ВакантДолжнEForm,
    'i-i-s-proba22-граф-собес-e': IISProba22ГрафСобесEForm,
    'i-i-s-proba22-должн-сотр-e': IISProba22ДолжнСотрEForm,
    'i-i-s-proba22-организация-e': IISProba22ОрганизацияEForm,
    'i-i-s-proba22-планир-собес-e': IISProba22ПланирСобесEForm,
    'i-i-s-proba22-рег-результ-e': IISProba22РегРезультEForm,
    'i-i-s-proba22-регист-анкеты-e': IISProba22РегистАнкетыEForm,
    'i-i-s-proba22-сотруд-e': IISProba22СотрудEForm
  },

});

export default translations;
