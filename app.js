var fs = require('fs');
var jsdom = require('jsdom');
var JSDOM = jsdom.JSDOM;
var html = fs.readFileSync('file.html', 'utf8');
var dom = new JSDOM(html);
var $ = require('jquery')(dom.window);
var _ = require('lodash');

_.each($.find('tag[id^="startsWith"]'), (item, i) => {
	console.log(`[${(i + 1)}] - ${_.capitalize($(item).attr('id').replace('--', ' ').replace('-', ' '))}`);
});
