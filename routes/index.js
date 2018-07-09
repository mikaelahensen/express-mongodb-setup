module.exports = function(app, dbs) {

  app.get('/puppies', (req, res) => {
    dbs.sandbox.collection('puppies').find({"size": "big"}).toArray((err, docs) => {
      if (err) {
        console.log(err)
        res.error(err)
      } else {
        res.json(docs)
      }
    })
  })

  return app
}
