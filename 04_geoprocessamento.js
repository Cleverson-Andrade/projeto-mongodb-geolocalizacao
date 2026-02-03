import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

// Pipeline de Agregação para Busca Geoespacial | Aggregation Pipeline for Geospatial Search
const agg = [
  {
    // $geoNear deve ser o primeiro estágio do pipeline | $geoNear must be the first stage in the pipeline
    '$geoNear': {
      'near': {
        'type': 'Point', 
        'coordinates': [
          -54.577546, -20.388008 // Longitude, Latitude (Campo Grande/MS)
        ]
      }, 
      'distanceField': 'distancia.calculada', // Campo que armazenará a distância | Field to store the distance
      'spherical': true // Cálculo baseado em esfera (necessário para coordenadas 2dsphere) | Spherical calculation
    }
  }, {
    // Limita aos 4 resultados mais próximos | Limit to the 4 nearest results
    '$limit': 4
  }
];

// Configuração da Conexão | Connection Setup
const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);

// Seleção do Banco e Coleção | Database and Collection Selection
const coll = client.db('meubanco').collection('inscricoes');

// Execução da Agregação | Execution of the Aggregation
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();

// Exibição dos resultados e fechamento da conexão | Display results and close connection
console.log(JSON.stringify(result, null, 2));
await client.close();
