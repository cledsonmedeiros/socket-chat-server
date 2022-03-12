"use strict";var _http = require('./http');
require('./websocket');

_http.httpServer.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
