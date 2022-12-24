# 概要

1つのソースコードで Vue 2 と Vue 3 の両方の環境で動作する UI ライブラリのテスト環境構築

# UI ライブラリ

## Vue 2

```bash
# Unit test, Component Test
$ npm -w @packages/ui run test:2

# Cypress Component Testing
$ npm -w @packages/ui run cy:run:2

# Build
$ npm -w @packages/ui run build:2
```

## Vue 3

```bash
# Unit test, Component Test
$ npm -w @packages/ui run test:3

# Cypress Component Testing
$ npm -w @packages/ui run cy:run:3

# Build
$ npm -w @packages/ui run build:3
```

# アプリケーション

## Vue 2

```bash
# Dev
$ npm run dev:vue2

# Build
$ npm run build:vue2
```

## Vue 3

```bash
# Dev
$ npm run dev:vue3

# Build
$ npm run build:vue3
```