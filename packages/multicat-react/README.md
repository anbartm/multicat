# Multicat React

[![NPM](https://img.shields.io/npm/v/multicat-react.svg)](https://www.npmjs.com/package/multicat-react)

# 🚧 WIP 🏗 UNDER CONSTRUCTION 🚧

> React context provider for [Multicat](https://github.com/cofablab/multicat), the unified analytics API.

- Mixpanel
- Google Analytics
- Google Remarketing Tag
- Facebook pixel
- Reddit pixel
- Twitter pixel
- Hotjar


## Install

```bash
npm install --save multicat multicat-react
```

or

```bash
yarn add multicat multicat-react
```

## Usage

Wrap your App in a `Provider`, and receive `multicatEvent` or `multicatView` as props with the help of `withMulticat` wrapper, or receive them from the context through `contextTypes`.

Check the [example project](https://github.com/cofablab/multicat-react/tree/master/example) in this repository.

- In [index.js](https://github.com/cofablab/multicat-react/blob/master/example/src/index.js) we import a `Provider` from `multicat`, give it a configuration, and have it wrap the `<App>` component.
- In [App.js](https://github.com/cofablab/multicat-react/blob/master/example/src/App.js) we obtain `multicatView` and `multicatEvent` from the provided `context`.
- In [Cart.js](https://github.com/cofablab/multicat-react/blob/master/example/src/Cart.js) we obtain `multicatEvent`  from `props` with the help of `withMulticat` consumer.

### Upcoming API changes

#### ❓📦🤷‍♀️

We're exploring how to implement the context provider [with the new React Context API](https://reactjs.org/docs/context.html). Please check the [draft proposal](https://github.com/cofablab/multicat-react/blob/master/API_PROPOSAL.md) and state your preferences in the [issues section](https://github.com/cofablab/multicat-react/issues). Thank you.

## License

MIT © [Cofab](https://github.com/cofablab)
