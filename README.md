# Multicat

[![NPM](https://img.shields.io/npm/v/multicat.svg)](https://www.npmjs.com/package/multicat)

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


## ES6

### Install

```bash
npm install --save multicat
```

or

```bash
yarn add multicat
```

### Usage

```js
import Multicat from 'multicat'

const multicatConfig = {
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

const multicat = new Multicat(multicatConfig)

multicat.event(`MY_EVENT`, {me: 'ta', da: 'ta'})
multicat.view('/thank-you.html')
```

## Vanilla JavaScript

```js
<!-- Include the script -->
<script src='https://unpkg.com/multicat@0.0.12/build/web.js'></script>

<script>
  // Specify your analytics IDs
  var multicatConfig = {
    google_analytics: 'GOOGLE_ANALYTICS_ID',
    mixpanel: 'MIXPANEL_ID',
    facebook_pixel: 'FACEBOOK_PIXEL_ID'
  }

  // Initialize Multicat
  var multicat = new Multicat(multicatConfig);

  // Run any page view
  multicat.view('/thank-you.html');

  // Attach listeners to things
  var button = document.getElementById('submitButton');
  button.addEventListener('click', function(ev) {
    // Broadcast custom events in response to user actions
    multicat.event(`MY_EVENT`, {me: 'ta', da: 'ta'});
  });
</script>
```

## Landen.io

Drop in version for Landen: [packages/multicat-landen](https://github.com/cofablab/multicat/tree/master/packages/multicat-landen)

## React

Context provider for React: [packages/multicat-react](https://github.com/cofablab/multicat/tree/master/packages/multicat-react)

## API & Logging

See the [packages/multicat/README.md](https://github.com/cofablab/multicat/tree/master/packages/multicat) for more info.

## License

MIT © [Cofab](https://github.com/cofablab)