# Multicat React integration

[![npm](https://img.shields.io/npm/v/multicat-react.svg)](https://www.npmjs.com/package/multicat-react) ![license](https://img.shields.io/npm/l/multicat-react.svg) 

> React context provider for [Multicat](https://github.com/cofablab/multicat), the unified analytics API.

![nodei.co](https://nodei.co/npm/multicat-react.png?downloads=true&downloadRank=true&stars=true)

# 🚧 WIP 🏗 UNDER CONSTRUCTION 🚧

Providers:

- Mixpanel
- Google Analytics
- Google Remarketing Tag
- Facebook pixel
- Reddit pixel
- Twitter pixel
- Hotjar

## Install

```bash
npm install --save multicat-react
```

or

```bash
yarn add multicat-react
```

## Usage

Wrap your App in a `Provider`, and receive `multicatEvent` or `multicatView` as props with the help of `withMulticat` wrapper, or receive them from the context through `contextTypes`.

Check the [example project](https://github.com/cofablab/multicat/blob/master/packages/multicat-react/example) in this package.

- In [multicat.config.js](https://github.com/cofablab/multicat/blob/master/packages/multicat-react/example/src/multicat.config.js) we read the values from the process environment. Set these at deploy time, or overwrite here.
- In [index.js](https://github.com/cofablab/multicat/blob/master/packages/multicat-react/example/src/index.js) we import a `Provider` from `multicat`, give it a configuration, and have it wrap the `<App>` component.
- In [App.js](https://github.com/cofablab/multicat/blob/master/packages/multicat-react/example/src/App.js) we obtain `multicatView` and `multicatEvent` from the provided `context`.
- In [Cart.js](https://github.com/cofablab/multicat/blob/master/packages/multicat-react/example/src/Cart.js) we obtain `multicatEvent`  from `props` with the help of `withMulticat` consumer.

### Upcoming API changes

#### ❓📦🤷‍♀️

We're exploring how to implement the context provider [with the new React Context API](https://reactjs.org/docs/context.html). Please check the [draft proposal](https://github.com/cofablab/multicat/blob/master/packages/multicat-react/API_PROPOSAL.md) and state your preferences in the [issues section](https://github.com/cofablab/multicat/issues). Thank you.

## License & Contributors

MIT © [Cofab](https://cofablab.com>)

- [Contributors](https://github.com/cofablab/multicat/graphs/contributors)
