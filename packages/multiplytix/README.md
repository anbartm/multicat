# multiplytix

[![NPM](https://img.shields.io/npm/v/multiplytix.svg)](https://www.npmjs.com/package/multiplytix)

> A Unified analytics API

Providers:

- Mixpanel
- Google Analytics
- Google Remarketing Tag
- Facebook pixel
- Reddit pixel
- Twitter pixel
- Hotjar

Features:

- Unified API
- Landen.io Integration
- React context provider


## Install

```bash
npm install --save multiplytix
```

or

```bash
yarn add multiplytix
```

## Usage

### Vanilla

```js
const multiplytixConfig = {
  google_analytics: <GOOGLE_ANALYTICS_ID>,
  google_remarketing: <GOOGLE_REMARKETING_TAG>,
  mixpanel: <MIXPANEL_ID>,
  hotjar: <HOTJAR_ID>,
  facebook_pixel: <FACEBOOK_PIXEL_ID>,
  twitter_pixel: <TWITTER_ID>,
  pinterest_pixel: <PINTEREST_ID>,
  reddit_pixel_q: <REDDIT_PIXEL_Q>,
  reddit_pixel_s: <REDDIT_PIXEL_S>,
}

const multiplytix = new Multiplytix(multiplytixConfig)

multiplytix.event(`MY_EVENT`, {me: 'ta', da: 'ta'})
multiplytix.view('/thank-you.html')
```


### Landen.io

Drop in version for Landen: [https://github.com/cofablab/multiplytix-landen](https://github.com/cofablab/multiplytix-landen)

### React

Context provider for React: [https://github.com/cofablab/multiplytix-react](https://github.com/cofablab/multiplytix-react)

## License

MIT © [Cofab](https://github.com/cofablab)
