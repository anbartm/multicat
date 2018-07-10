import Multiplytix from 'multiplytix'

class MultiplytixLanden {

  addMailChimpListeners() {
    // TODO
  }

  addScrollListeners() {
    // TODO
  }

  handleAnchorClick = (e) => {
    const { currentTarget } = e
    const { id, href, className, innerText } = currentTarget
    window.multiplytix.event(
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
    window.multiplytix = new Multiplytix(config)
    this.addEventListeners()
  }

}

window.MultiplytixLanden = MultiplytixLanden

export default MultiplytixLanden
