import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10); //password should be hidden in databse too
  const newUser = new User({ username, email, password: hashPassword }); // jo model bana h User usse database main store kr rhe

  try {
    await newUser.save(); // saves in data base, await-> jab tak ye line completely run nhi hogi it won't go further
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};
