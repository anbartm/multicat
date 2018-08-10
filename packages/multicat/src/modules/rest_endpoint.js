class RESTEndpoint {

  view(pathname) {
    const { url } = this
    postData(url, { type: 'view', action, ....properties })
  }

  event(action, properties) {
    const { url } = this
    postData(url, { type: 'event', action, ...properties })
  }
  
  constructor(url) {
    this.url = url
  }
  
}

export default RESTEndpoint

const postData = (url = ``, data = {}, options) => {
  // Default fetch API options are marked with *
  const defaults = {
    method: "POST", // *GET, POST, PUT, DELET
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }

  const payload = { ...defaults, options }

  return fetch(url, payload)
    .then(response => response.json()) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error))
}