const mongodb = require('mongodb');
const MongoClient=mongodb.MongoClient
const mongoConnect=(cb)=>{
  MongoClient.connect('mongodb+srv://atikhan:0rsYoszLRAZiJ7O1@cluster0.e91g1kn.mongodb.net/?retryWrites=true&w=majority')
    .then((client) => {
      console.log('Connected');
      cb(client)
    })
    .catch((error) => {
      console.log(error);
    })
}
module.exports=mongoConnect
// const MongoClient=mongodb.MongoClient;
// MongoClient.connect('mongodb+srv://atikhan:0rsYoszLRAZiJ7O1@cluster0.e91g1kn.mongodb.net/?retryWrites=true&w=majority')
// .then(()=>{
//   console.log('Connected');
// })
// .catch((error)=>{
//   console.log(error);
// })