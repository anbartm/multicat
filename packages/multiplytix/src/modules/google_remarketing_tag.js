class GoogleRemarketingTag {
  constructor(id) {
    googleRemarketingInit(id)
  }
}

export default GoogleRemarketingTag

/* eslint-disable */
function googleRemarketingInit(google_remarketing_tag) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${google_remarketing_tag}`
  const firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode.insertBefore(script, firstScript)
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', google_remarketing_tag)
}
/* eslint-enable */
