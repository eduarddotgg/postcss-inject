import postcss from 'postcss';
import test from 'ava';

import plugin from '../';

function run(t, input, output) {
	return postcss([plugin({
		injectMode: 'prepend',
		cssPlainText: 'a{color: red;}',
		cssFilePath: 'test.css'
	})]).process(input)
		.then(result => {
			t.same(result.css, output);
			t.same(result.warnings().length, 0);
		});
}

test('Font size or line height doesn\'t match', t => {
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
