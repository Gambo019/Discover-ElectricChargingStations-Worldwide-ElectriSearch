////////////////////////////////
// Database Connection MongoDb
////////////////////////////////
import { MongoClient, ServerApiVersion } from 'mongodb';

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function connectToDatabase() {
    try {
        // Connect client to the server
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You have successfully connected to MongoDb!');
    } catch (err) {
        console.log(`Error connecting to MongoDb: ${err}`);
    }
}

connectToDatabase();

let db = client.db('psm');

export default db;