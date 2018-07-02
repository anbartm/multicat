class Pinterest {

  view() {
    window.pintrk && window.pintrk('page')
  }
  
  constructor(id) {
    pinterestInit(id)
  }
}

export default Pinterest

/* eslint-disable */
function pinterestInit(tag_id) {
  const pin = function(e) {
    if (!window.pintrk) {
      window.pintrk = function() {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments))
      }
      var n = window.pintrk
      n.queue = []
      n.version = '3.0'
      var t = document.createElement('script')
      t.async = true
      t.src = e
      var r = document.getElementsByTagName('script')[0]
      r.parentNode.insertBefore(t, r)
    }
  }

  pin('https://s.pinimg.com/ct/core.js')

  window.pintrk('load', tag_id)
}
/* eslint-enable */
