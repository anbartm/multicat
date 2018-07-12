# multicat

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
<script src='https://unpkg.com/multicat@0.0.10/build/web.js'></script>

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

## API

### constructor(options: Object)

Set the following keys on the options object, to activate corresponding modules: google_analytics, google_remarketing, mixpanel, hotjar, facebook_pixel, twitter_pixel, pinterest_pixel, reddit_pixel_q, reddit_pixel_s.

### view(pathname: String)

Trigger a Page View event in GA, and a custom `PageView` event elsewhere. Pathname is the URL reported.

Examples:

`multicat.view('/thank_you.html')`

`multicat.view() // will infer pathname from window.location`

### event(name: String, properties: Object)

Trigger a custom event specified by name (i.e.: 'ConversionClick'). Add any metadata you wish to the properties hash.

Example:

`multicat.event('ConversionClick', { buttonColor: 'orange' })`

## Logging

The library will log things to the console when in development (`process.env.NODE_ENV === 'development'`). You can also turn on logging by setting `window.MULTICAT_LOGGING` to `true`.

## Landen.io

Drop in version for Landen: [https://github.com/cofablab/multicat-landen](https://github.com/cofablab/multicat-landen)

## React

Context provider for React: [https://github.com/cofablab/multicat-react](https://github.com/cofablab/multicat-react)

## License

MIT © [Cofab](https://github.com/cofablab)
