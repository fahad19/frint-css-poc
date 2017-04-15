var yaml = require('js-yaml');
var fs = require('fs');
var _ = require('lodash');

var THEME_NAME = process.env.THEME_NAME || 'blue';

var themeContent = fs.readFileSync(__dirname + '/../../themes/' + THEME_NAME + '.yml');
var theme = yaml.safeLoad(themeContent);

var writeLines = [];
_.each(theme, function (value, key) {
  writeLines.push('@value ' + key + ': ' + value + ';');
});
writeLines.push('');

var writeContent = writeLines.join('\n');
fs.writeFileSync(__dirname + '/../variables.css', writeContent);

console.log('variables.css updated');
