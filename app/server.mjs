import express from 'express';
import consolidate from 'consolidate';
import cookieParser from 'cookie-parser';

export class Server {
  constructor({i18nProvider}) {
    this.express = express();
    this.express.disable('x-powered-by');

    this.express.use(cookieParser());
    //midleware to insert i18n to the req res objects
    this.express.use(i18nProvider.init());
    //middleware to select language by param ?lang in the get request
    this.express.use(i18nProvider.getMiddleWare());
    
    //the public_html folder
    this.express.use(express.static("public"));
    // set the view engine to ejs
    this.express.set('views', 'views'); //folder to look for the ejs templetes
    this.express.set('view engine', 'ejs');
    
    /*
    this is for mustache support, wich I do not like.
    I prefer to use ejs
    // setup mustache to parse .html files
    this.express.set('view engine', 'html');
    this.express.engine('html', consolidate.mustache);

    //https://github.com/janl/mustache.js#functions
    this.express.use((req, res, next) => {
      // mustache helper
      res.locals.i18n = () => (text, render) => req.__(text, render);
      next();
    });

    //https://github.com/janl/mustache.js#functions
    this.express.use((req, res, next) => {
      // mustache helper
      res.locals.i18np = () => (text, render) => {
        const parts = text.split(',');
        if (parts.length > 1) {
          const renderedCount = render(parts[1]);
          return req.__n(parts[0], renderedCount, render)
        }
      };
      next();
    });
*/
// route for user's dashboard
this.express.get('/dashboard', (req, res) => {
 
      res.render('dashboard');
 
});
    this.express.get('/:name?', (req, res) => {
      const name = req.params.name;

      res.render('index', {
        'currentLocale': res.locale,
        'name': name || 'Theo',
        'hello': req.__('Hello'),
        'messageCount': 5,
        'message': req.__('How are you?')
      });
    });
  }

  start() {
    return new Promise((resolve) => {
      const http = this.express.listen(8000, () => {
        const { port } = http.address();
        console.info(`[p ${process.pid}] Listening at port ${port}`);
        resolve();
      });
    });
  }
}
