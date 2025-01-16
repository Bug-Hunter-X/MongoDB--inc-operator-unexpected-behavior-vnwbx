```javascript
//Correct usage of $inc operator
db.collection('myCollection').findOne({"_id":ObjectId("someId")}, (err,doc)=>{if(err) throw err;if(doc && typeof doc.field === 'number'){db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});}else{console.error("Field is not numeric or does not exist");}});
```