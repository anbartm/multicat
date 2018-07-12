# Multicat

[![npm](https://img.shields.io/npm/v/multicat.svg)](https://www.npmjs.com/package/multicat) ![license](https://img.shields.io/npm/l/multicat.svg) 

> A Unified analytics API

![nodei.co](https://nodei.co/npm/multicat.png?downloads=true&downloadRank=true&stars=true)

See [Main README.md](https://github.com/cofablab/multicat) for Installation & Usage instructions.

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

## License & Contributors

MIT © [Cofab](https://cofablab.com>)

- [Contributors](https://github.com/cofablab/multicat/graphs/contributors)