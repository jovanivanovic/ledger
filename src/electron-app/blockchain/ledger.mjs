import Blockchain from './blockchain.mjs';
import mongo from 'mongodb';

class Ledger {
    constructor(mongodbURL) {
        this.mongo = {
            url: mongodbURL
        };

        this.queue = [];
        this.blockchain = new Blockchain();
        this.initialized = false;
    }

    initialize(pushCallback = null, verifyCallback = null) {
        let mongoLoaded = false;

        mongo.connect(this.mongo.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, client) => {
            if (err) throw err;

            this.mongo.database = client.db('ledger');
            this.mongo.collection = this.mongo.database.collection('ledger');

            this.mongo.collection.count((err, count) => {
                if (!err && count < 1) {
                    let genesis = this.blockchain.genesis();

                    this.mongo.collection.insertOne({
                        index: genesis.index,
                        timestamp: genesis.timestamp,
                        hash: genesis.hash,
                        previousHash: genesis.previousHash,
                        data: genesis.data
                    });

                    pushCallback(genesis);
                } else {
                    this.mongo.collection.find().toArray((err, items) => {
                        this.blockchain.chain = items;

                        items.forEach((item, index) => {
                            pushCallback(item);
                        });
                    });
                }

                mongoLoaded = true;
                this.initialized = true;
            });
        });

        this.producerInterval = setInterval(() => {
            if (mongoLoaded) {
                if (this.queue.length < 1) {
                    this.pushToBlockchain(null, pushCallback);
                } else {
                    this.queue.forEach((data, index) => {
                        console.log(data);
                        this.pushToBlockchain(data, pushCallback);
                    });
    
                    this.queue = [];
                }
            }
        }, 500);

        this.verificationInterval = setInterval(() => {
            this.mongo.collection.find().toArray((err, items) => {
                this.blockchain.chain = items;
                verifyCallback(this.blockchain.verify());
            });
        }, 3 * 60 * 1000);
    }

    push(data) {
        if (this.initialized) {
            this.queue.push(data);
        }
    }

    pushToBlockchain(data, callback) {
        let block = this.blockchain.push(data);

        this.mongo.collection.insertOne({
            index: block.index,
            timestamp: block.timestamp,
            hash: block.hash,
            previousHash: block.previousHash,
            data: block.data
        });
        
        callback(block);
    }
}

export default Ledger;