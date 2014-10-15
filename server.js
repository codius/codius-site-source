var ghost = require('ghost'),
    express = require('express'),
    parentApp = express();

ghost().then(function (ghostServer) {
  parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

  ghostServer.start(parentApp);

  parentApp.listen(3000);
});
