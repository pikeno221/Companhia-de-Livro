const Rebase = require('re-base')
const firebase = require('firebase')

var firebaseConfig = {
  apiKey: "AIzaSyAPOMz1FlDIb4p321vptXy7MRpuZVC_q3c",
  authDomain: "gabs-company-portifolio.firebaseapp.com",
  databaseURL: "https://gabs-company-portifolio.firebaseio.com",
  projectId: "gabs-company-portifolio",
  storageBucket: "gabs-company-portifolio.appspot.com",
  messagingSenderId: "432123121486",
  appId: "1:432123121486:web:679f716da6fe5625"
};


const app = firebase.initializeApp(firebaseConfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage();

export default config
