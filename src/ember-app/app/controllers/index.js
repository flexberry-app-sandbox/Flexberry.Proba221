import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba22.caption'),
          title: i18n.t('forms.application.sitemap.proba22.title'),
          children: [{
            link: 'i-i-s-proba22-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-регист-анкеты-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-proba22-сотруд-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-сотруд-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-сотруд-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proba22-организация-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-организация-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proba22-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-планир-собес-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proba22-граф-собес-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-граф-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-граф-собес-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proba22-должн-сотр-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-должн-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-должн-сотр-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-proba22-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-рег-результ-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proba22-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.proba22.i-i-s-proba22-вакант-должн-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})