[![Build Status](https://travis-ci.org/admdh/postcss-inject.svg?branch=master)](https://travis-ci.org/admdh/postcss-inject)
# PostCSS Inject
<img align="right" width="57" height="108" title="Dev Kit Main Logo" src="http://adm-designhouse.com/dev-kit-logo.png">

<img align="right" width="108" height="108" title="Philosopher’s stone, logo of PostCSS" src="http://postcss.github.io/postcss/logo.svg" hspace="20">
PostCSS Inject is PostCSS plugin that can inject one css file to another.

## Why?
Let's say there are some css variables that are required in few separet css files which don't import each other so they can not inherit variables. To make variables work across all css files you need to:
- import all css files into each other
- import variables in each css file where variables required

## Basic Usage
```js
postcss([
	require('postcss-inject')({
		cssFilePath: 'path/to/file/'
	})
]);

```

variables.css:
```css
:root {
	--primary-color: green;
	--scondary-color: blue;
}
```

input.css:
```css
a {
	color: var(--primary-color);
}

a:hover {
	color: var(--secondary-color);
}
```

output.css:
```css
:root {
	--primary-color: green;
	--scondary-color: blue;
}

a {
	color: var(--primary-color);
}

a:hover {
	color: var(--secondary-color);
}
```

## Options
| Name                              | Description    |
|:----------------------------------|:---------------|
| `injectTo`                  	 	| Use ```fileStart``` to inject at the begining of file |
| `cssPlainText`                    | Plain CSS for example ```/* My CSS File */``` |
| `cssFilePath`                     | Path to css file |