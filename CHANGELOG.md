# 📑 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v1.3.0] - 2024-12-23

### ✨ Features

- Update collector.js to latest version ([c471309](https://github.com/ausi/respimagelint/tree/c471309612ce71496ab017f0c03eda7f1c953c56))
- Add automated collector script update functionality with new NPM commands and minification support
- Migrate to TypeScript and Vite.js v6 for improved build performance and type safety

### 🔧 Tasks

- Add automated collector.js update checker via GitHub workflow
- Refactor collector script into separate module for cleaner architecture
- Add Husky pre-commit hooks for test execution
- Add Prettier and standardize code formatting
  - Configure import sorting
  - Add eslint-config-prettier integration
  - Format all source files to new standards

## [v1.2.0] - 2024-06-27

### 🔧 Tasks

- Upgrade to latest collector.js from RespImageLint

## [v1.1.0] - 2023-08-05

### ✨ Features

- Allow websites that block iFrames to be linted (Thanks to [@siakaramalegos](https://github.com/siakaramalegos))

### 🔧 Tasks

- Upgrade to latest collector.js from RespImageLint (no modifications needed anymore)

## [v1.0.1] - 2023-04-24

### 🐛 Bug Fixes

- Fix typo in extension description

## [v1.0.0] - 2023-02-14

### ✨ Features

- Published extension in chrome web store

### 📝 Documentation

- Add links to chrome web store
- Add installation instructions for manual installation

## [v0.2.0] - 2023-02-12

### ✨ Features

- Add basic extension functionality

### 🚀 Improved

- Add development scripts and workflow

### 📝 Documentation

- Extend readme by all necessary information

## [v0.1.0] - 2023-02-12

### ✨ Features

- Initialize node package

### 📝 Documentation

- Add license, readme and changelog

[Unreleased]: https://github.com/peter-neumann-dev/responsive-image-linter/compare/v1.3.0...HEAD
[v1.3.0]: https://github.com/peter-neumann-dev/responsive-image-linter/compare/v1.2.0...v1.3.0
[v1.2.0]: https://github.com/peter-neumann-dev/responsive-image-linter/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/peter-neumann-dev/responsive-image-linter/compare/v1.0.1...v1.1.0
[v1.0.1]: https://github.com/peter-neumann-dev/responsive-image-linter/compare/v1.0.0...v1.0.1
[v1.0.0]: https://github.com/peter-neumann-dev/responsive-image-linter/compare/v0.2.0...v1.0.0
[v0.2.0]: https://github.com/peter-neumann-dev/responsive-image-linter/compare/v0.1.0...v0.2.0
[v0.1.0]: https://github.com/peter-neumann-dev/responsive-image-linter/commits/v0.1.0
