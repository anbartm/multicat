Multicat Landen integration
==============================

[![npm](https://img.shields.io/npm/v/multicat-landen.svg)](https://www.npmjs.com/package/multicat-landen) ![license](https://img.shields.io/npm/l/multicat-landen.svg) 

Append this script tag and piece of code before you close the `<body>` tag

```
<script src='https://unpkg.com/multicat-landen@0.0.15/build/index.js' async></script>
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

[Check the example](https://github.com/cofablab/multicat/blob/master/packages/multicat-landen/example/index.html#L437) for reference.

## Landen Events 🎭

Check out the [Multicat Landen tracking plan](https://github.com/cofablab/multicat/blob/master/packages/multicat-landen/TRACKING_PLAN.md), to see which kinds of conversion events are supported out of the box.

## Custom events api 🛂

If you wish to implement additional conversion events yourself, use the window.multicat instance to dispatch events and pageviews, like so:

```
window.multicat && window.multicat.event(
  'CustomConversionEvent', // event
  { progress: '95%' }      // properties
})
```

## License & Contributors

MIT © [Cofab](https://cofablab.com>)

- [Contributors](https://github.com/cofablab/multicat/graphs/contributors)
