const key = require('../config/keys');
const Insightly = require('../services/exampleInsightly')(key.insightlyKey);

  module.exports =  (app) =>{
    //get all opportunities
    app.get('/api/:key/projects', (req,res) => {
      console.log(res.data)


      });
      // get all contacts
      app.get('/api/:key/contacts/', function (req, res) {
        Insightly.getContactList(req.params.key, function(err, data) {
          if (err && err.statusCode !== 200) {
            return res.sendStatus(err.statusCode);

          } else {

            return res.json(data);
          }
        });
      });

      // create a contact
      app.post('/api/:key/contacts/', function (req, res) {
          Insightly.createContact(req.params.key, req.body, function(err, data) {
            if (err && err.statusCode !== 200) {
              return res.sendStatus(err.statusCode);

            } else {
              return res.json(data);
            }
          });
      });
  };
