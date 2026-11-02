## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

BUILD_DIR := docs

.PHONY: help install dev clean build deploy

## install - install dependency packages
install:
	npm ci

## dev - start the Next.js development server
dev: install
	npm run dev

## clean - remove generated static files
clean:
	rm -rf $(BUILD_DIR)/

## build - build static GitHub Pages output
build: clean install
	npm run build
	cp CNAME $(BUILD_DIR)/
	touch $(BUILD_DIR)/.nojekyll

## deploy - explain the reviewed GitHub Pages deployment flow
deploy:
	@echo "Open a PR to master. After review and merge, GitHub Actions builds and deploys the site."
	@echo "Use make build for a local static export; this target never pushes Git."
