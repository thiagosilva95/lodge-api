import * as mongoose from 'mongoose';

class Database {
    
    private DB_URL = 'mongodb://localhost:27017/lodge_dev';

    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}

export default Database;