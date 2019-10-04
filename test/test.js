const postcss = require('postcss');
const test = require('ava');

const plugin = require('../');

function run(t, input, output) {
	return postcss([plugin({
		injectMode: 'prepend',
		cssPlainText: `
a {
	color: red;
}`,
		cssFilePath: './test/test.css'
	})]).process(input)
		.then(result => {
			console.log(result.css);
			console.log(output);
			t.is(result.css, output);
			t.is(result.warnings().length, 0);
		});
}

test('CSS doesn\'t match', t => {
	return run(
		t,
		`body {
	background: #fff;
}`,
		`body {
	background: #fff;
}
a {
	color: red;
}
.test {
	color: green;
}`
	);
});
