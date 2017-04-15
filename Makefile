THEME_NAME := "blue"

bundle-frint-react-styles:
	./node_modules/.bin/webpack --config ./frint-react-styles/webpack.config.js

bundle-css-framework:
	THEME_NAME=$(THEME_NAME) node ./css-framework/bin/apply-theme-variables.js
	./node_modules/.bin/webpack --config ./css-framework/webpack.config.js

bundle-ui-kit:
	./node_modules/.bin/webpack --config ./ui-kit/webpack.config.js

bundle:
	make bundle-css-framework
	make bundle-frint-react-styles
	make bundle-ui-kit
