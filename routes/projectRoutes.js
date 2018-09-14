const mongoose = require('mongoose')
const axios= require('axios')
//curl -v -H "Authorization: Basic `echo -n 9750260a-bdf6-4497-ad26-899f66652f88: | base64`" https://api.insight.ly/v2.2/opportunities//

const base64Key = Buffer.from('9750260a-bdf6-4497-ad26-899f66652f88').toString('base64')
const Project = mongoose.model('projects')

module.exports = app =>{
  app.get('/api/projects', (req, res) => {
    console.log(Buffer.from('9750260a-bdf6-4497-ad26-899f66652f88').toString('base64'))
    axios.get('https://api.insight.ly/v2.2/opportunities', { headers: { Authorization: 'Basic' + base64Key + ':' }})
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res)

    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })

  })
}
