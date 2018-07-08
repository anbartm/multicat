Multiplytix Landen integration
==============================

Append this script tag and piece of code before you close the `<body>` tag

```
<script src='https://unpkg.com/multiplytix-landen@0.0.1/build/index.js' async></script>
<script>
  function initMultiplytix() {
    new window.MultiplytixLanden({
      google_analytics: <GOOGLE_ID>,
      facebook_pixel: <FACEBOOK_PIXEL_ID>,
      mixpanel: <MIXPANEL_ID>,
    })
  }
  window.addEventListener('load', initMultiplytix)
</script>
```

You're done 🎉

## Landen Events 🎭

Check out the [Multiplytix Landen tracking plan](https://github.com/cofablab/multiplytix-landen/TRACKING_PLAN.md), to see which kinds of conversion events are supported out of the box.

## Custom events api 🛂

If you wish to implement additional conversion events yourself, use the window.multiplytix instance to dispatch events and pageviews, like so:

```
window.multiplytix && window.multiplytix.event({
  type: 'CustomConversionEvent',
  properties: {
    progress: '95%',
  }
})
```

## License

MIT, (c) Cofab 2018
