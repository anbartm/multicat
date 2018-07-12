Multicat Landen integration
==============================

[![NPM](https://img.shields.io/npm/v/multicat-landen.svg)](https://www.npmjs.com/package/multicat-landen)

Append this script tag and piece of code before you close the `<body>` tag

```
<script src='https://unpkg.com/multicat-landen@0.0.13/build/index.js' async></script>
<script>
  function initMulticat() {
    new MulticatLanden({
      google_analytics: <GOOGLE_ID>,
      facebook_pixel: <FACEBOOK_PIXEL_ID>,
      mixpanel: <MIXPANEL_ID>,
    })
  }
  window.addEventListener('load', initMulticat)
</script>
```

You're done 🎉

[Check the example](https://github.com/cofablab/multicat-landen/blob/master/example/index.html#L436) for reference.

## Landen Events 🎭

Check out the [Multicat Landen tracking plan](https://github.com/cofablab/multicat-landen/blob/master/TRACKING_PLAN.md), to see which kinds of conversion events are supported out of the box.

## Custom events api 🛂

If you wish to implement additional conversion events yourself, use the window.multicat instance to dispatch events and pageviews, like so:

```
window.multicat && window.multicat.event(
  'CustomConversionEvent', // event
  { progress: '95%' }      // properties
})
```

## License

MIT, (c) Cofab 2018
