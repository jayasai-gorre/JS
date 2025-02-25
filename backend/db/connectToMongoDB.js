import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err) {
        console.error(`Error Message: ${err}`);
        process.exit(1); // 1 means exit with failure and o means exit with success
    }
};

export default connectToDb;