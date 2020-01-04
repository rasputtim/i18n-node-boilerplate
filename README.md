# Node.js i18n Project Example Setup
This is a boilerplate for internacionalization in Node.js

# key points:
Based on i18n with support to json and yaml (https://yaml.org/) files for translation.
Based in the version 0.8.3 of the i18n module. refactored to ES6 and added yaml support.
Using the Dependency injection with the  awilix module.
using ejs as template engine for express.


# i18n-node-boilerplate

# why yaml
Most people, including me, agree that YAML is a better format for writing translations as content is naturally aligned, and require few special character tweaks.
It means a non-techie could definitely maintain his own version of a translation file, at very little risks.
The i18n (https://github.com/mashpie/i18n-node) package is very nice and flexible but until now (version 0.8.3) did not add yaml spport.

# why dependency Injection

Dependency injection makes your modules less coupled resulting in a more maintainable codebase.

# why ejs

I prefer using ejs as template engine because I can make any kind of use of the javascript to perform several tasks that mustache and handlebar do not allow.

# how to use
I did not have time to write the complet intructions yet. 
I plan to make a tutorial, but until then you can use this
excelent tutorial: https://phrase.com/blog/posts/node-js-i18n-guide/ as a study base, except that I used ejs instead of mustache and my translation files are in the yaml format.

# i18n configuration options

change the var i18nOptions in the file app/i18n.config.mjs. Add any configuration as required by the i18n package.

# bugs

As this is a refactoring and  did not tested all features of the i18n original package, thare must be some bugs. I plan to fix them as soon as I test all features. contributions are welcome.
But the __('') is working and plurals also as I tested them.
