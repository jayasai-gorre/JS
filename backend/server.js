import express from "express";
import dotenv from "dotenv";
import connectToDb from "./db/connectToMongoDB.js";
import productRoutes from "./routes/product.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(express.json()); // this allows to accept json data in the body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectToDb();
    console.log(`Server listening at port ${PORT}`);
})


