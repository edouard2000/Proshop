import mongoose from "mongoose";
const connectedDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MongoDB_STRING);
        console.log("Mongodb is now connected")
        
    } catch (error) {
        console.log(`Error:   ${error.message}`)
        process.exit(1)
        
    }
}

export default connectedDB;