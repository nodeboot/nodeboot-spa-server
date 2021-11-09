#!/usr/bin/env node
const express = require('express');
const path = require('path');const app = express();
const port = process.env.PORT || 8080 ;
const staticFolderName = process.argv[2];
const processFolderPath = process.cwd();

var settings = {};
for(var key in process.env){
  if(key.startsWith("SPA_VAR")){
    settings[key.replace("SPA_VAR_","")] = process.env[key]
  }
}

app.get('/settings.json', function(req, res) {
  res.json(settings);
});
app.use('/',
  express.static(path.join(processFolderPath, `${staticFolderName}`)),
);
app.listen(port, () => console.log(`spa server listening on port ${port}`));
