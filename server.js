const port = 8080
const express = require('express')
const path = require('path')
const app = express()
app.use(
  express.static(__dirname)
);
app.get('/sse-server', function(req, res) {
  res.status(200).set({
    "connection": "keep-alive",
    "cache-control": "no-cache",
    "content-type": "text/event-stream"
  })
  setInterval(() => {
    console.log('OK')
    res.write('data:Hello World! ' + new Date().toISOString() + '\n\n')
  }, 3000)
});
app.listen(port)
