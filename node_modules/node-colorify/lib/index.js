var _ = require('underscore');

var ANSI_FCOLORS = {
  'DEFAULT': '\x1b[30m',
  'BLACK': '\x1b[30m',
  'RED': '\x1b[31m',
  'GREEN': '\x1b[32m',
  'YELLOW': '\x1b[33m',
  'BLUE': '\x1b[34m',
  'MAGENTA': '\x1b[35m',
  'CYAN': '\x1b[36m',
  'WHITE': '\x1b[37m'
}

var ANSI_BCOLORS = {
  'DEFAULT': '\x1b[40m',
  'BLACK': '\x1b[40m',
  'RED': '\x1b[41m',
  'GREEN': '\x1b[42m',
  'YELLOW': '\x1b[43m',
  'BLUE': '\x1b[44m',
  'MAGENTA': '\x1b[45m',
  'CYAN': '\x1b[46m',
  'WHITE': '\x1b[47m'
}

var ANSI_FORMATS = {
  'BOLD': '\x1b[1m',
  'LIGHT': '\x1b[2m',
  'ULINE': '\x1b[4m',
  'BLINK': '\x1b[5m',
  'INVERSE': '\x1b[7m',
  'HIDE': '\x1b[8m'
}

var ANSI_CLEAR = '\x1b[0m';

module.exports = {

  colorIt : function(text, colors, callback){
    if(_.isUndefined(callback)){
      callback = colors;
      return callback(text);
    }
    else if(_.isEmpty(colors)){
      return callback(text);
    }
    else {
      var combinedColor = '';
      for(var i in colors){
        if(i == 'fColor'){
          if(_.has(ANSI_FCOLORS, colors[i].toUpperCase())){
            combinedColor += ANSI_FCOLORS[colors[i].toUpperCase()];
          }
        }
        else if(i == 'bColor'){
          if(_.has(ANSI_BCOLORS, colors[i].toUpperCase())){
            combinedColor += ANSI_BCOLORS[colors[i].toUpperCase()];
          }
        }
      }
      return callback(combinedColor + text + ANSI_CLEAR);
    }
  },

  colorItSync : function(text, colors){
    if(_.isUndefined(colors)){
      return text;
    }
    else if(_.isEmpty(colors)){
      return callback(text);
    }
    else {
      var combinedColor = '';
      for(var i in colors){
        if(i == 'fColor'){
          if(_.has(ANSI_FCOLORS, colors[i].toUpperCase())){
            combinedColor += ANSI_FCOLORS[colors[i].toUpperCase()];
          }
        }
        else if(i == 'bColor'){
          if(_.has(ANSI_BCOLORS, colors[i].toUpperCase())){
            combinedColor += ANSI_BCOLORS[colors[i].toUpperCase()];
          }
        }
      }
      return combinedColor + text + ANSI_CLEAR;
    }
  },

  styleIt: function(text, styles, callback){
    if(_.isUndefined(callback)){
      callback = styles;
      return callback(text);
    }
    else if(_.isEmpty(styles)){
      return callback(text);
    }
    else{
      var combinedFormat = '';
      for(var style of styles){
        if(_.has(ANSI_FORMATS, style.toUpperCase())){
          combinedFormat += ANSI_FORMATS[style.toUpperCase()];
        }
      }
      return callback(combinedFormat + text + ANSI_CLEAR);
    }
  },

  styleItSync: function(text, styles){
    if(_.isUndefined(styles)){
      return text;
    }
    else {
      var combinedFormat = '';
      for(var style of styles){
        if(_.has(ANSI_FORMATS, style.toUpperCase())){
          combinedFormat += ANSI_FORMATS[style.toUpperCase()];
        }
      }
      return combinedFormat + text + ANSI_CLEAR;
    }
  }
}
