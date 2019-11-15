# count-down

[![Build Status](https://badgen.net/travis/FEMessage/count-down/master)](https://travis-ci.com/FEMessage/count-down)
[![NPM Download](https://badgen.net/npm/dm/@femessage/count-down)](https://www.npmjs.com/package/@femessage/count-down)
[![NPM Version](https://badgen.net/npm/v/@femessage/count-down)](https://www.npmjs.com/package/@femessage/count-down)
[![NPM License](https://badgen.net/npm/license/@femessage/count-down)](https://github.com/FEMessage/count-down/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/count-down/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

极易使用的倒计时组件 😃

![示例](https://i.loli.net/2019/11/15/khawbTnFuvHOd7N.gif)

## Table of Contents

* [Introduction](#introduction)
  * [Use requestAnimationFrame](#use-requestanimationframe)
  * [支持毫秒级计时](#支持毫秒级计时)
  * [智能的默认 format](#智能的默认-format)
* [Links](#links)
* [Install](#install)
* [Inspiration](#inspiration)
* [Contributing](#contributing)
* [Contributors](#contributors)
* [License](#license)

## Introduction

### Use requestAnimationFrame

count-down 内部使用 requestAnimationFrame 计时，无论是浏览器进程任务繁忙亦或是页面在后台被挂起过，count-down 都依然能保持精确。

### 支持毫秒级计时

通过 slot 支持

### 智能的默认 format

默认 format 会根据传入的 days, hours, minutes, seconds 动态调整。比如传入 hours=1 时，默认 format 就是 `hh 时 mm 分 ss 秒`

[⬆ Back to Top](#table-of-contents)

## Links

* [API 文档](https://femessage.github.io/count-down/)

[⬆ Back to Top](#table-of-contents)

## Install

```sh
yarn add @femessage/count-down
```

[⬆ Back to Top](#table-of-contents)

## Inspiration

api 设计和实现参考了

* [taro-ui](https://taro-ui.aotu.io/#/docs/countdown)
* [vant](https://youzan.github.io/vant/#/zh-CN/count-down)

[⬆ Back to Top](#table-of-contents)

## Contributing

For those who are interested in contributing to this project, such as:

* report a bug
* request new feature
* fix a bug
* implement a new feature

Please refer to our [contributing guide](https://github.com/FEMessage/.github/blob/master/CONTRIBUTING.md).

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<table><tr><td align="center"><a href="https://donaldshen.github.io/portfolio"><img src="https://avatars3.githubusercontent.com/u/19591950?v=4" width="100px;" alt="Donald Shen"/><br /><sub><b>Donald Shen</b></sub></a><br /><a href="https://github.com/FEMessage/count-down/commits?author=donaldshen" title="Code">💻</a> <a href="https://github.com/FEMessage/count-down/commits?author=donaldshen" title="Documentation">📖</a> <a href="https://github.com/FEMessage/count-down/commits?author=donaldshen" title="Tests">⚠️</a></td></tr></table>

<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
