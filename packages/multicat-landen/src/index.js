import Multicat from 'multicat'

class MulticatLanden {

  addMailChimpListeners() {
    // TODO
  }

  addScrollListeners() {
    // TODO
  }

  handleFirstView() {
    const { pathname } = window.location
    window.multicat.view(pathname)
  }

  handleAnchorClick = (e) => {
    const { currentTarget } = e
    const { id, href, className, innerText } = currentTarget
    window.multicat.event(
      'LandenAnchorClick',
      { id, href, className, innerText }
    )
  }

  addClickListeners() {
    const anchors = document.getElementsByTagName('A')
    for (let a of anchors) {
      a.addEventListener('click', this.handleAnchorClick)
    }
  }

  addEventListeners() {
    this.addClickListeners()
    this.addMailChimpListeners()
    this.addScrollListeners()
  }

  constructor(config) {
    window.multicat = new Multicat(config)
    this.addEventListeners()
    this.handleFirstView()
  }

}

window.MulticatLanden = MulticatLanden

export default MulticatLanden
