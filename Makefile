THEME_NAME := "blue"

build-frint-react-styles:
	./node_modules/.bin/webpack --config ./frint-react-styles/webpack.config.js

serve:
	npm run dist
