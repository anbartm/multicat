# Multiplytix React

[![NPM](https://img.shields.io/npm/v/multiplytix-react.svg)](https://www.npmjs.com/package/multiplytix-react)

# 🚧 WIP 🏗 UNDER CONSTRUCTION 🚧

> React context provider for [Multiplytix](https://github.com/cofablab/multiplytix), the unified analytics API.

- Mixpanel
- Google Analytics
- Google Remarketing Tag
- Facebook pixel
- Reddit pixel
- Twitter pixel
- Hotjar


## Install

```bash
npm install --save multiplytix multiplytix-react
```

or

```bash
yarn add multiplytix multiplytix-react
```

## Usage

Wrap your App in a `Provider`, and receive `multiplytixEvent` or `multiplytixView` as props with the help of `withMultiplytix` wrapper, or receive them from the context through `contextTypes`.

Check the [example project](https://github.com/cofablab/multiplytix-react/tree/master/example) in this repository.

- In [index.js](https://github.com/cofablab/multiplytix-react/blob/master/example/src/index.js) we import a `Provider` from `multiplytix`, give it a configuration, and have it wrap the `<App>` component.
- In [App.js](https://github.com/cofablab/multiplytix-react/blob/master/example/src/App.js) we obtain `multiplytixView` and `multiplytixEvent` from the provided `context`.
- In [Cart.js](https://github.com/cofablab/multiplytix-react/blob/master/example/src/Cart.js) we obtain `multiplytixEvent`  from `props` with the help of `withMultiplytix` consumer.

### Upcoming API changes

#### ❓📦🤷‍♀️

We're exploring how to implement the context provider [with the new React Context API](https://reactjs.org/docs/context.html). Please check the [draft proposal](https://github.com/cofablab/multiplytix-react/blob/master/API_PROPOSAL.md) and state your preferences in the [issues section](https://github.com/cofablab/multiplytix-react/issues). Thank you.

## License

MIT © [Cofab](https://github.com/cofablab)
