const mongoose = require('mongoose');
// const { countConnect } = require('../helpers/check.connect');
const { db: { host, name, port } } = require('../configs/config.mongoodb');
const connectionString = `mongodb://${host}:${port}/${name}`;

class Database {

    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        // if (countConnect() > 0) {
        //     mongoose.set('debug', true);
        //     mongoose.set('debug', { color: true });
        // }

        mongoose.connect(connectionString, {
            maxPoolSize: 50
        })
            .then(_ => console.log('Connected to MongoDB successfully'))
            .catch(err => console.log('Error connecting to MongoDB:', err));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;