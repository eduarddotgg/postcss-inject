var postcss = require('postcss');
var assign = require('object-assign');
var fs = require('fs')

module.exports = postcss.plugin('postcss-inject', function (opts) {
	opts = assign({
		injectMode: '',
		cssPlainText: '',
		cssFilePath: ''
	}, opts);

	return function(css){
		if (opts.cssPlainText != '') {
			var cssContent = postcss.parse(opts.cssPlainText)
			if (opts.InjectMode == 'prepend') {
				css.prepend(cssContent);
			} else {
				css.append(cssContent);
			}
		}

		if (opts.cssFilePath != '') {
			return new Promise(function(resolve, reject) {
				fs.readFile(opts.cssFilePath, function (err, readCssFile) {
					if ( err ) {
						return reject(err)
					}
					var cssContent = postcss.parse(readCssFile)
					if (opts.InjectMode == 'prepend') {
						css.prepend(cssContent);
					} else {
						css.append(cssContent);
					}
					resolve()
				})
			});
		}
	}
});
