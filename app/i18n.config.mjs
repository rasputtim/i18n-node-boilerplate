//import { i18n } from './services/i18n.mjs';
import path from 'path';

var i18nOptions = {
  extension: '.yml',
  locales: ['en', 'el'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: path.join('./', 'locales')
};

//i18n = new i18n(i18n_options);

export { 
  //i18n,
  i18nOptions
};
