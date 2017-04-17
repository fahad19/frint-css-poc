THEME_NAME := "blue"

install-css-loader:
	cp css-loader/lib/loader.js node_modules/css-loader/lib/loader.js

install:
	npm install
	make install-css-loader

bundle-frint-react-styles:
	./node_modules/.bin/webpack --config ./frint-react-styles/webpack.config.js

bundle-css-framework:
	THEME_NAME=$(THEME_NAME) node ./css-framework/bin/apply-theme-variables.js
	./node_modules/.bin/webpack --config ./css-framework/webpack.config.js

bundle-ui-kit:
	./node_modules/.bin/webpack --config ./ui-kit/webpack.config.js

bundle-app-root:
	./node_modules/.bin/webpack --config ./app-root/webpack.config.js

bundle-app-child:
	./node_modules/.bin/webpack --config ./app-child/webpack.config.js

bundle:
	make bundle-css-framework
	make bundle-frint-react-styles
	make bundle-ui-kit
	make bundle-app-root
	make bundle-app-child

serve-only:
	(cd ./build && ../node_modules/.bin/live-server)

serve:
	make bundle
	make serve-only
