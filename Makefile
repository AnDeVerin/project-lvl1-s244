install:
	npm install

start:
	npm run babel-node -- src/bin/calc-games.js

publish:
	npm publish

lint:
	npm run eslint .