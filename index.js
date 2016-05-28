var postcss = require('postcss');
var assign = require('object-assign');

module.exports = postcss.plugin('postcss-increase-text-size', function (opts) {
	opts = assign({
		cssPlainText: '',
		cssFilePath: ''
	}, opts);
	
	return function(css){
		if (opts.cssPlainText != '') {
			var prependCSS = postcss.parse(opts.cssPlainText)
			css.prepend(prependCSS)
		}
		
		if (opts.cssFilePath != '') {
			var prependCSS = postcss.parse(opts.cssFilePath)
			css.prepend(prependCSS)
		}
	}
});