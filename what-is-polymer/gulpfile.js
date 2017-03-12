'use strict';

let gulp = require('gulp');
let swPrecache = require('sw-precache');

gulp.task('default', () => {
  let path = require('path');
  let rootDir = path.join('deploy-temp', 'presentation');
  let config = {
    cacheId: 'timvdlippe-presentation',
    staticFileGlobs: [
      `index.html`,
    ],
    runtimeCaching: [
    {
      urlPattern: /\/bower_components\//,
      handler: 'fastest'
    },
    {
      urlPattern: /.*fonts\.googleapis\.com.*/,
      handler: 'fastest'
    },
    {
      urlPattern: /.*googleusercontent\.com.*/,
      handler: 'fastest'
    },
    {
      urlPattern: /.*webcomponents\.org.*/,
      handler: 'fastest'
    },
    {
      urlPattern: /.*images\/*\//,
      handler: 'fastest',
    }],
    verbose: false  /* When debugging, you can enable this to true  */
  };
  return swPrecache.write(path.join(rootDir, 'service-worker.js'), config);
});
