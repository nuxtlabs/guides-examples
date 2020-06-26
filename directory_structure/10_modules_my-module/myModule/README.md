# my-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> My first Module

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `my-module` dependency to your project

```bash
yarn add my-module # or npm install my-module
```

2. Add `my-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'my-module',

    // With options
    ['my-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) debs-obrien

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dt/my-module.svg
[npm-downloads-href]: https://npmjs.com/package/my-module

[github-actions-ci-src]: https://github.com/debs-obrien/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/debs-obrien/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/debs-obrien.svg
[codecov-href]: https://codecov.io/gh/debs-obrien

[license-src]: https://img.shields.io/npm/l/my-module.svg
[license-href]: https://npmjs.com/package/my-module
