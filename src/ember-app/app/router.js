import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba22-вакант-должн-l');
  this.route('i-i-s-proba22-вакант-должн-e',
  { path: 'i-i-s-proba22-вакант-должн-e/:id' });
  this.route('i-i-s-proba22-вакант-должн-e.new',
  { path: 'i-i-s-proba22-вакант-должн-e/new' });
  this.route('i-i-s-proba22-граф-собес-l');
  this.route('i-i-s-proba22-граф-собес-e',
  { path: 'i-i-s-proba22-граф-собес-e/:id' });
  this.route('i-i-s-proba22-граф-собес-e.new',
  { path: 'i-i-s-proba22-граф-собес-e/new' });
  this.route('i-i-s-proba22-должн-сотр-l');
  this.route('i-i-s-proba22-должн-сотр-e',
  { path: 'i-i-s-proba22-должн-сотр-e/:id' });
  this.route('i-i-s-proba22-должн-сотр-e.new',
  { path: 'i-i-s-proba22-должн-сотр-e/new' });
  this.route('i-i-s-proba22-организация-l');
  this.route('i-i-s-proba22-организация-e',
  { path: 'i-i-s-proba22-организация-e/:id' });
  this.route('i-i-s-proba22-организация-e.new',
  { path: 'i-i-s-proba22-организация-e/new' });
  this.route('i-i-s-proba22-планир-собес-l');
  this.route('i-i-s-proba22-планир-собес-e',
  { path: 'i-i-s-proba22-планир-собес-e/:id' });
  this.route('i-i-s-proba22-планир-собес-e.new',
  { path: 'i-i-s-proba22-планир-собес-e/new' });
  this.route('i-i-s-proba22-рег-результ-l');
  this.route('i-i-s-proba22-рег-результ-e',
  { path: 'i-i-s-proba22-рег-результ-e/:id' });
  this.route('i-i-s-proba22-рег-результ-e.new',
  { path: 'i-i-s-proba22-рег-результ-e/new' });
  this.route('i-i-s-proba22-регист-анкеты-l');
  this.route('i-i-s-proba22-регист-анкеты-e',
  { path: 'i-i-s-proba22-регист-анкеты-e/:id' });
  this.route('i-i-s-proba22-регист-анкеты-e.new',
  { path: 'i-i-s-proba22-регист-анкеты-e/new' });
  this.route('i-i-s-proba22-сотруд-l');
  this.route('i-i-s-proba22-сотруд-e',
  { path: 'i-i-s-proba22-сотруд-e/:id' });
  this.route('i-i-s-proba22-сотруд-e.new',
  { path: 'i-i-s-proba22-сотруд-e/new' });
});

export default Router;
