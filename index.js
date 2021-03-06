/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-holy-futuristic-template-namespacing-batman',

  setupPreprocessorRegistry(type, registry) {
    registry.add("htmlbars-ast-plugin", {
      name: "holy-futuristic-template-namespacing-batman",
      plugin: require("./lib/namespacing-transform"),
      baseDir() {
        return __dirname;
      }
    });
  }
};
