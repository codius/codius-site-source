var ghost = require('ghost'),
    express = require('express'),
    path = require('path'),
    fs = require('fs'),
    redirect = require("express-redirect")
    app = express();

// Enable redirect plugin
redirect(app);

ghost({
  config: path.resolve(__dirname, 'ghost_config.js')
}).then(function (ghostServer) {
  // Make .html extension optional
  app.use(function(req, res, next) {
    if (req.path.indexOf('.') === -1) {
      var file = __dirname + '/web' + req.path + '.html';
      fs.exists(file, function(exists) {
        if (exists)
          req.url += '.html';
        next();
      });
    }
    else
      next();
  });

  // Static website
  app.use(express.static(__dirname + '/web'));

  // Default documentation page
  app.redirect('/docs', '/docs/getting-started');

  // Ghost blog
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

  ghostServer.start(app);

  app.listen(3000);
});
