import express from "express";
import authRoutes from "./routes/auth.routes";
import productsRoutes from "./routes/products.routes";
import UserModel from "./models/User.model";

const app = express();
app.use(express.json());
app.use(authRoutes);
app.use(productsRoutes);

const user = new UserModel({
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
    password: "password",
})


export default app;