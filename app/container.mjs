import awilix from 'awilix';
import {i18n_options } from './i18n.config.mjs';
import { i18n } from './services/i18n.mjs';
import { Application } from './application.mjs';
import { Server } from './server.mjs'
import { LocaleService }  from './services/localeService.mjs';

const container = awilix.createContainer();



container
  .register({
    app: awilix.asClass(Application, { lifetime: awilix.Lifetime.SINGLETON }),
    server: awilix.asClass(Server, { lifetime: awilix.Lifetime.SINGLETON }),
  })
  .register({
    i18nProvider: awilix.asClass(i18n, { lifetime: awilix.Lifetime.SINGLETON }).inject(() => ({ LocaleService, my_options: i18n_options }))
  })
 // .register({
  //  localeService: awilix.asClass(LocaleService, { lifetime: awilix.Lifetime.SINGLETON }).inject(() => ({ my_options: i18n_options }))
  //})
  ;

export default container;
