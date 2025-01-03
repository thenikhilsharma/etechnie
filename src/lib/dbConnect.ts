import mongoose from "mongoose";

type ConnectionObject = {
    isConnected? : number;  // ? is to declare that this field is optional
}

const connection: ConnectionObject = {} // creating an empty variable "connection"

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already Connected to DataBase");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "your connection string")

        connection.isConnected = db.connections[0].readyState;

        console.log("DB connected successfully");
    }
    catch (error) {
        console.log("Connection failed", error);

        process.exit();
    }
}

export default dbConnect;