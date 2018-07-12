class Twitter {
  
  view() {
    window.twq && window.twq('track', 'PageView')
  }

  event(e) {
    window.twq && window.twq('track', e)
  }

  constructor(id) {
    twitterInit(id)
  }

}

export default Twitter

/* eslint-disable */
function twitterInit(twitter_id) {
  !(function(e, t, n, s, u, a) {
    e.twq ||
      ((s = e.twq = function() {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
      }),
      (s.version = '1.1'),
      (s.queue = []),
      (u = t.createElement(n)),
      (u.async = !0),
      (u.src = '//static.ads-twitter.com/uwt.js'),
      (a = t.getElementsByTagName(n)[0]),
      a.parentNode.insertBefore(u, a))
  })(window, document, 'script')

  window.twq('init', twitter_id)
}
/* eslint-enable */
