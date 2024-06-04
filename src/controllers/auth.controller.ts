import { Request, Response } from "express";
import UserModel from "../models/User.model";

export const login = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("Hello User!");
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userFound = await UserModel.findOne({ email });
    if (userFound)
      return res.status(400).json({ message: "User already exists" });
    const newUser = new UserModel({ firstName, lastName, email, password });
    await newUser.save();

    res.send("User registered! Welcome " + firstName + " " + lastName + "!");
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
