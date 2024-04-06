import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ message: "User already exists" });

    //password hashing
    const hashedPassword = bcryptjs.hashSync(password, 11);
    //password hashing

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error in signup controller :", error.message);
    res.status(500).json({ error: error.message });
  }
};
