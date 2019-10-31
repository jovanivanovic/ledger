import Block from './block.mjs';
import sha256 from 'js-sha256';
import msgpack from 'msgpack5';

class Blockchain {
    constructor() {
        this.chain = [];
    }

    genesis() {
        // let block = new Block(1, Date.now(), msgpack().encode({ genesis: true }), "0000000000000000000000000000000000000000000000000000000000000000");
        let block = new Block(1, Date.now(), { genesis: true }, "0000000000000000000000000000000000000000000000000000000000000000");
        this.chain.push(block);
        
        return block;
    }

    push(data) {
        let index = this.chain[this.chain.length - 1].index + 1;
        let timestamp = Date.now();
        let previousHash = this.chain[this.chain.length - 1].hash;

        // let block = new Block(index, timestamp, msgpack().encode(data), previousHash);
        let block = new Block(index, timestamp, data, previousHash);
        this.chain.push(block);

        return block;
    }

    get(hash) {
        return this.chain.find((x) => {
            return x.hash == hash;
        })
    }

    verify() {
        let faultBlock = null;
        let BreakException = {};

        try {
            this.chain.forEach((block, index) => {
                let hash = block.hash;
                let rehash = sha256(block.index + block.timestamp + block.data + block.previousHash);
    
                if (hash != rehash) {
                    faultBlock = block;
                    throw BreakException;
                }
            })
        } catch(e) {
            console.log(e);
        }

        return faultBlock != null ? faultBlock : true;
    }
}

export default Blockchain;