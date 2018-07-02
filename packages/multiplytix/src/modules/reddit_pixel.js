class Reddit {
  constructor(q, s) {
    redditPixelInit(q, s)
  }
}

export default Reddit

/* eslint-disable */
function redditPixelInit(reddit_q, reddit_s) {
  const img = new Image()
  img.src = `https://alb.reddit.com/snoo.gif?q=${reddit_q}&s=${reddit_s}`
}
/* eslint-enable */
