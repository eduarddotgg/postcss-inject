var postcss = require('postcss');
var assign = require('object-assign');

module.exports = postcss.plugin('postcss-increase-text-size', function (opts) {
	opts = assign({
		cssPlainText: '',
		cssFilePath: ''
	}, opts);
	
	return function(css){
		if (opts.cssPlainText != '') {
			css.prepend(opts.cssPlainText)
		}
		
		if (opts.cssFilePath != '') {
			var prependCSS = postcss.parse(opts.inputSource)
			css.prepend(prependCSS)
		}
	}
});