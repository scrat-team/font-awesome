'use strict';

var path = require('path');

module.exports = {
  orgiRepo: 'FortAwesome/Font-Awesome',
  ref: 'v4.1.0',
  target: path.resolve(__dirname, '..'),
  name: 'font-awesome',
  repo: 'scrat-team/font-awesome',
  description: 'a scrat-installable fork of FortAwesome/Font-Awesome',
  main: {
    'css/font-awesome.css': 'css/font-awesome.css'
  },
  fonts: {
    'fonts/fontawesome-webfont.eot': 'fonts/fontawesome-webfont.eot',
    'fonts/fontawesome-webfont.svg': 'fonts/fontawesome-webfont.svg',
    'fonts/fontawesome-webfont.ttf': 'fonts/fontawesome-webfont.ttf',
    'fonts/fontawesome-webfont.woff': 'fonts/fontawesome-webfont.woff',
    'fonts/FontAwesome.otf': 'fonts/FontAwesome.otf'
  }
};