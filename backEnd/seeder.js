import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./Data/users.js";
import products from './Data/products.js';
import User from "./models/userModel.js";
import Product from "./models/products.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;  // Corrected _d to _id
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };  // Updated variable name
        });

        await Product.insertMany(sampleProducts);
        console.log("Data Imported!".green.inverse);  // Corrected log message
        process.exit(0);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse);  // Added error log
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Data Destroyed!".green.inverse);  // Corrected log message
        process.exit(0);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse);  // Added error log
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
