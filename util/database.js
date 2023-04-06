const mongodb = require('mongodb');
const MongoClient=mongodb.MongoClient;
let _db;
const mongoConnect=(cb)=>{
  MongoClient.connect('mongodb+srv://atikhan:0rsYoszLRAZiJ7O1@cluster0.e91g1kn.mongodb.net/?retryWrites=true&w=majority')
    .then((client) => {
      console.log('Connected');
      _db=client.db()
      cb()

    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
}
const getDb=()=>{
  if(_db){
    return _db
  }
  throw "No database"
}
exports.mongoConnect=mongoConnect
exports.getDb=getDb
