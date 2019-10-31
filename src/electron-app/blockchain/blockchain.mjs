import Block from './block.mjs';
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
}

export default Blockchain;