const { parentPort, workerData } = require('worker_threads')
const fetch = require('node-fetch')

parentPort.on('message', (url) => {
  fetch(url)
    .then((response) => response.buffer())
    .then((blob) => parentPort.postMessage(blob))
})
