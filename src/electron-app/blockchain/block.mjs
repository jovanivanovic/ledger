import sha256 from 'js-sha256';

class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = sha256(this.index + this.timestamp + this.data + this.previousHash);
    }
}

export default Block;