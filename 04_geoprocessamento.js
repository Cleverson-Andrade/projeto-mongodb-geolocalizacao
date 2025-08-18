import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$geoNear': {
      'near': {
        'type': 'Point', 
        'coordinates': [
          -54.577546, -20.388008
        ]
      }, 
      'distanceField': 'distancia.calculada', 
      'spherical': true
    }
  }, {
    '$limit': 4
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('meubanco').collection('inscricoes');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();