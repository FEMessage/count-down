# count-down

[![Build Status](https://badgen.net/travis/FEMessage/count-down/master)](https://travis-ci.com/FEMessage/count-down)
[![NPM Download](https://badgen.net/npm/dm/@femessage/count-down)](https://www.npmjs.com/package/@femessage/count-down)
[![NPM Version](https://badgen.net/npm/v/@femessage/count-down)](https://www.npmjs.com/package/@femessage/count-down)
[![NPM License](https://badgen.net/npm/license/@femessage/count-down)](https://github.com/FEMessage/count-down/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/count-down/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

A user friendly vue count-down component 😃

![demo](https://cdn.nlark.com/yuque/0/2019/gif/304775/1564112303450-9cbd89cf-c170-4ffe-a905-5890b9948858.gif)

[中文文档](./README-zh.md)

## Table of Contents

- [Introduction](#introduction)
  - [Use requestAnimationFrame](#use-requestanimationframe)
  - [Millisecond](#millisecond)
  - [Smart default format](#smart-default-format)
- [Links](#links)
- [Install](#install)
- [Inspiration](#inspiration)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## Introduction

### Use requestAnimationFrame

The `count-down` use `requestAnimationFrame` inside, so it can handle any browser situation whether is busy or not, and still works.

### Millisecond

Use slot to get milliseconds in countdown

### Smart default format

The default format will adjust by the props which are days, hours, minutes & seconds. e.g., when hours=1, the default format will be `hh 时 mm 分 ss 秒`

[⬆ Back to Top](#table-of-contents)

## Links

- [docs](https://femessage.github.io/count-down/)

[⬆ Back to Top](#table-of-contents)

## Install

```sh
yarn add @femessage/count-down
```

[⬆ Back to Top](#table-of-contents)

## Inspiration

The api & implementation designs are inspired by

- [taro-ui](https://taro-ui.aotu.io/#/docs/countdown)
- [vant](https://youzan.github.io/vant/#/zh-CN/count-down)

[⬆ Back to Top](#table-of-contents)

## Contributing

For those who are interested in contributing to this project, such as:

- report a bug
- request new feature
- fix a bug
- implement a new feature

Please refer to our [contributing guide](https://github.com/FEMessage/.github/blob/master/CONTRIBUTING.md).

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://donaldshen.github.io/portfolio"><img src="https://avatars3.githubusercontent.com/u/19591950?v=4" width="100px;" alt="Donald Shen"/><br /><sub><b>Donald Shen</b></sub></a><br /><a href="https://github.com/FEMessage/count-down/commits?author=donaldshen" title="Code">💻</a> <a href="https://github.com/FEMessage/count-down/commits?author=donaldshen" title="Documentation">📖</a> <a href="https://github.com/FEMessage/count-down/commits?author=donaldshen" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
