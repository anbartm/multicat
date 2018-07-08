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
    const { id, src, className, innerText } = currentTarget
    window.multiplytix.event({
      type: 'LandenAnchorClick',
      properties: {
        id, src, className, innerText
      }
    })
  }

  addClickListeners() {
    const anchors = document.getElementByTagName('A')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })
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

export default MultiplytixLanden
