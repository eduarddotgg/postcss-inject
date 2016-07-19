var postcss = require('postcss');
var assign = require('object-assign');
var fs = require('fs');

module.exports = postcss.plugin('postcss-inject', function (opts) {
	opts = assign({
		injectTo: '',
		cssPlainText: '',
		cssFilePath: ''
	}, opts);

	return function (css) {
		if (opts.cssPlainText !== '') {
			var cssPlainText = postcss.parse(opts.cssPlainText);
			if (opts.injectTo === 'fileStart') {
				css.prepend(cssPlainText);
			} else {
				css.append(cssPlainText);
			}
		}

		if (opts.cssFilePath !== '') {
			return new Promise(function (resolve, reject) {
				fs.readFile(opts.cssFilePath, function (err, readCssFile) {
					if ( err ) {
						return reject(err);
					}
					var cssFilePath = postcss.parse(readCssFile);
					if (opts.injectTo === 'fileStart') {
						css.prepend(cssFilePath);
					} else {
						css.append(cssFilePath);
					}
					resolve();
				});
			});
		}
	};
});
