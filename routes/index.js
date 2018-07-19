module.exports = function(app, dbs) {
  // get all puppies
  app.get('/puppies',(req, res) => {
    dbs.sandbox.collection('puppies').find({}).toArray((err, docs) => {
      if (err) {
        console.log(err)
        res.error(err)
      } else {
        res.json(docs)
      }
    });
  });

  // get one puppy

  // post to add puppy or update puppy 
  app.post('/add/puppy',(req,res) => {
    const puppy = req.body;
    const puppyType = puppy.type;
    const puppySize = puppy.size.toLowerCase(); 

    dbs.sandbox.collection('puppies').update( {type: puppyType},{$set: {size : puppySize}}, { upsert : true });
    res.status(200).send('puppy saved or updated');
  });
  return app;
}
