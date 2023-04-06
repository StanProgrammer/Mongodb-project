const mongoConnect=require('mongodb')
const getDb = require('../util/database').getDb;

class Product{
  constructor(title,price,description,imageUrl) {
    this.title=title,
    this.price=price,
    this.description=description,
    this.imageUrl=imageUrl
  }
  save(){
    const db=getDb()
    return db.collection('products').insertOne(this)
    .then(res=>console.log(res))
    .catch((error)=>{
      console.log(error);
    })

  }
}


module.exports = Product;
